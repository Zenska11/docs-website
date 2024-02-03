---
title: Wordpress
slug: /wordpress
---

# Wordpress
## Wordpress Upload Limit hochsetzen

Im Rootverzeichnis eine *php.ini* mit folgendem Inhalt anlegen:
```php.ini
upload_max_filesize = 64M
post_max_size = 128M
memory_limit = 264M
```
