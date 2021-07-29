import api from "../../../http/index"

export function getBooks() {
    return api.get("/books")
}

export function deleteOneBook(bookId) {
    return api.delete(`/books/${bookId}`)
}

export function deleteManyBooks(ids) {
    return api.post(`/books/batchDelete`, {ids})
}

export function getBatchBooks(url) {
    return api.get(url)
}