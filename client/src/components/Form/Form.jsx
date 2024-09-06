import React from 'react'
import Input from './Input/Input'

const Form = () => {
  return (
    <div>
      <section>
        <form action="">
            <Input/>
            <Input/>
            <Input/>

            <button type="submit" className="submit-button type-1-button">Update</button>
        </form>
      </section>
    </div>
  )
}

export default Form
