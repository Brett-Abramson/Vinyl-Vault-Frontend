

const AddAlbum = () => {
    return (
        <form action="/api/form" method="post">
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