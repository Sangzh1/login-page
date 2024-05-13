import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


function Home() {
  const {user, dispatch} = useContext(GlobalContext)
  return (
    <div> 
      <h1>Hello World</h1>
    </div>
  )
}

export default Home