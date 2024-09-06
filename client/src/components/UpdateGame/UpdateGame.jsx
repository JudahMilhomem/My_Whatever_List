import '../../styles/Application.css'
import '../../styles/UpdatePage.css'

import React from 'react'
import { useParams } from 'react-router-dom'

import Form from '../Form/Form'
import Image from '../Image/Image'

const UpdateGame = () => {
  const { id } = useParams();

  return (
    <div className="container flex-container content-box">
      
      <Image/>
      <Form/>
    </div>
  )
}

export default UpdateGame
