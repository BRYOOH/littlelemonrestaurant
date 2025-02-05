import { useState } from "react";
import { UserSignup } from "../API";

const Signup = () => {
  const [formData,setFormData] = useState({
    email:"",
    name:"",
    password:"",
  });

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const checkValid=()=>{
    if(!formData.name || !formData.password || !formData.email){
      console.log("Invalid input fields");
      return false;
    }
    return true;
  }

  const handleSignup=async()=>{
    if(checkValid){
      try {
        const response = await UserSignup(formData);
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
    <div className='py-36 flex justify-center h-full'>
    <div className='flex flex-row-reverse items-center justify-center border h-full border-white/50 mt-12 w-[180vh] gap-4 p-4 rounded-xl'>
      <div className='flex-col flex-1 gap-8 flex justify-start '>
        <label htmlFor="" className='flex flex-col gap-2 text-sky-500 font-bold text-xl'>Username
        <input type="text" name='name' value={formData.name} onChange={changeHandler} placeholder='Username'  className=' px-6 py-3 rounded-xl text-black outline-none'/>
        </label>
        <label htmlFor="" className='flex flex-col gap-2 text-xl text-sky-500 font-bold'>Email
        <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Email'  className='px-6 py-3 rounded-xl  text-black outline-none'/>
        </label>
        <label htmlFor="" className='flex flex-col gap-2 text-xl text-sky-500 font-bold'>Password
        <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='password' className=' px-6 py-3 rounded-xl  text-black outline-none'/>
        </label>
        <button onClick={handleSignup}
        className='bg-sky-500 px-6 py-4 rounded-xl'>Signup</button>
        <span className='font-bold '>Already have an account? <span className='text-sky-500'>Login here</span></span>
      </div>
      <div className='flex flex-1 p-4 items-center h-full min-h-screen bg-contain bg-table1bg justify-center text-7xl text-sky-500 font-bold text-left'> 
        Welcome, join our esteemed customers
      </div>
    </div>
  </div>
  )
}

export default Signup