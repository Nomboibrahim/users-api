const mongoose = require("mongoose")
const usersSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        
        
    },
    email:{
        type:String,
        require:true,
        
    },
    password:{
        type:String,
        require:true

    
    },
    
    
  },{
      timestanps:true
  }       
        

);


const User = mongoose.model("User", usersSchema);
module.exports= User;