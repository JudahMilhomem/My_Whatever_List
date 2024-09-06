import '../styles/UpdatePage.css'

import React from 'react'
import UpdateGame from '../components/UpdateGame/UpdateGame'

const UpdatePage = () => {
  return (
    <div>
      <main className="container flex-box-container">
        <h1 className="title page-title">Update game</h1>
        <UpdateGame/>
      </main>
    </div>
  )
}

export default UpdatePage
