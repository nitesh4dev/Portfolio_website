import React, { useEffect, useState } from "react";
import Welcome from "./conponents/Welcome";
import Main from "./Main";

const App = () =>{
  const [welcome, setWelcome] = useState(false);

  useEffect(()=>{
    setWelcome(true);
    setTimeout(() => {
      setWelcome(false)
    }, 3000);
  },[])

  return(
    <>
    {welcome? <Welcome/> : <Main/>}
    </>
  )
}

export default App;