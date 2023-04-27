import { useState, useContext } from "react"
import { AlbumContext } from "@/context/AlbumContext";
import axios from "axios";

const AddAlbum = () => {
    let newAlbum = {
        artist: "",
        title: "",
        year_released: "",
      };
    const [album, setAlbum] = useState(newAlbum)
    const [albumList, setAlbumList] = useContext(AlbumContext)

    const addAlbum = (event) => {
        event.preventDefault()
        setAlbumList([...albumList, album])
        axios
            .post("http://localhost:8000/api/albums", album)
            .then((response) => {
            console.log(response)
            // maybe create a redirect to a page saying you have made album, or some action that causes RELOAD because delete will not work until reload
            })
    }
    const handleChange = (event) => {
        setAlbum({...album, [event.target.name]: event.target.value})
    }


    return (
        <form onSubmit={addAlbum}>
      <label htmlFor="artist">Artist</label>
      <input
        type="text"
        id="artist"
        name="artist"
        value={album.artist}
        onChange={handleChange}
        required
      />

      <label htmlFor="title">Album Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={album.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="year_released">Year of Albums Release</label>
      <input
        type="number"
        id="year_released"
        name="year_released"
        value={album.year_released}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
    )
}

export default AddAlbum