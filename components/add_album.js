import axios from "axios"

const AddAlbum = () => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    let blankAlbum = { artist: event.target.artist.value, title: event.target.title.value, year_released: event.target.year_released.value}
    const endpoint = "http://localhost:8000/api/albums"
    const response = await axios.post(endpoint,blankAlbum, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }



    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="artist">Artist</label>
        <input type="text" id="artist" name="artist" required />
  
        <label htmlFor="title">Album Title</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="year_released">Year of Albums Release</label>
        <input type="number" id="year_released" name="year_released" required />
  
        <button type="submit">Submit</button>
      </form>
    )
}


export default AddAlbum