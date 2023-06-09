import { useState, useEffect } from "react"
import { AlbumContext } from "./AlbumContext"
import axios from "axios"

const Store = ( {children} ) => {
    const [albumList, setAlbumList] = useState([])
      const getAlbums = () => {
    axios
      .get("https://vinyl-vault.herokuapp.com/api/albums")
      .then(
        (response) => setAlbumList(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  const handleAlbumChange = (addAlbum) => {
    
  }
  useEffect(() => {
    getAlbums()
  }, [])
  
  return <AlbumContext.Provider value={[albumList, setAlbumList]}>{children}</AlbumContext.Provider>
}
export default Store