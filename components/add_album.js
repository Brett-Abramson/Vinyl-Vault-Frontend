import axios from "axios";
import { useState } from "react"
import useSWR, { mutate } from "swr"

const AddAlbum = ( {album} ) => {
  const endpoint = "http://localhost:8000/api/albums"
  const { data, error } = useSWR(endpoint)
  const [formData, setFormData] = useState({
    artist: album ? album.artist : "",
    title: album ? album.title : "",
    year_released: album ? album.year_released : "",
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newAlbum = {
      artist: formData.artist,
      title: formData.title,
      year_released: formData.year_released
    };
    try {
      const response = album
      ? await axios.put(`${endpoint}/${album.id}`, newAlbum, {
        headers: {
          "Content-Type" : "application/json"
        },
      })
      : 
      await axios.post(endpoint, newAlbum, {
        headers: {
          "Content-Type" : "application/json",
        },
      })
    .then(() => {
      mutate(endpoint),
      alert(`Error ${album ? "updating" : "adding"} album`)

    })
      


      setFormData({
        artist:"",
        title:"",
        year_released:"",
      })
    }
    catch (error) {
      console.error(error)
      alert(`Error ${album ? "updating" : "adding" } album`)
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <label htmlFor="artist">Artist</label>
      <input type="text" id="artist" name="artist" value={formData.artist} onChange={handleChange} required />

      <label htmlFor="title">Album Title</label>
      <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />

      <label htmlFor="year_released">Year of Albums Release</label>
      <input type="number" id="year_released" name="year_released" value={formData.year_released} onChange={handleChange} required />

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {album ? "Update" : "Submit"}
      </button>

    </form>

  );
};

// export default AddAlbum;
