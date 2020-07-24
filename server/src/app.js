const express = require("express")
const app = express()
const serverHttp = require('http').Server(app)
const cors = require('cors')

require("./database")


const io = require('socket.io')(serverHttp)

app.set("port", process.env.PORT || 8000)
app.set('io', io)

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/api',require('./routes/todos'))




serverHttp.listen(app.get("port"), () => {
    console.log('server on port', app.get("port"));
})