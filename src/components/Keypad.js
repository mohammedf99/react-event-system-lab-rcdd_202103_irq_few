// Code Keypad Component Here

const Keypad = () => {
  
  return(
    
    <div>
      <input type="password" onKeyUp={() => {
        console.log("Entering password...")
      } />
    </div>
    
  )
  
}

export default Keypad;