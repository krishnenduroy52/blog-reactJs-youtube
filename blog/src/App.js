import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blogs from './Components/Blogs';
import BlogDetails from './Components/BlogDetails';
import AddBlog from './Components/AddBlog';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import Editpost from './Editpost';
import axios from "axios"


function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    axios.post("http://localhost:2000/addblog", blog);
  }

  const deleteHandel = async (id) => {
    await axios.delete(`http://localhost:2000/blogs/${id}`);
  }

  const updateBlogHandel = async (bg) => {
    await axios.put(`http://localhost:2000/blogs/${bg.id}`, bg)
  }

  useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get("http://localhost:2000/blogs");
      setBlogs(response.data)
    }
    getBlogs();
  }, [blogs])

  // const LOCAL_STORAGE_KEY = 'react-blog-application-by-krishnendu'

  // const [blogs, setBlogs] = useState([
  //   {
  //     id: nanoid(),
  //     title: "Welcome to krishnendu's blog",
  //     date: new Date().toLocaleDateString(),
  //     dics: "This is my bloging website",
  //   },
  // ])

  // // Set data to Localstorage
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(blogs))
  // }, [blogs])

  // // Get data from local storage
  // useState(() => {
  //   const fetchBlogs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  //   if (fetchBlogs) setBlogs(fetchBlogs)
  // })

  // // Addblog
  // const addBlog = (blog) => {
  //   setBlogs([...blogs, { id: nanoid(), ...blog }])
  // }

  // // Delete Blog
  // const deleteHandel = (id) => {
  //   const newBlogs = blogs.filter((blog) => {
  //     return blog.id !== id;
  //   })

  //   setBlogs(newBlogs);
  // }

  // // Update blog
  // const updateBlogHandel = (bg) => {
  //   const { id, title, date, dics } = bg;
  //   setBlogs(
  //     blogs.map((blog) => {
  //       return blog.id === id ? { ...bg } : blog;
  //     })
  //   )
  // }
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<Blogs Blogs={blogs} deleteHandel={deleteHandel} />} />
          <Route path='/read/:id' element={<BlogDetails />} />
          <Route path='/add-blog' element={<AddBlog addBlog={addBlog} />} />
          <Route path='/edit' element={<Editpost updateBlogHandel={updateBlogHandel} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
