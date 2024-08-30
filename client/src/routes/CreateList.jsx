import '../styles/CreateList.css'

import React from 'react'
import GameFinderTable from '../components/GameFinderTable/GameFinderTable'
import AddGameForm from '../components/AddGameForm/AddGameForm'

const CreateList = () => {
  return (
    <div className="flex-container">
      <main className="flex-container page-content">
        <section className="flex-container list-of-games">
          <h1 className="title section-title">List Of Games</h1>
          <GameFinderTable/>
        </section>

        <section className="flex-container add-a-game">
          <AddGameForm/>
        </section>
      </main>
    </div>
  )
}

export default CreateList
