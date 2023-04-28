import { useContext } from "react";
import { AlbumContext } from "@/context/AlbumContext";
import AddAlbum from "./AddAlbum";
import axios from "axios";

const ListAlbums = () => {
  const [albums, setAlbums] = useContext(AlbumContext);

  const handleDelete = (event, id) => {
    axios
    .delete("http://localhost:8000/api/albums/" + id)
    .then((response) => {
      console.log(response)
      setAlbums(albums.filter(album => album.id !== id))
    })
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {albums.map((album,index) => {
          return (
            <div key={index} className="bg-analogous_one shadow-md rounded-lg mb-5 p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-analogous_two">{album.title}</h2>
                <button className="text-triadic_one hover:text-triadic_one" onClick={(event)=>{handleDelete(event, album.id)}}>Delete Album</button>
              </div>
              <p className="text-complementary mb-2">{album.artist} - {album.year_released}</p>
            </div>
          )
        })}
      </div>
      <AddAlbum />
    </div>
  );
};


export default ListAlbums;
