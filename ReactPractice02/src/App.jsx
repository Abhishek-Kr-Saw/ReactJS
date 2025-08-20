import { useState } from 'react'
import './App.css'
import Form from './Form'
import CommentsForm from './CommentsForm'
import Comment from './Comment'
import Joker from './Joker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form />
      <CommentsForm />
      <Comment /> */}

      <Joker />
    </>
  )
}

export default App
