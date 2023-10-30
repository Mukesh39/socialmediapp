import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './post.css';
import {Users} from '../../dummyData.js';
import { useState } from 'react';



const Post = ({post}) => {

  const user = Users.filter(u=>u.id===1)
  console.log(user[0].username);

  const [like, setLike] = useState(post.like);

  const [isLiked , setIsLiked ] = useState(false);


const likeHandler = ()=>{

  setLike(isLiked ? like-1 : like+1);
  setIsLiked(!isLiked);
 


}



  return (
    <div className='post'>
    <div className="postWrapper">
    <div className="postTop">
    <div className="postLeft">
        <img  className='postProfileImg'  src="/assets/modi.webp" alt="modi" />
        <span className="postUserName">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
        <span className="postDate">5 Minutes ago </span>
    </div>
    <div className="postRight">
    <MoreVertIcon/>
    </div>
    

    </div>

    <div className="postCenter">
    <span className="postText">{post?.desc}</span>
    <img src="/assets/elon.webp" alt="Mukesh" className="postImg" />
    </div>
    <div className="postBottom">

            <div className="postBottomLeft">
            <img src="/assets/heart.png" alt="like" className="likeIcon"  onClick={likeHandler} />
            <img src="/assets/likes.png" alt="heart" className="likeIcon"   onClick={likeHandler} />
            <span className="postLikeCounter">{like}</span>
            </div>

            <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments </span>
            </div>

    
    </div> 
    </div>
    
    </div>
  )
}

export default Post