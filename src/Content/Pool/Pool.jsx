import React, { Component } from "react";
import Post from "../../Post/Post";
import Contain from "../Contain/Contain";
import Poolstyles from "./Pool.module.css";
import IdGenerator from "../../Utils/IdGenerator";

export class Pool extends Component {
  state = {
    posts: [
      {
        _id: IdGenerator(),
        name: "John",
        post:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      },
      {
        _id: IdGenerator(),
        name: "Mike",
        post:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      },
      {
        _id: IdGenerator(),
        name: "Stella",
        post:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      },
    ],
  };
  render() {
    const { posts } = this.state;
    // const handleDelete = this.handleDelete;

    const postsJSX = posts.map((post) => {
      return (
        <Post
          post={post}
          key={post._id}
          // handleDelete={handleDelete}
          // handleChange={this.handleChange}
        />
      );
    });
    return (
     <>
      <div className={Poolstyles.wrapper}>{postsJSX}</div>
      <Contain posts={posts} />
     </>
    );
  }
}

export default Pool;
