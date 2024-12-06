 const mongoose = require("mongoose")


const connectionString = process.env.CONNECTIONSTRING

mongoose.connect(connectionString).then((res)=>{
    console.log("MongoDB Atlas successfully connected with cookpedia server");

}).catch(err=>{
    console.log("MongoDB Atlas Connection failed!!!");
    console.log(err);
})