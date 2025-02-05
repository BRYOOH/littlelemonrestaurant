import { useState } from "react";
import { UserLogin } from "../API";

const Login = () => {

  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const checkValid=()=>{
    if(!formData.name || !formData.password){
      console.log("Invalid input fields");
      return false;
    }
    return true;
  }

  const handleLogin=async()=>{
    if(checkValid){
      try {
        const response = await UserLogin(formData);
        if(response && response.data){
            alert("User has been Logged in successifully ");
            localStorage.setItem("auth-token",response.data.token);
        }
      } catch (error) {
        console.log('There was an error',error);
        alert(error);
      }
    }
  };
  return (
    <div className='py-36 items-center flex justify-center'>
      <div className='flex items-center justify-center  gap-4 border border-white/50 mt-12 w-[180vh] p-2 rounded-xl'>
        <div className='flex-col flex-1 gap-8 flex  bg-slate-800 p-2 rounded-xl justify-start '>
          <label htmlFor="" className='flex flex-col gap-2 text-xl  text-black'>Email
          <input type="text" name='email' value={formData.email} onChange={changeHandler} placeholder='Username'  className=' px-6 text-black py-3 rounded-xl outline-none'/>
          </label>
          <label htmlFor="" className='flex flex-col gap-2 text-xl  text-black'>Password
          <input type="password" name='password' value={formData.password} onChange={changeHandler}  placeholder='password' className=' px-6 py-3 text-black rounded-xl outline-none'/>
          </label>
          <button className='bg-sky-500 px-6 py-4 rounded-xl'
          onClick={handleLogin}
          >Login</button>
          <span className='font-bold '>Dont have an account? <span className='text-sky-500'>Signup here</span></span>
        </div>
        <div className='flex flex-1 items-center justify-center h-full min-h-screen bg-tablebg  p-4'> 
        
        </div>
      </div>
    </div>
  )
}

export default Login