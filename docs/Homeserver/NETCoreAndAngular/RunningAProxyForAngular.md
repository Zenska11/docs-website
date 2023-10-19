---
title: Running a Proxy for Angular
slug: /runningAProxyForAngular
---

## Seperate Proxy Service

Way to go!

Mit diesem Proxy wird ermöglicht, dass Backends angesprochen werden können, welche nicht von einem selbst sind. Diese werfen oft den CORS Fehler. Dieser Fehler tritt aber nur auf, wenn Browser versuchen auf diese APIs zuzugreiffen. Mit diesem Proxy zwischen Frontend und der externen API tritt das Problem nicht mehr auf, da nun der Proxy (als Backend) auf die externe API zugreift.

### Proxy-Service
***server.js***
```json
// @ts-check
// Doku: https://github.com/chimurai/http-proxy-middleware/tree/v2.0.4#intercept-and-manipulate-requests

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
var cors = require("cors");

const morgan = require("morgan");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const serveProxy = createProxyMiddleware({
  target: "https://api.clashofclans.com/v1/",
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.removeHeader("Origin");
  },
  secure: false,
  logLevel: "debug",
  pathRewrite: {
    "^/api": "",
  },
});

// Logging
app.use(morgan("dev"));

app.use("/api/*", serveProxy);
app.listen(3000);
// proxy and change the base path from "/api" to "/secret"
// http://127.0.0.1:3000/api/foo/bar -> http://www.example.org/secret/foo/bar
```
Wichtig war in dem Beispiel von CoC, dass der Header (Origin) entfernt wird.

***package.json***
```Json
{
  "name": "proxy",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "http-proxy-middleware": "^2.0.6",
    "morgan": "^1.10.0"
  }
}
```

Starten des Proxy-Service:
```bash
npm run start
```

### Angular App
Von der Angular Applikation kann folgendermaßen auf den Proxy zugegriffen werden:

***environment.ts***
```ts
export const environment = {
  production: false,
  //apiHostname: 'api',
  apiHostname: 'http://localhost:3000/api',
};
```



## Proxy in Angular:
creating a ***proxy.conf.json***
``` json
{
  "/api/*": {
	   "target": "https://api.clashofclans.com/v1/",
		"secure": false,
		"changeOrigin": true,
		"logLevel": "debug",
		"pathRewrite": {
			 "^/api": ""
		}
  }
}
```

The start scipt needs a additional parameter.

***package.json***
``` Json
"scripts": {
    "ng": "ng",
    "start": "ng serve --proxy-config proxy.conf.json",
  }
```


***environment.ts***
``` typescript
export const environment = {
  production: false,
  apiHostname: 'api',
};
```

***angular.json***
``` json
"serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "dmz:build",
            "proxyConfig": "src/proxy.conf.json"
          },
