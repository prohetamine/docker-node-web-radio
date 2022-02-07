![logo](https://github.com/prohetamine/radio-station/blob/main/media/logo.png)

##### README доступен на языках: [Русский](https://github.com/prohetamine/docker-node-web-radio/blob/main/README/russian.md) | [Английский](https://github.com/prohetamine/docker-node-web-radio/blob/main/README.md)


# Docker Node Web Radio

> docker-launcher-web-radio - радиостанция для nodejs, этот пример для основной библиотеки radio-station.

### Почему ?
Этот пример показывает, как вы можете начать вещание с помощью docker без трудностей с установкой, это всего лишь пример, официальную документацию можно найти в [radio-station](https://github.com/prohetamine/radio-station)

### С чего начать

Установим контейнер из Docker Hub ```prohetamine/docker-node-web-radio```

```sh
$ docker pull prohetamine/docker-node-web-radio
```

Also build

```sh
$ git clone git@github.com:prohetamine/docker-node-web-radio.git
$ cd docker-node-web-radio
$ docker build . -t docker-node-web-radio
```

### Примеры и описание

Теперь просто запустите и перейдите по адресу по умолчанию http://localhost:8080

```sh
$ docker run --rm -p 8080:8080 -v /yourtracksfolder:/tracks-for-load prohetamine/docker-node-web-radio
```

### Контакты

Мой Телеграм: [@prohetamine](https://t.me/prohetamine), [канал](https://t.me/prohetamines)

Почта: prohetamine@gmail.com

Донат денег: [patreon](https://www.patreon.com/prohetamine)

Если у вас есть какие-либо вопросы и/или предложения, пожалуйста, напишите мне в телеграмме, если вы найдете ошибки также дайте мне знать, я буду очень благодарен.
