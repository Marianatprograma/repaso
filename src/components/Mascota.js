import React from 'react'

function Mascota({nombre, edad, estado}) {
  return (
      <>
        <h1>Hola me llamo {nombre}</h1>
        <p>Tengo {edad} años </p>
        {estado && <p> mi estado es {estado}</p>}
        <img src="" alt="" />
        <hr />

      </>
  )
}

export  {Mascota}