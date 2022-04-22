
const userhandler = {}

userhandler.handleErrors = (error)=>{
    let errorData = {username:"", password:""};

    if(error.code ===11000){
        errorData.username = "the username is not available";
        return errorData;

    };
    if (error.message.includes("user validation fail")){
     object.values(error.errors).forEach(({properties})=>{
         errorData[properties.path]= properties.message;
     })

     }   
    }
module.exports=userhandler