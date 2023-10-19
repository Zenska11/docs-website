---
title: Festplatten löschen und formatieren
slug: /festplattenLoeschenUndFormatieren
---

[Useful link](https://forum.proxmox.com/threads/create-zfs-fails-gui.49761/)

Alle Festplatten anzeigen lassen:
``` bash
$ lsblk
$ fdisk /dev/sda
$ d
$ p
$ w
```

Danach sollte noch ein Label gesetzt werden:
```bash
$ parted mklabel "gps"
```
