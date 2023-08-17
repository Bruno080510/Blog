import { useEffect, useState } from "react"

import Home from "./components/Home"
import NavBar from "./components/Navbar"
import Card from "./components/Card"
function App(){
  const [user, setUser] = useState([])


  useEffect(()=>{
    fetch('https://api-rest-post-diegocandido.herokuapp.com/postagens/', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then((res) => res.json())
    .then((json) => setUser(json))
  },[])


  return(
    <main >
      <Home />
      <Card/>
    </main>
  )
}


export default App