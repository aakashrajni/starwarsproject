
const UseFetchMovie = (url) => {
    return fetch(url)
    .then((res) => res.json())
    .then((jsonResponse) => {
        return jsonResponse.title
    })
    .catch((err) => console.log(err))
}

export default UseFetchMovie;