export const queryUrl = (action) => {
    let url = "http://localhost:5000/api/books"
    let query = "?"
    for (let key in action) {
        const value = action[key]
        if (value) {
            query += `${key}=${value}&`
        }
    }
    url += query.slice(0, query.length - 1)
    return url
}
