import { useState } from 'react';
import Reader from '../components/Reader/Reader';
import articles from '../components/articles.json';
import css from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Reader items={articles} />
    </>
  )
}

export default App
