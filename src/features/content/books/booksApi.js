import api from "../../../http/index"

export function deleteOneBook(bookId) {
    return api.delete(`/books/${bookId}`)
}

export function deleteManyBooks(ids) {
    return api.post(`/books/batchDelete`, {ids})
}

export function getBatchBooks(url) {
    return api.get(url)
}

export function getSingleBook(bookId){
    return api.get(`/books/${bookId}`)
}

export function addBook(action) {
    return api.post("/books", action)
}

export function editBook(action) {
    return api.patch(`/books/${action._id}`, action)
}