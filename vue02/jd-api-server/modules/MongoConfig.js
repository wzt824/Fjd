const mongoose = require('mongoose')

const MongoDbURL = 'mongodb://localhost:27017/myJD'
mongoose.connect(MongoDbURL,{ useNewUrlParser: true })

mongoose.connection.on('connected',(err)=>{
    console.log('mongodb connected')
})

module.exports = mongoose


