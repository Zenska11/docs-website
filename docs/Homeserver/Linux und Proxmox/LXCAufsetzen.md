---
title: LXC
slug: /LXC aufsetzen
---

# Masterbefehl um LXC von Müll zu befreien

``` bash
docker system prune -a -f
```

# LXC aufsetzen

vor dem Start auf ***Optionen*** gehen -> 2x Häkchen setzen

Dann im Host (HM90-Shell):

``` bash
$ lxc-attach --name <containerID>
```

Im LXC Container:

``` bash
$ apt-get update
$ nano /etc/ssh/sshd_config
```

PermitRootLogin auf yes setzen und speichern.

``` bash
$ PermitRootLogin yes
```

Service neu starten:

``` bash
$ service ssh restart
```

Ab jetzt kann via Putty auf den LXC zugegriffen werden.