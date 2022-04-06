// Hooks Blogger
//     Fetch all blogs from api
//     Display all blogs using map
//     Implement pagination with useEffect API call with inputs limit and page

// `https://6239ddb128bcd99f02763cfe.mockapi.io/blogs?limit=${limit}&page=${page}`

// Imports
import './App.css';
import { useState, useEffect } from 'react';
import Blog from './component/Blog';

// API interactions
const blogURL = 'https://6239ddb128bcd99f02763cfe.mockapi.io'

function App() {
  const [blogs, setBlogs] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(4)

  useEffect(() => {
    const fetchblogData = async () => {
      const response = await fetch(`${blogURL}/blogs/?limit=${limit}&page=${page}`)
      const responseJSON = await response.json()
      setBlogs(responseJSON)
      return responseJSON
    }
    fetchblogData()
  }, [page, limit])

  return (
    <div className='app'>
      <h1>Hooks Blogger</h1>
      Page: {page}, Limit: {limit}
      <br />
      <label>Page: </label>
      <input
        type="number"
        value={page}
        onChange={e => setPage(e.target.value)}
      />
      <br />
      <label>Limit: </label>
      <input
        type="number"
        value={limit}
        onChange={e => setLimit(e.target.value)}
      />

      <div className='blogs'>
        {blogs.map((post) => {
          return <Blog
            key={`blog-${post.id}`}
            id={post.id}
            author={post.author}
            createdAt={post.createdAt}
            text={post.text}
            title={post.title}
          />

        })}
      </div>

    </div>
  )
}

export default App