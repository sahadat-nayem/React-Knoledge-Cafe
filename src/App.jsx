import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/blogs'
import Booksmarks from './components/Booksmarks/Booksmarks'

function App() {

  return (
    <>
      <Header></Header>
      <div className=' md:flex'>
        <Blogs></Blogs>
        <Booksmarks></Booksmarks>
      </div>
    </>
  )
}

export default App
