import { useState } from "react"

const SearchSpotify = (props) => {
    const [searchInput, setSearchInput] = useState("")

    const handleChange = (event) => {
        setSearchInput( event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.searchAlbums(searchInput)
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="ablumTitle">Album Title</label>
                    <input type="text" id="albumTitle" name="albumTitle" onChange={handleChange} required />
                    <button type="submit">Search</button>
                </form>
            </div>
        </>
    )
}

export default SearchSpotify