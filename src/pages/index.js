import { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
  let [albums, setAlbums] = useState([])

  const getAlbum = () => {
    axios
      .get("http://localhost:8000/api/albums")
      .then(
        (response) => setAlbums(response.data),
        (err) => console.log(err)
      )
      .catch((error) => console.error(error))
  }


  useEffect(() => {
    getAlbum()
  }, [])

  return (
    <>
      <h1>Album Assist</h1>
      <div>
        {albums.map((album, index) => {
          return (
            <div key={index}>
              <h2>{album.artist}</h2>
              <h3>{album.title}</h3>
              <h5>{album.year_released}</h5>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home