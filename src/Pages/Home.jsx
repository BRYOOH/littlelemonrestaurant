import Bio from "../Components/Bio"
import Intro from "../Components/Intro"
import Logo from "../Components/Logo"

const Home = () => {
  return (
    <div className="h-full mb-[150px] p-4 py-20 z-30">
      <Intro/>
      <Bio/>
      <Logo/>
    </div>
  )
}

export default Home