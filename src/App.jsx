import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
    const [bookmarks, setBookmarks] = useState([])

    const handleAddToBookmark = blog =>{
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }

  return (
    <>
      <Header></Header>
      <div className=' md:flex max-w-4xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
