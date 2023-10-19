---
title: MQTT Broker
slug: /mqttBroker
---
# Konfigurieren eines MQTT Brokers mithilfe von Docker

Mosquito:

Auf Docker Container einloggen
``` shell
docker exec -it eclipse-mosquitto /bin/sh^C
```

Einen User erstellen:
```
mosquitto_passwd -c /mosquitto/config/password.txt hass
```

[**Quelle**](https://www.homeautomationguy.io/blog/docker-tips/configuring-the-mosquitto-mqtt-docker-container-for-use-with-home-assistant)
