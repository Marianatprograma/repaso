import React from 'react'

function Mom(props) {


    const [likes, setLikes] = React.useState(0);
    
    const addLikes = () => {
         setLikes(likes + 1); 
    }

    

  return (
    <div>
    My Mom is {props.nombre}  🎂

    <input type="button" value={`👍 `  + likes} onClick={addLikes} />

    <div></div>

    
    </div>

  )
}

export {Mom};