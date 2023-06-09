import { useContext, useState } from "react";
import { AlbumContext } from "@/context/AlbumContext";
import axios from "axios";
import Link from "next/link";
import AlbumView from "./AlbumView";

const ListAlbums = () => {
  const [albums, setAlbums] = useContext(AlbumContext);
  const [showView, setShowView] = useState(false);
  const [album, setAlbum] = useState(null);

  const handleDelete = (id) => {
    axios.delete("https://vinyl-vault.herokuapp.com/api/albums/" + id).then((response) => {
      console.log(response);
      setAlbums(albums.filter((album) => album.id !== id));
    });
    setShowView(false)
  };
  const handleAlbumClick = (album) => {
    setAlbum(album);
    setShowView(true);
  };
  return (
    <>
      {showView ? (
          <AlbumView 
            album={album} 
            handleDelete={handleDelete}
            onClose={() => setShowView(false)} />
      ) : null}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {albums.map((album, index) => {
            return (
              <div
                key={index}
                className="flex justify-center  flex-col bg-cyan-800 hover:bg-primary shadow-md hover:scale-105 hover:shadow-xl hover:cursor-pointer transform transition duration-300 ease-in-out  mb-5 p-5 aspect-square"
                onClick={() => {
                  handleAlbumClick(album);
                }}
              >
                <div className="p-4">
                  <h2 className="text-2xl font-orbitron text-gray-50">
                    {album.title}
                  </h2>
                </div>
                <p className="text-gray-300 font-anton mb-2">{album.artist}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListAlbums;
