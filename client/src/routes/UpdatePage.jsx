import '../styles/UpdatePage.css'

import React from 'react'
import UpdateGame from '../components/UpdateGame/UpdateGame'

const UpdatePage = () => {
  return (
    <div>
      <main className="container flex-container content-box page-content">
        <h1 className="title page-title">Update game</h1>
        <h2 className="subheading">*game name*</h2>
        <UpdateGame/>
      </main>
    </div>
  )
}

export default UpdatePage
