import React from 'react'

const Square = ({value, onSquareClick}) => {
  return (
    <p className="h-16 w-16 border cursor-pointer text-center" onClick={onSquareClick}>
    {value}
  </p>  )
}

export default Square