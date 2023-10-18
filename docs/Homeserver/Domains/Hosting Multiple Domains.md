---
title: Hosting multiple domains
slug: /hostingMultipledomains
---

[What helped me](https://www.techandme.se/setup-multiple-accounts-with-ddclient-and-cloudflare/)

```config
protocol=cloudflare
use=web
web=ipinfo.io/ip
#web-skip='IP Address'
login=<email>
password=<token>

zone=zenzenmarckevin.de
zenzenmarckevin.de, *.zenzenmarckevin.de

zone=marckevinzenzen.de
marckevinzenzen.de, *.marckevinzenzen.de

```
Both domains are available.