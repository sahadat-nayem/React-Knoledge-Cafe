import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
    const [bookmarks, setBookmarks] = useState([])
    const [readingTime, setReaditngTime] = useState(0)

    const handleAddToBookmark = blog =>{
      const isexist = bookmarks.find((blog) => blog.id == blog.id);
      if (isexist){
        alert("add Kora Jabe na")
      }
      else{
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
      }
    }

    const handleMarkAsRead = (id, time) =>{
      setReaditngTime(readingTime + time);

      // remove the read blog from bookmark

      const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id );
      setBookmarks(remainingBookmarks);
      
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
