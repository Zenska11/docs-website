---
title: Palworld
slug: /palworld
---

# Alle Konfigurationen für einen Palworld Server

## Admin Rechte

Palworld Server Ordner muss Adminrechte haben.

```bash
chmod -R 777 ./ark2
```

## Image

[GitHub](https://github.com/thijsvanloef/palworld-server-docker?tab=readme-ov-file)

[Palworld Config Site](https://tech.palworldgame.com/optimize-game-balance)

## PalWorldSettings.ini

**Location config file:**

```
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

## Reset der PalworldSettings.ini

Beim Restarten resettet sich manchmal die PalworldSettings.ini.
Um dies zu verhindern muss diese lediglich auf "readonly" gesetzt werden.

``` bash
chmod a=r PalWorldSettings.ini
```