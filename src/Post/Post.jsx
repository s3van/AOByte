import PostStyles from "./Post.module.css";
import Comment from "../Comment/Comment"
import IdGenerator from "../Utils/IdGenerator"

import React, { Component } from 'react'

export class Post extends Component {
  state = {
    comments: [
      {
        _id: IdGenerator(),
        name: "A",
        post:
          "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
        raiting: 4,
      },
      {
        _id: IdGenerator(),
        name: "B",
        post:
          "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
        raiting: 5,
      },
      {
        _id: IdGenerator(),
        name: "C",
        post:
          "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
        raiting: 8,
      },
    ],
  };
  render() {

    const {comments} = this.state
    const { post } = this.props;
    
    const commentsJSX = comments.map((comment) => {
      return (
        <Comment
          comment={comment}
          key={comment._id}
        />
      );
    });
  
    return (
      <div className={PostStyles.wrapper}>
        <div className={PostStyles.message}>
          <div className={PostStyles.name}>{post.name}</div>
          <div className={PostStyles.post}>{post.post}</div>
          <div className={PostStyles.comments}>
          Comments
          <div className={PostStyles.commentsInput}>
            {commentsJSX}
          </div>
        </div>
        </div>
        
        <div>
          <div>{/* <button onClick={handleDeletePost}>Delete</button> */}</div>
          <div>{/* <button style={{padding: "1px 15px"}}>+</button> */}</div>
        </div>
      </div>
    );
  }
}

export default Post
