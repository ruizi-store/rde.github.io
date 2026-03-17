#!/bin/bash
# RDE Desktop Installer
# https://desktop.ruizi.store

set -e

REPO="ruizi-store/rde"
TMP_DIR=$(mktemp -d)
trap "rm -rf $TMP_DIR" EXIT

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

info() { echo -e "${BLUE}▸${NC} $1"; }
success() { echo -e "${GREEN}✓${NC} $1"; }
warn() { echo -e "${YELLOW}!${NC} $1"; }
error() { echo -e "${RED}✗${NC} $1"; exit 1; }

echo ""
echo -e "${BLUE}╭─────────────────────────────────────╮${NC}"
echo -e "${BLUE}│${NC}     🖥️  RDE Desktop Installer       ${BLUE}│${NC}"
echo -e "${BLUE}╰─────────────────────────────────────╯${NC}"
echo ""

# Check root
if [[ $EUID -eq 0 ]]; then
  SUDO=""
else
  SUDO="sudo"
  info "Will use sudo for installation"
fi

# Detect architecture
ARCH=$(dpkg --print-architecture 2>/dev/null || uname -m)
case "$ARCH" in
  amd64|x86_64) ARCH="amd64" ;;
  arm64|aarch64) ARCH="arm64" ;;
  *) error "Unsupported architecture: $ARCH" ;;
esac
info "Detected architecture: $ARCH"

# Check if in China (timeout 2s)
check_china() {
  # Try to reach Google, if fails assume China
  curl -sL --connect-timeout 2 --max-time 3 "https://www.google.com" >/dev/null 2>&1 && return 1 || return 0
}

USE_MIRROR=false
if [[ "$1" == "--cn" ]] || [[ "$1" == "-c" ]]; then
  USE_MIRROR=true
  info "Using China mirror (manual)"
elif check_china; then
  USE_MIRROR=true
  info "Detected China network, using mirror"
fi

# Fetch latest release info
info "Fetching latest release info..."
RELEASE_JSON=$(curl -sL "https://api.github.com/repos/$REPO/releases/latest")

VERSION=$(echo "$RELEASE_JSON" | grep -o '"tag_name": *"[^"]*"' | head -1 | cut -d'"' -f4)
if [ -z "$VERSION" ]; then
  error "Failed to fetch latest version"
fi
success "Latest version: $VERSION"

# Find deb URL for architecture
DEB_URL=$(echo "$RELEASE_JSON" | grep -o "https://[^\"]*${ARCH}[^\"]*\.deb" | head -1)

# Fallback: try generic deb if arch-specific not found
if [ -z "$DEB_URL" ]; then
  DEB_URL=$(echo "$RELEASE_JSON" | grep -o 'https://[^"]*\.deb' | head -1)
fi

if [ -z "$DEB_URL" ]; then
  error "Failed to find deb package for $ARCH"
fi

# Apply mirror if needed
if $USE_MIRROR; then
  DEB_URL="https://ghproxy.net/$DEB_URL"
  info "Using mirror: ghproxy.net"
fi

DEB_FILE="$TMP_DIR/rde.deb"
info "Downloading $(basename "$DEB_URL")..."

# Download with progress
if command -v wget &>/dev/null; then
  wget -q --show-progress -O "$DEB_FILE" "$DEB_URL" || error "Download failed"
else
  curl -fSL --progress-bar -o "$DEB_FILE" "$DEB_URL" || error "Download failed"
fi
success "Download complete"

# Install
info "Installing RDE Desktop..."
$SUDO apt install -y "$DEB_FILE" || error "Installation failed"

echo ""
echo -e "${GREEN}╭─────────────────────────────────────╮${NC}"
echo -e "${GREEN}│${NC}     ✅ RDE installed successfully!  ${GREEN}│${NC}"
echo -e "${GREEN}╰─────────────────────────────────────╯${NC}"
echo ""
echo -e "  ${BLUE}▸${NC} Start RDE:    ${YELLOW}sudo systemctl start rde${NC}"
echo -e "  ${BLUE}▸${NC} Open browser: ${YELLOW}http://localhost:3080${NC}"
echo ""
