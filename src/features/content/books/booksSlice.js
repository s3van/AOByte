import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBooks, deleteOneBook, deleteManyBooks, getBatchBooks } from './booksApi';
import { queryUrl } from "../../../utils/queryUrl"

const initialState = {
    books: [],
    editableBook: null,
    isOpenAddBookModal: false,
    isOpenEditBookModal: false,
    oneCheckedBook: null,
    checkedBooks: [],
    currentPage: 1,
    postPerPage: 10,
    totalBooks: 0,
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
            const response = await getBatchBooks(url)
            if (response.data.books.length) {
                dispatch(setBooks(response.data.books))
                dispatch(setTotalBooks(response.data.booksCount))
            }
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
)

export const deleteOneBookAsync = createAsyncThunk(
    'books/deleteOneBook',
    async (action, func) => {
        const { dispatch } = func
        const { page, limit, book } = action
        const url = queryUrl({ page, limit })
        try {
            const response = await deleteOneBook(book._id)
            console.log(response)
            if(response.status === 200 ){ 
            const resAfterDelete = await getBatchBooks(url)
            dispatch(setBooks(resAfterDelete.data.books))
            }
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
);

export const deleteManyBooksAsync = createAsyncThunk(
    'books/deleteManyBooks',
    async (action, func) => {
        const { dispatch } = func
        if (action.length) {
            try {
                const response = await deleteManyBooks(action)
                if (response.status === 200) {
                    const response = await getBooks()
                    dispatch(setBooks(response.data))
                }
            } catch (e) {
                console.log(e.response?.data?.message)
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
            const response = await getBatchBooks(url)
            if (response.data.books.length) {
                dispatch(setBooks(response.data.books))
            }
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
)


export const booksSlice = createSlice({
    name: 'books',
    initialState,

    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        },
        setBooksAfterDelete: (state, action) => {
            state.books.filter((book) => book._id !== action.payload)
        },
        toggleCheckOneBook: (state, action) => {
            if (!state.checkedBooks.includes(action.payload)) {
                state.checkedBooks.push(action.payload);
            }
            else {
                const index = state.checkedBooks.indexOf(action.payload);
                state.checkedBooks.splice(index, 1);
            }
        },
        toggleCheckAllBooks: (state, action) => {
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
        toggleActivePage: (state, action) => {
            state.currentPage = action.payload
        },
        setTotalBooks: (state, action) => {
            state.totalBooks = action.payload
        }
    },
});

export const {
    setBooks,
    toggleCheckOneBook,
    toggleCheckAllBooks,
    toggleActivePage,
    setTotalBooks,
    setBooksAfterDelete
} = booksSlice.actions;

export const selectBooks = (state) => state.books.books;
export const selectCheckedBooks = (state) => state.books.checkedBooks
export const selectCurrentPage = (state) => state.books.currentPage
export const selectPerPage = (state) => state.books.postPerPage
export const selectTotalBooks = (state) => state.books.totalBooks

export default booksSlice.reducer;