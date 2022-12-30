import '../search/search.css'

const Search = () => {
  return (
        <form className="d-flex mx-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
        </form>
  )
}

export default Search