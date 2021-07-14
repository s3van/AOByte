const initialState = {
  searchInputValue: "",
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {

    case "CHANGE-SEARCH": {

      const { value } = action
      state.searchInputValue = value

      return {
        ...state,
        searchInputValue: state.searchInputValue,
      }

    }

    case "RESET": {
      state.searchInputValue = ""
      return {
        ...state,
        searchInputValue: state.searchInputValue,
      }
    }

    default: return state

  }
}

export default searchReducer