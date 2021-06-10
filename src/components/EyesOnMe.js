// Code EyesOnMe Component Here

const EyesOnMe = () => {
  
  return(
    
    <div>
      <button 
      onClick={() => console.log('Good!')} 
      onBlur={() => console.log("Hey! Eyes on me!")}>Click</button>
    </div>
    
  )
  
}

export default EyesOnMe;