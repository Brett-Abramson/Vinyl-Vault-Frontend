import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AddAlbum from "../../components/add_album";


const Home = ({  }) => {
  let [albumList, setAlbumList] = useState([])

  const getAlbums = () => {
    axios
      .get("http://localhost:8000/api/albums")
      .then(
        (response) => setAlbumList(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }
  const handleCreate = (newAlbum) => {
    axios
      .post("http://localhost:8000/api/albums", newAlbum)
      .then((response) => {
        console.log(response),
        getAlbums()
      })
  }
  const handleDelete = (event) => {
    axios
      .delete("http://localhost:8000/api/albums/" + event.target.value)
      .then((response) => {
        console.log(response),
        getAlbums()
      })
  }

  useEffect(() => {
    getAlbums()
  }, [])

  return (
    <>

      <h1 className="text-2xl">Album Assist</h1>
      <br />
      <div>
        {albumList.map((album, index) => {
          return (
            <div key={index}>
              <h3>{album.artist}</h3>
              <h3>{album.title}</h3>
              <h4>{album.year_released}</h4>
              <button onClick={handleDelete} value={album.id}>Delete Album</button>
              <br />
            </div>
            
          )
        })}
      </div>
      <h2 className="text-lg">Add Album</h2>
      <AddAlbum handleCreate={handleCreate}/>

    </>
  );
};

export default Home;
