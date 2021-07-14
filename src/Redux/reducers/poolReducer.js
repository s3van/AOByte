//IMPORT UTILS
import idGenerator from "../../Utils/idGenerator"
import nameGenerator from "../../Utils/nameGenerator"

const initialState = {
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

  ],
}

const poolReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SEARCH": {
      let posts = [...state.posts]

      if (action.searchInputValue) {
        posts.forEach((post) => {
          if (action.searchInputValue !== post.name) {
            post.isAdded = true
          }
          else {
            post.isAdded = false
          }
        })
      }

      return {
        ...state,
        posts,
      }
    }

    case "RESET": {
      let posts = [...state.posts]

      posts.forEach((post) => {
        post.isAdded = false
      })

      return {
        ...state,
        posts,
      }
    }

    case "HIDE-POST": {
      let posts = [...state.posts]

      if (action.payload && action.indicator === "+") {
        const { _id } = action.payload
        const idx = posts.findIndex(post => post._id === _id);
        posts[idx] = action.payload;

      } else if (action.payload && action.indicator === "-") {
        const { _id } = action.payload
        const idx = posts.findIndex(post => post._id === _id);
        posts[idx] = action.payload;
      }

      return {
        ...state,
        posts
      }
    }

    case "CHANGE-COMMENT": {
      let posts = [...state.posts]

      const { text, postId } = action
      const idx = posts.findIndex(post => post._id === postId);

      posts[idx].commentInputValue = text

      return {
        ...state,
        posts,
      }
    }

    case "ADD-COMMENT": {
      let posts = [...state.posts]

      const idx = posts.findIndex(post => post._id === action.postId);

      posts[idx].comments.push(action.payload)
      posts[idx].commentInputValue = ""

      return {
        ...state,
        posts,
      }
    }

    case "CHANGE-REPLY": {
      let posts = [...state.posts]

      const { value, commentId, postId } = action

      const postIdx = posts.findIndex(post => post._id === postId);
      const commIdx = posts[postIdx].comments.findIndex(comment => comment._id === commentId)

      posts[postIdx].comments[commIdx].replyInputValue = value

      return {
        ...state,
        posts,
      }
    }

    case "ADD-REPLY": {
      let posts = [...state.posts]

      const postIdx = posts.findIndex(post => post._id === action.postId);
      const commIdx = posts[postIdx].comments.findIndex(comm => comm._id === action.commentId);

      posts[postIdx].comments[commIdx].reply = action.payload

      posts[postIdx].comments[commIdx].replyInputValue = ""

      return {
        ...state,
        posts,
      }
    }

    case "CHANGE-PAGE": {

      return {
        ...state,
        currentPage: action.activePage
      }

    }

    default: return state
  }
}

export const calcAverageRating = (arr) => {
  let averageRatingsArr = [];

  if (arr.length) {
    arr.forEach((post) => {
      post.comments.forEach((comm) => {
        averageRatingsArr.push(comm.rating);
      });
      let sum = averageRatingsArr.reduce((a, b) => a + b, 0);
      let rating = sum / averageRatingsArr.length;
      post.averageRating = rating;
      averageRatingsArr = [];
    })
  }

  return arr

}

export default poolReducer