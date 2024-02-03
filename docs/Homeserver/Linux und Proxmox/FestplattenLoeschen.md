---
title: Festplatten löschen und formatieren
slug: /festplattenLoeschenUndFormatieren
---

[Useful link](https://forum.proxmox.com/threads/create-zfs-fails-gui.49761/)

Alle Festplatten anzeigen lassen:
``` bash
$ lsblk
$ lsblk -o +MODEL,SERIAL //zeigt das Modell und die Seriennummer der Festplatten an
$ ls /dev/disk/by-id  // zeigt die namen der Platten an welche im nächsten Schritt verwendet werden können
$ qm set <proxmoxID -> 150> -scsi1 /dev/disk/by-id/ata-ST4000VN008-2DR166_ZDHA052S // Meine 4TB Platte


$ fdisk /dev/sda
$ d
$ p
$ w
```

Danach sollte noch ein Label gesetzt werden:
```bash
$ parted mklabel "gps"
```
