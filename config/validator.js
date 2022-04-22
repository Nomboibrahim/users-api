const yup =require("yup")
function validate(data){
    const userSchema=yup.object().shape({
        username:yup.string().require("Fill me").min(2).max(50),
        email:yup.string().email().require("").min(20).max(30),
        password:yup.string().require().min(8).max(100),
    })
}
module.exports=validate