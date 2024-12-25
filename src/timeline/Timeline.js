import Post from "./posts/Post";
import React, { useState } from "react";
import Suggestions from './Suggestions';
import "./Timeline.css";
import post from "./posts/Post";

function Timeline() {
  const [posts,setPosts]=useState([
    {
      user:"kuttyz_kitchen",
      postImage:"https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000",
      likes:7056,
      timepamp:"1hr",
    },

    {
      user:"Civaranjan",
      postImage:"https://t3.ftcdn.net/jpg/05/52/60/28/360_F_552602806_xYzoTYtHUNcwJizbgBsgSqgmQysQcEtU.jpg",
      likes:1690,
      timepamp:"3hr",
    },

    {
      user:"ElonMusk",
      postImage:"https://d.newsweek.com/en/full/1962972/spacex-owner-tesla-ceo-elon-musk.jpg ",
      likes:75896,
      timepamp:"1d",
    },

    {
      user:"JeffBezos",
      postImage:"https://assets.gqindia.com/photos/5cdc18a6306c1c160f6e4280/4:3/w_1440,h_1080,c_limit/Jeff-bezos.jpg ",
      likes:532,
      timepamp:"2d",
    },







  ])


  return (
    <div className='timeline'>
      <div className='timeline__left'>
       <div className="timeline__posts">
        
        {posts.map(post =>(
          <Post  
          user={post.user} 
          postImage={post.postImage} 
          likes={post.likes} 
          timestamp={post.timepamp} 
          />
        ))}

        </div> 
        </div>
      <div className='timeline__right'>
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline;