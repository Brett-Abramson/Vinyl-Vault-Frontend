import { useState, useContext } from "react";
import { AlbumContext } from "@/context/AlbumContext";
import axios from "axios";

const AddAlbum = () => {
  let newAlbum = {
    artist: "",
    title: "",
    year_released: "",
  };
  const [album, setAlbum] = useState(newAlbum);
  const [albumList, setAlbumList] = useContext(AlbumContext);
  const [showModal, setShowModal] = useState(false);

  const addAlbum = (event) => {
    event.preventDefault();
    setAlbumList([...albumList, album]);
    axios.post("http://localhost:8000/api/albums", album).then((response) => {
      console.log(response);
      // maybe create a redirect to a page saying you have made album, or some action that causes RELOAD because delete will not work until reload
    });
    setShowModal(false);
  };
  const handleChange = (event) => {
    setAlbum({ ...album, [event.target.name]: event.target.value });
  };
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div>
      <button
        className="bg-analogous_one hover:bg-primary text-triadic_two font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Add Album
      </button>
      {showModal && (
        <div className="fixed z-1 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-xl p-4">
              <h2 className="text-2xl font-bold mb-4">Add Album</h2>
              <form
                onSubmit={addAlbum}
                className="bg-gradient-to-br from-analogous_two to-triadic_two p-4 rounded-lg"
              >
                <label
                  htmlFor="artist"
                  className="block font-medium mb-2  text-gray-700"
                >
                  Artist
                </label>
                <input
                  type="text"
                  id="artist"
                  name="artist"
                  value={album.artist}
                  onChange={handleChange}
                  className="border-2 border-gray-300 mb-4 p-2 rounded-lg w-full"
                  required
                />

                <label
                  className="block font-medium mb-2 text-gray-700"
                  htmlFor="title"
                >
                  Album Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={album.title}
                  onChange={handleChange}
                  className="border-2 border-gray-300 mb-4 p-2 rounded-lg w-full"
                  required
                />

                <label
                  htmlFor="year_released"
                  className="block font-medium mb-2 text-gray-700"
                >
                  Year of Albums Release
                </label>
                <input
                  type="number"
                  id="year_released"
                  name="year_released"
                  value={album.year_released}
                  onChange={handleChange}
                  className="border-2 border-gray-300 mb-4 p-2 rounded-lg w-full"
                  required
                />

                <button
                  type="submit"
                  className="bg-analogous_one hover:bg-blue-700 text-triadic_one font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAlbum;
