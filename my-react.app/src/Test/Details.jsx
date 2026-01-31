import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';

function Details() {
    const [post , setPost] = useState(null);
    const {id} = useParams();
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=> res.json())
    .then((data)=> setPost(data));
},[id])
if (!post) return <h3>Lodding...</h3>

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to={"/"}>Back</Link>
    </div>
  )
}

export default Details
