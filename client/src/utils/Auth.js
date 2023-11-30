import { jwtDecode } from "jwt-decode";

const AuthFun={
    getProfile(data){

const getToken=JSON.parse(localStorage.getItem('token'));
const decoded = jwtDecode(getToken, "mysecret");
localStorage.setItem('user',JSON.stringify(decoded.data))
return decoded
    },
    IsloggedIn:function(){
        
        let getUser=JSON.parse(localStorage.getItem('token'))
        if(getUser){
            return true
        }else{
            return false
        }
        
        
            },
            login:function(userData){
if(!userData){
    localStorage.removeItem('token')

return 
}else{
    localStorage.setItem('token',JSON.stringify(userData.userToken))
    window.location.href='/dashboard'
}
            },
            logout:function(){
                localStorage.removeItem('token')
            }
}

export default AuthFun;
