// Code EyesOnMe Component Here

const EyesOnMe = () => {
  
  return(
    <button 
      onClick={() => console.log('Good!')} 
      onBlur={() => console.log("Hey! Eyes on me!")}
    >Click</button>
  )
  
}

export default EyesOnMe;