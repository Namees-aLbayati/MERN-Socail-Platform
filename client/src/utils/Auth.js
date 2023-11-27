const AuthFun={
    IsloggedIn:function(){
        return localStorage.getItem('token')
        
        
            },
            login:function(userData){
         const a=localStorage.setItem('token',userData)
         console.log(a,'login here')
            },
            logout:function(){
                localStorage.removeItem('token')
            }
}

export default AuthFun;
