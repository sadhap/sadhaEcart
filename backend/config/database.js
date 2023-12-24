const mongoose = require("mongoose"); //import mongo db module
const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{//connection string
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`moongodb is connected to be the host:${con.connection.host}`)
    })
}
module.exports = connectDatabase;