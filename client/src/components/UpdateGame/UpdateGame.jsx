import '../../styles/Application.css'
import '../../styles/UpdatePage.css'

import React from 'react'
import { useParams } from 'react-router-dom'

import Form from '../Form/Form'
import Image from '../Image/Image'
import Card from '../Card/Card'

const UpdateGame = () => {
  const { id } = useParams();

  return (
    <div className="container flex-container content-box">
      
      <Card/>
      <Form/>
    </div>
  )
}

export default UpdateGame
