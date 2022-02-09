const express         = require('express')
    , _cors           = require('cors')
    , app             = express()
    , http            = require('http')
    , path            = require('path')
    , fs              = require('fs')
    , { Server }      = require('socket.io')
    , RadioStation    = require('radio-station')

const cors = process.env.CORS

const server = http.createServer(app)
    , io = new Server(server, cors ? {
        cors: {
          origin: cors
        }
      } : {})

if (cors) {
  app.use(
    _cors({
      origin: cors
    })
  )
}

const port = 8080

;(async () => {
  const radio = await RadioStation.create({
    pathWorkDir: path.join(__dirname, 'tracks-data-folder'),
    isLauncher: false,
    mainPort: port
  })

  radio.track.loads(
    path.join(__dirname, '/../../tracks-for-load')
  )

  app.get('/radio', (req, res) => {
    radio.addListener(req, res)
  })

  io.on('connection', async socket => {
    radio.onUse(info => {
      socket.emit('onUse', info)
    })
  })

  app.get('/picture', async (req, res) => {
    radio.picture(req, res)
  })

  app.get('/info', async (req, res) => {
    radio.info(req, res)
  })
})()

app.use('/', express.static(__dirname+'/public'))

server.listen(port)
