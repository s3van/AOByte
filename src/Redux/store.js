import { createStore } from "redux";

const initialState = {
    counter: 0,
    poolState: {
        posts: [],
    },
    postState: {
        comments: [],
        addedPosts: new Set()
    },
    loading: false,
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

window.store = store;
export default store;