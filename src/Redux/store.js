import { createStore } from "redux"
import IdGenerator from "../Utils/IdGenerator"

const initialState = {
  posts: [
    {
      _id: IdGenerator(),
      name: "John",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: IdGenerator(),
          name: "A",
          post:
            " fugit tempora doloribus natus.",
          raiting: 4,
        },
        {
          _id: IdGenerator(),
          name: "B",
          post:
            " fugit tempora doloribus natus.",
          raiting: 5,
        },
        {
          _id: IdGenerator(),
          name: "C",
          post:
            " fugit tempora doloribus natus.",
          raiting: 8,
        },
      ],
      readRait: null,
    },
    {
      _id: IdGenerator(),
      name: "Mike",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: IdGenerator(),
          name: "D",
          post:
            " fugit tempora doloribus natus.",
          raiting: 4,
        },
        {
          _id: IdGenerator(),
          name: "E",
          post:
            " fugit tempora doloribus natus.",
          raiting: 122,
        },
        {
          _id: IdGenerator(),
          name: "F",
          post:
            " fugit tempora doloribus natus.",
          raiting: 8,
        },
      ],
      readRait: null,
    },
    {
      _id: IdGenerator(),
      name: "Stella",
      post:
        "Ex alias dolores nostrum at modi corporis recusandae fugit tempora doloribus natus.",
      comments: [
        {
          _id: IdGenerator(),
          name: "G",
          post:
            " fugit tempora doloribus natus.",
          raiting: 55,
        },
        {
          _id: IdGenerator(),
          name: "H",
          post:
            " fugit tempora doloribus natus.",
          raiting: 5,
        },
        {
          _id: IdGenerator(),
          name: "I",
          post:
            " fugit tempora doloribus natus.",
          raiting: 8,
        },
      ],
      readRait: null,
    },
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "plus": {
      return {
        ...state,
        counter: state.counter + 1
      }
    }

    case "minus": {
      return {
        ...state,
        counter: state.counter - 1
      }
    }


    default: return state
  }
}

const store = createStore(reducer)

window.store = store

export default store