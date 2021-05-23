
const useFetchPeople = (
    setPeople, 
    setNextUrl, 
    currentUrl="https://swapi.dev/api/people/"
) => {
    fetch(currentUrl)
    .then((res) => res.json())
    .then((jsonResponse) => {
        setPeople((people) => {
            return [...people, ...jsonResponse.results]
        })
        setNextUrl(jsonResponse.next)
    })
    .catch((err) => console.log(err))
}

export default useFetchPeople;