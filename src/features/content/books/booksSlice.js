import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteOneBook, deleteManyBooks, getBatchBooks, addBook, editBook, getSingleBook } from './booksApi';

const initialState = {
    books: [],
    editableBook: null,
    isOpenAddBookModal: false,
    isOpenErrorModal: false,
    isLoading: false,
    checkedBooks: [],
    totalBooks: 0,
    singleBook: null,
};

export const getBooksAsync = createAsyncThunk(
    'books/getBatchBooks',
    async (action, func) => {
        const { dispatch } = func
        let url = "http://localhost:5000/api/books"
        let query = "?"
        for (let key in action) {
            const value = action[key]
            if (value) {
                query += `${key}=${value}&`
            }
        }
        url += query.slice(0, query.length - 1)
        try {
            dispatch(toggleLoading(true))
            let response = await getBatchBooks(url)
            if (response.data.books.length) {
                dispatch(setBooks(response.data.books))
                dispatch(setTotalBooks(response.data.booksCount))
            } else {
                dispatch(setBooks([]))
            }
        } catch (e) {
            dispatch(toggleErrorModal(e.response.data))
        } finally {
            dispatch(toggleLoading(false))
        }
    }
)

export const getSingleAsync = createAsyncThunk(
    'books/getSingleBook',
    async (action, func) => {
        const { dispatch } = func
        try {
            dispatch(toggleLoading(true))
            const response = await getSingleBook(action.id)
            if (response.data) {
                dispatch(setSingleBook(response.data))
            }
        } catch (e) {
            dispatch(toggleErrorModal(e.response.data))
        } finally {
            dispatch(toggleLoading(false))
        }
    }
)

export const deleteOneBookAsync = createAsyncThunk(
    'books/deleteOneBook',
    async (action, func) => {
        const { dispatch } = func
        try {
            dispatch(toggleLoading(true))
            await deleteOneBook(action)
        } catch (e) {
            dispatch(toggleErrorModal(e.response.data))
        } finally {
            dispatch(toggleLoading(false))
        }
    }
);

export const deleteManyBooksAsync = createAsyncThunk(
    'books/deleteManyBooks',
    async (action, func) => {
        const { dispatch } = func
        if (action.length) {
            try {
                dispatch(toggleLoading(true))
                await deleteManyBooks(action)
            } catch (e) {
                dispatch(toggleErrorModal(e.response.data))
            } finally {
                dispatch(toggleLoading(false))
            }
        }
    }
);

export const searchBooksAsync = createAsyncThunk(
    'books/searchBooks',
    async (action, func) => {
        const { dispatch } = func
        let url = "http://localhost:5000/api/books"
        let query = "?"
        for (let key in action) {
            const value = action[key]
            if (value) {
                query += `${key}=${value}&`
            }
        }
        url += query.slice(0, query.length - 1)
        try {
            dispatch(toggleLoading(true))
            const response = await getBatchBooks(url)
            dispatch(setBooks(response.data.books))
        } catch (e) {
            dispatch(toggleErrorModal(e.response.data))
        } finally {
            dispatch(toggleLoading(false))
        }
    }
)

export const addBookAsync = createAsyncThunk(
    'books/addBook',
    async (action, func) => {
        const { dispatch } = func
        if (action.title
            && action.author
            && action.description
            && action.genre
            && action.year) {
            try {
                const response = await addBook(action)
                if (response.status === 200) {
                    // dispatch(toggleAddModal(false))
                }
            } catch (e) {
                dispatch(toggleErrorModal(e.response.data))
            } finally {
                dispatch(toggleLoading(false))
            }
        }
    }
);

export const editBookAsync = createAsyncThunk(
    'books/addBook',
    async (action, func) => {
        const { dispatch } = func
        if (action) {
            try {
                dispatch(toggleLoading(true))
                await editBook(action)
            } catch (e) {
                dispatch(toggleErrorModal(e.response.data))
                console.log(e.response.data.message)
            } finally {
                dispatch(toggleLoading(false))
            }
        }
    }
);


export const booksSlice = createSlice({
    name: 'books',
    initialState,

    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        },
        setSingleBook: (state, action) => {
            state.singleBook = action.payload
        },
        setBooksAfterDelete: (state, action) => {
            state.books.filter((book) => book._id !== action.payload)
        },
        setCheckedBook: (state, action) => {
            if (!state.checkedBooks.includes(action.payload)) {
                state.checkedBooks.push(action.payload);
            }
            else {
                const index = state.checkedBooks.indexOf(action.payload);
                state.checkedBooks.splice(index, 1);
            }
        },
        setAllCheckedBooks: (state, action) => {
            if (state.checkedBooks.length === state.books.length) {
                state.checkedBooks.length = 0
            }
            else {
                state.books.forEach((book) => {

                    if (!state.checkedBooks.includes(book._id)) {
                        state.checkedBooks.push(book._id)
                    }
                    if (state.checkedBooks.includes(book._id)) {
                        return
                    }
                })
            }
        },
        setTotalBooks: (state, action) => {
            state.totalBooks = action.payload
        },
        setEditableBook: (state, action) => {
            state.editableBook = action.payload
        },

        toggleLoading: (state, action) => {
            state.isLoading = action.payload
        },
        toggleErrorModal: (state, action) => {
            state.isOpenErrorModal = action.payload
        },
        toggleAddModal: (state) => {
            state.isOpenAddBookModal = !state.isOpenAddBookModal
        },
        resetCheckedBooks: (state) => {
            state.checkedBooks = []
        },
        resetEditableBook: (state) => {
            state.editableBook = null
        },
        resetSingleBook: (state) => {
            state.singleBook = null
        }

    },
});

export const {
    setBooks,
    setCheckedBook,
    setAllCheckedBooks,
    setTotalBooks,
    setBooksAfterDelete,
    setSingleBook,
    setEditableBook,
    toggleAddModal,
    toggleLoading,
    toggleErrorModal,
    resetCheckedBooks,
    resetEditableBook,
    resetSingleBook
} = booksSlice.actions;

export const selectBooks = (state) => state.books.books;
export const selectCheckedBooks = (state) => state.books.checkedBooks
export const selectTotalBooks = (state) => state.books.totalBooks
export const selectAddBookModal = (state) => state.books.isOpenAddBookModal
export const selectErrorModal = (state) => state.books.isOpenErrorModal
export const selectEditableBook = (state) => state.books.editableBook
export const selectLoading = (state) => state.books.isLoading
export const selectSingleBook = (state) => state.books.singleBook

export default booksSlice.reducer;