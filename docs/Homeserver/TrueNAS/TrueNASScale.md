---
title: TrueNAS Scale
slug: /trueNasScale
---

# TrueNAS Passthrough HHDs

[YouTube Video](https://www.youtube.com/watch?v=M3pKprTdNqQ&t=828s)

```bash
lsblk
lsblk -o +MODEL,SERIAL

```

# TrueNAS Scale BigBoi

## Einrichtung von TrueNAS Scale

[YouTube Video](https://www.youtube.com/watch?v=C-UI8Wvl9YU&ab_channel=RaidOwl)

**User erstellen:**

*Credential -> Local User -> ADD*

--- 

**Directory erstellen:**

_Storage -> create dataset (directory) -> Share Type SMB_

--- 

**SMB Share auf das Directory erstellen:**

_Share -> SMB -> ADD -> select directory_

--- 

**Auf dem Dataset dem User die Permissions geben:**

_Storage -> View permissions -> add item -> user -> select user -> Full Control_

--- 

**Erreichbar unter:**

\\192.168.178.71\BigBoi

# Plex and Jellyfin

[YouTube Video](https://www.youtube.com/watch?v=3GpaxFYe3MU) 
