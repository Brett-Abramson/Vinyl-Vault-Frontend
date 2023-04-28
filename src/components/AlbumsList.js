import { useContext } from "react";
import { AlbumContext } from "@/context/AlbumContext";
import AddAlbum from "./AddAlbum";
import axios from "axios";

const ListAlbums = () => {
  const [albums, setAlbums] = useContext(AlbumContext);

  const handleDelete = (event, id) => {
    axios.delete("http://localhost:8000/api/albums/" + id).then((response) => {
      console.log(response);
      setAlbums(albums.filter((album) => album.id !== id));
    });
  };
  return (
    <>
      <AddAlbum />
      {/* move this to a navbar or menu component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {albums.map((album, index) => {
            return (
              <div
                key={index}
                className="flex justify-center  flex-col bg-cyan-900 hover:bg-primary shadow-md hover:scale-105 hover:shadow-xl hover:cursor-pointer transform transition duration-300 ease-in-out  mb-5 p-5 aspect-square"
              >
                <div className="p-4">
                  <h2 className="text-xl font-bold  text-gray-50">
                    {album.title}
                  </h2>
                  {/* <button
                    className="text-complementary hover:text-triadic_one hover:font-extrabold"
                    onClick={(event) => {
                      handleDelete(event, album.id);
                    }}
                  >
                    Delete Album
                  </button> */}
                </div>
                <p className="text-triadic_two_two font-semibold mb-2">
                  {album.artist} - {album.year_released}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListAlbums;
