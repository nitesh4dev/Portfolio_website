import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const Welcome =()=>{
    return(
         <div className='welcome'>
    <h1 style={{ fontWeight: 'normal' }}>
      {' '}
      <div className="karma" style={{ color: 'black', fontWeight: 'bold' }}>
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={['<h1> Nitesh 🌍Karma </h1>']}
          loop={1}
          cursor
          cursorStyle='|'
          typeSpeed={60}
          deleteSpeed={50}
        />
      </div>
    </h1>
    </div>
        
    )
}
export default Welcome;