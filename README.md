![logo](https://github.com/prohetamine/radio-station/blob/main/media/logo.png)

##### README is available in the following languages: [Russian](https://github.com/prohetamine/docker-node-web-radio/blob/main/README/russian.md) | [English](https://github.com/prohetamine/docker-node-web-radio/blob/main/README.md)


# Docker Node Web Radio

> docker-node-web-radio - radio station for nodejs, this example is for the main radio-station library.

### Why ?
This example shows how you can start broadcasting using docker without installation difficulties, this is just an example, official documentation can be found in [radio-station](https://github.com/prohetamine/radio-station), if you want to conduct a full broadcast with a voice, use [docker-launcher-web-radio](https://github.com/prohetamine/docker-launcher-web-radio)

### Get started

Let's install the container from Docker Hub ```prohetamine/docker-node-web-radio```

```sh
$ docker pull prohetamine/docker-node-web-radio
```

Also build

```sh
$ git clone git@github.com:prohetamine/docker-node-web-radio.git
$ cd docker-node-web-radio
$ docker build . -t docker-node-web-radio
```

### Examples and description

Now just run and go to the default address http://localhost:8080

```sh
$ docker run --rm -p 8080:8080 -v /yourtracksfolder:/tracks-for-load prohetamine/docker-node-web-radio
```

### Contacts

My Telegram: [@prohetamine](https://t.me/prohetamine), [channel](https://t.me/prohetamines)

Email: prohetamine@gmail.com

Donat money: [patreon](https://www.patreon.com/prohetamine)

If you have any questions and/or suggestions, please email me in telegram, if you find any bugs also let me know, I will be very grateful.
