# NAS Image Installation

RDE provides an ISO image built on **Debian 13** that turns any x86_64 machine into a full-featured NAS + cloud desktop.

## Comparison with curl/deb Deployment

| | curl / deb Install | NAS ISO Image |
|---|---|---|
| **Base System** | Requires existing Ubuntu / Debian | Includes complete Debian 13 system |
| **Dependencies** | Some installed via network | All pre-installed, ready to use |
| **Flatpak** | First run requires setup for dependencies | Pre-installed, no extra setup needed |
| **Use Case** | Existing cloud server / VPS | Fresh hardware / repurposed PC as NAS |
| **Install Method** | One-line command | USB drive boot installation |

## Download

Available on GitHub Releases.

## System Requirements

- **CPU**: x86_64 architecture (Intel / AMD)
- **RAM**: Minimum 2 GB, recommended 4 GB+
- **Disk**: Minimum 16 GB, recommended 64 GB+ SSD
- **Network**: Wired network connection

## Installation Steps

### 1. Create Bootable USB Drive

Prepare a USB drive of 4 GB or larger and write the ISO using:

**Windows:**
- Rufus — Select ISO file, partition type GPT, click Start
- Ventoy — Install Ventoy, then simply copy the ISO to the USB drive

**Linux / macOS:**

    # Find USB drive device name (e.g., /dev/sdb)
    lsblk
    # Write ISO (replace device name — this will erase all data on the drive)
    sudo dd if=rde-os.iso of=/dev/sdX bs=4M status=progress && sync

### 2. BIOS Setup

1. Insert USB drive, press F2 / F12 / Del at boot to enter BIOS
2. Set USB drive as the first boot device
3. Save and exit, auto-boot from USB drive

### 3. Install System

Follow the Debian installation wizard to complete the system setup. After reboot, the RDE desktop starts automatically.

### 4. Access Desktop

Open a browser and navigate to `http://<NAS_IP>:3080` to enter the RDE desktop.

## Pre-installed Content

The ISO image includes these extras compared to curl deployment:

- **Flatpak Runtime**: Install Flatpak apps directly, no setup needed
- **Complete System Dependencies**: All system libraries and tools required by RDE
- **Disk Management Tools**: Convenient for managing multiple drives in NAS scenarios
- **Network Configuration Tools**: Static IP, bridges, and other common NAS network settings

## FAQ

### How to update RDE after ISO installation?

ISO-installed RDE can be updated via deb package:

    wget https://github.com/ruizi-store/rde/releases/latest/download/rde_latest_amd64.deb && sudo apt install -y ./rde_latest_amd64.deb

### Can I try it in a virtual machine?

Yes. Create a VM in VMware / VirtualBox / Proxmox, mount the ISO and install. Recommended: 2 cores, 4 GB RAM.

### How does it compare to Synology / fnOS?

RDE is an open-source web desktop solution that runs on any x86 hardware. Compared to Synology and fnOS:
- Fully open source, no licensing restrictions
- Built-in Docker app store
- Web desktop experience, not just a NAS management interface
