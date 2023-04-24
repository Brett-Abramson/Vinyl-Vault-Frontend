import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AddAlbum from "../../components/add_album";
import useSWR from "swr";

const Home = ({ albums }) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  
  const { data, error } = useSWR("http://localhost:8000/api/albums", fetcher);

  const displayAlbums = () => {
    if (error) return <div> {error.message} </div>
    if (!data) return <div> Loading... </div>

    return (
      data.map((album, index) => {
        return (
          <div key={index}>
            <h2>{album.artist}</h2>
            <h3>{album.title}</h3>
            <h5>{album.year_released}</h5>
          </div>
        );
      })
    )
  }

  
  return (
    <>
      <h1>Album Assist</h1>
      {/* <div>
        {error ? (
          <div>return ({error.message}) </div>
        ) : data ? (
          data.map((album, index) => {
            return (
              <div key={index}>
                <h2>{album.artist}</h2>
                <h3>{album.title}</h3>
                <h5>{album.year_released}</h5>
              </div>
            );
          })
        ) : (
          <div> Loading... </div>
        )}
      </div> */}
      {displayAlbums()}
      {console.log(data)}
      <br />
      <h2>Add Album</h2>
      <AddAlbum />
    </>
  );
};

// export async function getServerSideProps() {

//   const res = await axios.get("http://127.0.0.1:8000/api/albums")
//   const albums =  res.data

//   return {
//     props: {
//       albums
//     }
//   }
// }

export default Home;
