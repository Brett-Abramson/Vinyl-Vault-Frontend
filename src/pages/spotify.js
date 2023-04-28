const axios = require("axios");
import { useState } from "react";
import SearchSpotify from "@/components/SearchSpotify";

const Spotify = () => {
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  let token = "";

  const [albums, setAlbums] = useState([]);

  // requesting authorization
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

  const getToken = () => {
    axios(authOptions)
      .then((response) => {
        console.log(response.data);
        token = response.data.access_token;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchAlbums = async (query) => {
    // const token = await getToken();
    console.log(token);
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

  

  return (
    <>
      <button onClick={getToken}>Token</button>
      <br />
      <button onClick={searchAlbums}>Search albums</button>
      <br />
      <button onClick={()=>{console.log(albums)}}>whats in albums</button>
      <SearchSpotify searchAlbums={searchAlbums}/>
      <div>
        {albums.map((album) => {
            return (
                <div key={album.id}>
                    <h2>{album.name}</h2>
                    <p>Artists</p>
                    {album.artists.map((artist) => {
                        return(
                            <div key={artist.id}>
                                <h3>{artist.name}</h3>
                            </div>
                        )
                    })}
                    <br />
                </div>
            )
        })}
      </div>
    </>
  );
};

export default Spotify;
