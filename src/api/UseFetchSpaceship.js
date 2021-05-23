
const UseFetchSpaceship = (url) => {
    return fetch(url)
    .then((res) => res.json())
    .then((jsonResponse) => {
        return jsonResponse.name
    })
    .catch((err) => console.log(err))
}

export default UseFetchSpaceship;