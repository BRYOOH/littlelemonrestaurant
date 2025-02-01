import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/lemonlogo.png'

const Links =[
  {
    path :'/',
    name: "Dashboard",
  },{
    path :'/profile',
    name: "Profile",
  },
  {
    path :'/reservation',
    name: "Reservation",
  },
];
const Navbar = () => {
  const router= useNavigate();
  return (
    <div className='w-full border-b border-gray-500 fixed z-50 backdrop-blur '>
      <div className='flex justify-between items-center'>
        <div className='flex items-center justify-center text-3xl text-bold text-sky-500 font-bold uppercase'>
          <img src={logo} alt="" className='w-[55px]'/> 
          Little lemon</div>
          <div className='flex gap-24'> 
            {Links.map((link, index)=>(
              <Link to={link.path} key={index}>
                <span className='text-xl font-bold text-white/50'>{link.name}</span>
              </Link>
            ))}
          </div>
          <div className='flex gap-10 p-4'>
            <button className='p-4 bg-sky-500 rounded-xl' onClick={()=>router('/login')}>Login</button>
            <button className='p-4 bg-sky-500 rounded-xl' onClick={()=>router('/signup')}>Signup</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar