const mongoose = require('mongoose');


async function connectDB() {
     await mongoose.connect(process.env.MONGO_URI)
          .then(() =>{
               console.log('Connected to Database Successfully')
          })
          .catch((err) => {
               console.log('Error connecting to the Database:' , err)
          })
}


module.exports = connectDB