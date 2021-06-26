import React, { Component } from 'react'
import CommentStyles from "./Comment.module.css"


export class Comment extends Component {
    
    render() {
      const { comment } = this.props
        return (
          <div className={CommentStyles.wrapper}>
          <div className={CommentStyles.message}>
            <div className={CommentStyles.name}>
              {comment.name}
               <div>Raiting:{comment.raiting}</div>
            </div>
            <div className={CommentStyles.post}>{comment.post}</div>
          </div>
        </div>
        )
    }
}

export default Comment
