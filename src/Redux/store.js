import { createStore } from "redux"
import idGenerator from "../Utils/idGenerator"
import nameGenerator from "../Utils/nameGenerator"

const initialState = {
  test: true,
  posts: [
    {
      _id: idGenerator(),
      name: "John",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          raiting: 4,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          raiting: 5,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          raiting: 8,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
        },
      ],
      averageRaiting: null,
      isAdded: false
    },
    {
      _id: idGenerator(),
      name: "Mike",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          raiting: 4,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          raiting: 122,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          raiting: 8,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
        },
      ],
      averageRaiting: null,
      isAdded: false
    },
    {
      _id: idGenerator(),
      name: "Stella",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          raiting: 55,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          raiting: 5,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          raiting: 8,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
        },
      ],
      averageRaiting: null,
      isAdded: false
    },
    {
      _id: idGenerator(),
      name: "Emma",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          raiting: 10,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          raiting: 2,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          raiting: 17,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
        },
      ],
      averageRaiting: null,
      isAdded: false
    },
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "haidPost": {
      let posts = [...state.posts]
      if (action.data && action.indicator === "+") {
        let { _id } = action.data
        let idx = posts.findIndex(post => post._id === _id);
        posts[idx] = action.data;

      } else if (action.data && action.indicator === "-") {
        let { _id } = action.data
        let idx = posts.findIndex(post => post._id === _id);
        posts[idx] = action.data;
      }
      return {
        ...state,
        posts,
      }
    }

    case "addComment": {
      let posts = [...state.posts]
      let idx = posts.findIndex(post => post._id === action.postId);
      posts[idx].comments.push(action.data)
      return {
        ...state,
        [state.posts]: {
          ...state.posts,
          comments: state.comments
        },
      }
    }

    case "replyComment": {
      const posts = [...state.posts]
      let postIdx = posts.findIndex(post => post._id === action.postId);
      let commIdx = posts[postIdx].comments.findIndex(comm => comm._id === action.commentId);
      posts[postIdx].comments[commIdx].reply = action.data
      return {
        ...state,
        [state.posts]: {
          ...state.posts,
          comments: state.comments
        },
      }
    }

    case "search": {
      let posts = [...state.posts]
      let arr = []
      if (!!action.data) {
        posts.forEach((post) => {
          if (action.data === post.name && post) {
            posts = []
            posts.push(post)
          } 
          return
        })
      }
      return {
        ...state,
        posts,
      }
    }

    default: return state
  }
}

const store = createStore(reducer)

window.store = store

export default store