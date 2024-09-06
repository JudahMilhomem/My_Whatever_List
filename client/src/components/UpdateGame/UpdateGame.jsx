import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateGame = () => {
  const {id} = useParams(); // ?? // why '{id}'?

  return (
    <div>
      <h1 className="text text-d1">That's all folks</h1>
    </div>
  )
}

export default UpdateGame
