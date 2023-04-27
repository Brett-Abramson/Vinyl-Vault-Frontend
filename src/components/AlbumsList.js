import { useState, useContext } from "react";
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
    <div className="max-w-xl mx-auto mt-10">
      {albums.map((album,index) => {
        return (
<div key={album.id} className="bg-white shadow-md rounded-lg mb-5 p-5">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">{album.title}</h2>
            <button className="text-red-500 hover:text-red-700" onClick={(event)=>{handleDelete(event, album.id)}}>Delete Album</button>
          </div>
          <p className="text-gray-600">{album.artist} - {album.year_released}</p>
        </div>
        )
      })}
      <AddAlbum />
    </div>
  );
};


export default ListAlbums;
