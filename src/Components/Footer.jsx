import { Link } from "react-router-dom"
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

const Footer = () => {

  return (
    <div className=" border-t border-gray-500 p-2">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center">
        <img src={logo} alt="" 
        className="size-28"
        />
          <div className="flex gap-20">
          { Links.map((link,index)=>(
            <Link to={link.path} key={index}> 
            <p className="text-2xl text-white/50">{link.name}</p></Link>
            ))  
          }
          </div> 
          </div>
          <hr className=" w-[150vh] bg-white/50"/>
          <p className="text-2xl text-white/50">Copyright @ 2024</p>
  
      </div>
    </div>
  )
}

export default Footer