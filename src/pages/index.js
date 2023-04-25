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
              <br />
            </div>
            
          )
        })}
      </div>
      <h2 className="text-lg">Add Album</h2>
      <AddAlbum />

    </>
  );
};

export default Home;
