const axios = require("axios");
import { useState, useContext } from "react";
import SearchSpotify from "@/components/SearchSpotify";
import Link from "next/link";
import { AlbumContext } from "@/context/AlbumContext";

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

const Spotify = () => {
  const [albums, setAlbums] = useState([]);
  const [albumList, setAlbumList] = useContext(AlbumContext);
  const [album, setAlbum] = useState({});

  const getToken = () => {
    let authOptions = {
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          new Buffer.from(client_id + ":" + client_secret).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: "grant_type=client_credentials",
    };
    return axios(authOptions)
      .then((response) => {
        console.log(response.data);
        return response.data.access_token;
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      artwork: album.images[1].url,
      spotify_id: album.id,
    };
    console.log(newAlbum);
    setAlbum(newAlbum);
    addAlbum(newAlbum);
  };

  const addAlbum = (newAlbum) => {
    // event.preventDefault();
    // setAlbumList([...albumList, album]);
    axios
      .post("http://localhost:8000/api/albums", newAlbum)
      .then((response) => {
        console.log(response), (err) => console.error(err);
        // maybe create a redirect to a page saying you have made album, or some action that causes RELOAD because delete will not work until reload
      })
      .catch((error) => {
        console.error("Error adding album: ", error);
      });
  };

  return (
    <div className="mx-auto w-fit bg-gray-800 text-center rounded-lg">
      <Link href="/">Home</Link>
      <SearchSpotify searchAlbums={searchAlbums} />
      <div className="">
        {albums.map((album) => {
          return (
            <div key={album.id}>
              <br />
              <h2>{album.name}</h2>
              <p>Artists</p>
              {album.artists.map((artist) => {
                return (
                  <div key={artist.id}>
                    <h3>{artist.name}</h3>
                  </div>
                );
              })}
              <button
                onClick={() => {
                  handleSubmit(album);
                }}
              >
                Add to Owned Albums
              </button>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Spotify;
