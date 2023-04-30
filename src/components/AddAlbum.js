import { useState, useContext } from "react";
import { AlbumContext } from "@/context/AlbumContext";
import axios from "axios";

const AddAlbum = () => {
  let newAlbum = {
    artist: "",
    title: "",
    tracks: 0,
    release_date: "",
    artwork: "",
    spotify_id: "",
  };
  const [album, setAlbum] = useState(newAlbum);
  const [albumList, setAlbumList] = useContext(AlbumContext);
  const [showModal, setShowModal] = useState(false);

  const addAlbum = (event) => {
    event.preventDefault();
    setAlbumList([...albumList, album]);
    axios
      .post("https://vinyl-vault.herokuapp.com/api/albums", album)
      .then((response) => {
        console.log(response), (err) => console.error(err);
        // maybe create a redirect to a page saying you have made album, or some action that causes RELOAD because delete will not work until reload
      })
      .catch((error) => {
        console.error("Error adding album:", error);
      });
    setShowModal(false);
  };
  const handleChange = (event) => {
    setAlbum({ ...album, [event.target.name]: event.target.value });
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="flex flex-col justify-around">
        <button
          className="bg-amber-500 hover:bg-primary text-triadic_two font-bold py-2 px-4 rounded"
          onClick={() => toggleModal()}
        >
          {showModal ? "Cancel" : "Add Album"}
        </button>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="rounded-lg shadow-xl p-4">
            <button className="bg-analogous_one hover:bg-blue-700 text-triadic_one font-bold py-2 px-4 rounded" onClick={toggleModal}>Cancel</button>
              {/* <h2 className="bg-gray-900 text-white text-2xl font-bold mb-4 rounded-full">Add Album</h2> */}
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
                  htmlFor="tracks"
                  className="block font-medium mb-2 text-gray-700"
                >
                  Number of Tracks
                </label>
                <input
                  type="number"
                  id="tracks"
                  name="tracks"
                  placeholder="not required"
                  value={album.tracks}
                  onChange={handleChange}
                  className="border-2 border-gray-300 mb-4 p-2 rounded-lg w-full"
                />

                <label
                  htmlFor="release_date"
                  className="block font-medium mb-2 text-gray-700"
                >
                  Release Date
                </label>
                <input
                  type="text"
                  id="release_date"
                  name="release_date"
                  placeholder="not required"
                  value={album.release_date}
                  onChange={handleChange}
                  className="border-2 border-gray-300 mb-4 p-2 rounded-lg w-full"
                />

                <label
                  htmlFor="artwork"
                  className="block font-medium mb-2 text-gray-700"
                >
                  Album Image
                </label>
                <input
                  type="text"
                  id="artwork"
                  name="artwork"
                  placeholder="not required"
                  value={album.artwork}
                  onChange={handleChange}
                  className="border-2 border-gray-300 mb-4 p-2 rounded-lg w-full"
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
