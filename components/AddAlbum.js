import axios from "axios";
import { useState } from "react";


const AddAlbum = (props) => {
  let formData = {
    artist: "",
    title: "",
    year_released: "",
  };
  const [album, setAlbum] = useState((props.album ? {...props.album} : formData)) 

  const handleChange = (event) => {
    setAlbum({
      ...album,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(album)
  }

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default AddAlbum;
