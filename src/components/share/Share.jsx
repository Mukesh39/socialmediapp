import React from 'react' ; 
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';

import './share.css';

const Share = () => {
  return (
    <div className='share'>
                <div className="shareWrapper">
                  <div className="shareTop">
                  
                      <img  className='shareProfileImg' src="/assets/modi.webp" alt="modi bro" />
                      <input type="text" placeholder='whats in your Mind Bro' 
                      className='shareInput' />
                </div>
                <hr className='shareHr'/>
                <div className="shareBottom">
                      <div className="shareOptions">

                            <div className="shareOption">
                                <PermMediaIcon className='shareIcon' htmlColor='tomato'/>
                                <span className="shareOptionText">Photo or Video </span>
                            </div>


                            <div className="shareOption">
                            <PermMediaIcon className='shareIcon' htmlColor='green'/>
                                <span className="shareOptionText">Tag</span>
                            </div>


                            <div className="shareOption">
                            <PermMediaIcon className='shareIcon' htmlColor='black'/>
                                <span className="shareOptionText">Location </span>
                            </div>

                            <div className="shareOption">
                            <PermMediaIcon className='shareIcon' htmlColor='blue'/>
                                <span className="shareOptionText">Feeling</span>
                            </div>
                      
                      </div>
                      <button className="shareButton">Share</button>
                </div>
        </div>      
</div>
  )
}

export default Share ; 