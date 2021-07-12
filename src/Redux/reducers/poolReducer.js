import idGenerator from "../../Utils/idGenerator"
import nameGenerator from "../../Utils/nameGenerator"

const initialState = {
  searchInputValue: "",
  currentPage: 1,
  postPerPage: 3,
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
          rating: 4,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 5,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 8,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
      ],
      averageRating: null,
      isAdded: false,
      commentInputValue: ""
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
          rating: 4,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 122,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 8,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
      ],
      averageRating: null,
      isAdded: false,
      commentInputValue: ""
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
          rating: 55,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 5,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 8,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
      ],
      averageRating: null,
      isAdded: false,
      commentInputValue: ""
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
          rating: 10,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 2,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 17,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
      ],
      averageRating: null,
      isAdded: false,
      commentInputValue: ""
    },
    {
      _id: idGenerator(),
      name: "Jefri",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 0,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 1,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 2,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
      ],
      averageRating: null,
      isAdded: false,
      commentInputValue: ""
    },
    {
      _id: idGenerator(),
      name: "Clara",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 2,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 1,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 4,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
      ],
      averageRating: null,
      isAdded: false,
      commentInputValue: ""
    },
    {
      _id: idGenerator(),
      name: "Casseti",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 5,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 5,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 8,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
      ],
      averageRating: null,
      isAdded: false,
      commentInputValue: ""
    },
    {
      _id: idGenerator(),
      name: "Tex",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 10,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 2,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 17,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
      ],
      averageRating: null,
      isAdded: false,
      commentInputValue: ""
    },
    {
      _id: idGenerator(),
      name: "Ciara",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 4,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 5,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 1,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
      ],
      averageRating: null,
      isAdded: false,
      commentInputValue: ""
    },
    {
      _id: idGenerator(),
      name: "Cruz",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 4,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 1,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 8,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
      ],
      averageRating: null,
      isAdded: false,
      commentInputValue: ""
    },
    {
      _id: idGenerator(),
      name: "Reachel",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 5,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 5,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 2,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
      ],
      averageRating: null,
      isAdded: false,
      commentInputValue: ""
    },
    {
      _id: idGenerator(),
      name: "Luna",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 10,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 2,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
        {
          _id: idGenerator(),
          name: nameGenerator(),
          text: " fugit tempora doloribus natus.",
          rating: 17,
          reply: {
            name: "",
            text: "",
            test: true,
            _id: idGenerator()
          },
          replyInputValue: "",
        },
      ],
      averageRating: null,
      isAdded: false,
      commentInputValue: ""
    },
  ],
}

const poolReducer = (state = initialState, action) => {
  switch (action.type) {

    case "CHANGE-SEARCH": {
      const { value } = action
      let posts = [...state.posts]
      if (action.value !== "") {
        state.searchInputValue = value
      }
      else {
        posts.forEach((post) => {
          post.isAdded = false
        })
      }
      return {
        ...state,
        posts,
        searchInputValue: value
      }

    }

    case "SEARCH": {
      let posts = [...state.posts]
      if (action.data) {
        posts.forEach((post) => {
          if (action.data !== post.name) {
            post.isAdded = true
          } else {
            post.isAdded = false
          }
        })
      }
      return {
        ...state,
        posts,
      }
    }

    case "HAID-POST": {
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
        posts
      }
    }

    case "CHANGE-COMMENT": {
      const { text, postId } = action
      let posts = [...state.posts]
      let idx = posts.findIndex(post => post._id === postId);
      posts[idx].commentInputValue = text
      return {
        ...state,
        posts,
      }
    }

    case "ADD-COMMENT": {
      let posts = [...state.posts]
      let idx = posts.findIndex(post => post._id === action.postId);
      posts[idx].comments.push(action.data)
      posts[idx].commentInputValue = ""
      return {
        ...state,
        posts,
      }
    }

    case "CHANGE-REPLY": {
      const { value, commentId, postId } = action
      let posts = [...state.posts]
      let postIdx = posts.findIndex(post => post._id === postId);
      let commIdx = posts[postIdx].comments.findIndex(comment => comment._id === commentId)
      posts[postIdx].comments[commIdx].replyInputValue = value
      return {
        ...state,
        posts,
      }
    }

    case "ADD-REPLY": {
      const posts = [...state.posts]
      let postIdx = posts.findIndex(post => post._id === action.postId);
      let commIdx = posts[postIdx].comments.findIndex(comm => comm._id === action.commentId);
      posts[postIdx].comments[commIdx].reply = action.data
      posts[postIdx].comments[commIdx].replyInputValue = ""
      return {
        ...state,
        posts,
      }
    }

    case "CHANGE-PAGE": {
      return{
        ...state,
        currentPage: action.activePage
      }
      
    }

    default: return state
  }
}

export default poolReducer