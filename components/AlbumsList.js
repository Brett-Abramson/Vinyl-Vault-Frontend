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
    <>
      {albums.map((album,index) => {
        return (
          <div key={index}>
          <h2>{album.artist}</h2>
          <h3>{album.title}</h3>
          <h4>{album.year_released}</h4>
          <button onClick={(event)=>{handleDelete(event, album.id)}}>Delete Album</button>
        </div>
        )
      })}
      <AddAlbum />
    </>
  );
};

export default ListAlbums;
