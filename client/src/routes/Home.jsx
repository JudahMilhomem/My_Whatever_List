import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'

const Home = () => {
  return (
    <div>
      <NavigationBar/>
      <h1 className="title">Home, sweet Home</h1>
      <p className="text subheading">Welcome!</p>
    </div>
  )
}

export default Home
