import React from 'react'

function Hijo(props) {
  return (
    <>  
    <p>{props.nombre} </p>
    <p>{props.edad} </p>
    <p> ¿Es mayor de edad?</p>
    <label htmlFor="si">Si</label>
    <input type="checkbox" name= "si" checked={props.mayorEdad} />
    <label htmlFor="no">No</label>
    <input type="checkbox" name= "no" checked={!props.mayorEdad} />
    <hr />
    

    </>
  )
}

export {Hijo}