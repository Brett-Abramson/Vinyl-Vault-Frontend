const axios = require("axios");
import { useState, useContext } from "react";
import SearchSpotifyAPI from "@/components/SearchSpotifyAPI";
import { AlbumContext } from "@/context/AlbumContext";
import getToken from "@/components/SpotifyConfig";
import AlbumItem from "@/components/AlbumItem";

// import AlbumView from "@/components/AlbumView";

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

const Spotify = () => {
  const [albums, setAlbums] = useState([]);
  const [albumList, setAlbumList] = useContext(AlbumContext);
  const [album, setAlbum] = useState({});
  // const [showView, setShowView] = useState(false);
  // const [viewAlbum, setViewAlbum] = useState(null)

 
  const searchAlbums = async (query) => {
    const token = await getToken();

    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: query,
        type: "album",
        market: "US",
        limit: "10",
      },
    });
    // console.log(response.data);
    setAlbums(response.data.albums.items);
    return response.data;
  };
  const handleSubmit = (album) => {
    let artistName = album.artists
      .map((album) => {
        return album.name.toString();
      })
      .join(" & ");
    const newAlbum = {
      artist: artistName,
      title: album.name,
      tracks: album.total_tracks,
      release_date: album.release_date,
      artwork: album.images[0].url,
      spotify_id: album.id,
    };
    // console.log(newAlbum);
    setAlbum(newAlbum);
    addAlbum(newAlbum);
  };

  const addAlbum = (newAlbum) => {
    axios
      .post("https://vinyl-vault.herokuapp.com/api/albums", newAlbum)
      .then((response) => {
        // console.log(response), 
        (err) => console.error(err);
      })
      .catch((error) => {
        console.error("Error adding album: ", error);
      });
  };
  // const handleAlbumClick = (album) => {
  //   setViewAlbum(album);
  //   setShowView(true);
  // };

  return (
    <>
          {/* {showView ? (
          <AlbumView 
            album={viewAlbum} 
            onClose={() => setShowView(false)} />
      ) : null} */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <SearchSpotifyAPI searchAlbums={searchAlbums} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {albums.map((album) => (
            <AlbumItem
              key={album.id}
              album={album}
              handleAddAlbum={handleSubmit}
              />
          ))}
        </div>
      </div>
    </>
  );
};

export default Spotify;
