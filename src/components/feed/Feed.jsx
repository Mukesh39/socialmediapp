import React from 'react';
import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import {Posts} from '../../dummyData.js';

const Feed = () => {

  return (
    <div className='feed'>
    <Share/>
   {Posts.map((p)=>(
    <Post  key={p.id} post = {p} />
  ))}

   
    </div>
  )
}

export default Feed ; 