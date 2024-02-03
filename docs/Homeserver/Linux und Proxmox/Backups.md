---
title: Backup and Restore
slug: /backupAndRestore
---

```bash
pct restore <VMID> <archive.tar.gz> --rootfs <storage>:<sizeInGB>
pct restore 132 TrueNAS:backup/vzdump-lxc-130-2023_12_12-21_32_42.tar.zst --rootfs zfspool:120
```

Die Person in dem [Artikel](https://forum.proxmox.com/threads/restore-lxc-issue-cannot-write-disk-quota-exceeded.24253/) hatte den selben Fehler und damit habe ich es lösen können.
