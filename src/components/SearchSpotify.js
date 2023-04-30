import { useState } from "react";

const SearchSpotify = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchAlbums(searchInput);
  };

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="ablumTitle" className="font-orbitron font-semibold mr-5">What are you looking for?</label>
          <input
            type="text"
            id="albumTitle"
            name="albumTitle"
            placeholder="Album Title"
            onChange={handleChange}
            required
            className="bg-gray-100 p-1 text-center rounded-md"
          />
          <button type="submit" className="bg-analogous_one  text-triadic_two font-bold py-2 px-6 mx-3 my-2 rounded">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchSpotify;
