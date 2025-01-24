// const mongoose = require('mongoose')

// mongoose.connect(`${process.env.DATABASE_URL}/anaxee`)
//     .then(()=>{
//         console.log("server connection done")
//     })
//   .catch((e)=>{
//     console.log(e,"error in connecting")
//   })
// module.exports = mongoose.connection
const mongoose = require('mongoose');

    mongoose.connect("mongodb://127.0.0.1:27017/anaxee")
    .then(()=>{
        console.log("connected")
    })

    .catch((e)=>{
        console.log("error",e);
    })

module.exports = mongoose.connection;