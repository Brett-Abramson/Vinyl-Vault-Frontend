import { useState, useContext } from "react";
import { AlbumContext } from "@/context/AlbumContext";
import AddAlbum from "./AddAlbum";

const ListAlbums = () => {
  const [albums, setAlbums] = useContext(AlbumContext);

  return (
    <>
      {albums.map((album,index) => {
        return (
          <div key={index}>
          <h2>{album.artist}</h2>
          <h3>{album.title}</h3>
          <h4>{album.year_released}</h4>
        </div>
        )
      })}
      <AddAlbum />
    </>
  );
};

export default ListAlbums;
