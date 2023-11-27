import React, { useState } from 'react';

const AuthForm = () => {
  const [showSignup, setShowSignup] = useState(false);
 

function handelSubmit(e){

}
function toggleForm(){
  setShowSignup(!showSignup)
}
  return (
    <form  style={{border:'2px solid red',height:"200px"}} onSubmit={handelSubmit}>
      
      {showSignup?
      (
        <>
      <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
       
        required
      />
    </div>
  
  <div>
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
   
      required
    />
  </div>
  <div>
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      name="password"
    
      required
    />
  </div> </>):(<>
    <div>
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
   
      required
    />
    </div>
    <div>
    <label htmlFor="email">password:</label>
    <input
      type="password"
      id="password"
      name="password"
   
      required
    />
    </div>
   <p>
    {showSignup?'Already have an account?':'Dont have account?'}
    <span style={{marginLeft:"4px",cursor:'pointer',color:'blue'}} onClick={toggleForm}>{showSignup?'Log in':'Signup'}</span>
    </p>
  </>)
    }

{showSignup?<button>SignUp</button>:<button>Login</button>}
        </form>

  );
};

export default AuthForm;
