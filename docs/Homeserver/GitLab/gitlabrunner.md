---
title: Gitlab-Runner
slug: /gitlabrunner
---
# GitLab-Runner

## Gitlab-Runner installieren

[GitLab Doku](https://docs.gitlab.com/runner/install/linux-repository.html)
Add the official GitLab repository:
```bash
curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
```
Install the latest version of GitLab Runner:
```bash
apt-get install gitlab-runner
```

## GitLab-Runner einrichten

[GitLab](https://docs.gitlab.com/runner/)

1. In GitLab in ein Repository gehen
2. Settings -> CICD -> Runners -> New Project Runner -> OperatinSystem = Linux
3. Root-Ordner braucht folgende Berechtigungen, damit der GitLab-Runner die Befehle im Rootverzeichnis ausführen kann
```bash
cd ..
chmod 777 root
```
