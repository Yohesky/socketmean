const mongoose = require("mongoose")


const URI = `mongodb+srv://yohesky:yohesky@cluster0.ve0sa.mongodb.net/websockets?retryWrites=true&w=majority`

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

    .then(db => console.log('data base conectada'))
    .catch(err => console.error(err))