import React from 'react'
import Blog from './Blog'
import Header from './Header'

const Blogs = (props) => {
    // console.log(props.Blogs)
    const deleteHandel = (id) => {
        props.deleteHandel(id);
    }
    return (
        <div>
            <Header />
            {
                props.Blogs.map((blog) => (
                    <Blog key={blog._id} blog={blog} deleteHandel={deleteHandel} />
                ))

            }
        </div>
    )
}

export default Blogs