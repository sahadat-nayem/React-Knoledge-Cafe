import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
    const [bookmarks, setBookmarks] = useState([])
    const [readingTime, setReaditngTime] = useState(0)

    const handleAddToBookmark = blog =>{
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }

    const handleMarkAsRead = time =>{
      setReaditngTime(readingTime + time);
      
    }

  return (
    <>
      <Header></Header>
      <div className=' md:flex max-w-4xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
