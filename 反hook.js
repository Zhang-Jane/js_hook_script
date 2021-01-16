function encry(){
    return "ox0oo"
    
}
native_code = encry.toString();
hook_encry = encry;
var hook_encry = function(){
    return "hook"
};

function detect(){
    // console.log(encry.toString());
    if (encry.toString() != native_code){
        console.log(22131);
        return "detect"
    }
}
if (detect() == "detect"){
    console.log(encry());
}else{
    // console.log(encry())
    console.log("11")
}
