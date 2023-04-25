import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AddAlbum from "../../components/add_album";
import useSWR from "swr";
import ListAlbums from "../../components/list_albums";

const Home = ({ albums }) => {
  // this is the GET
  const [albumList, setAlbumList] = useState([])
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const endpoint = "http://localhost:8000/api/albums"
  const { data, error, mutate } = useSWR(endpoint, fetcher);
  


  const handleDelete = (event) => {
    axios
      .delete(endpoint + "/" + event.target.value)
      .then(() => {
        mutate((prevData) => {
          prevData.filter((album) => album.id !== event.target.value)
        })
      })
      .catch((error) => {
        alert("Error: Deleting Album")
      })
  }
  const displayAlbums = () => {
    if (error) return <div> {error.message} </div>
    if (!data) return <div> Loading... </div>
    
    return (
      data.map((album, index) => {
        return (
          <div key={index} className="prose">
            <h3>{album.artist}</h3>
            <h4>{album.title}</h4>
            <h5>{album.year_released}</h5>
            <button onClick={handleDelete} value={album.id}>Remove Album</button>
            <details>
              <summary>Edit Album</summary>
              <AddAlbum />
            </details>
          </div>
        );
      })
    )
  }


  return (
    <>
      <h1 className="text-2xl">Album Assist</h1>
      {console.log(data)}
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
      <br />
      <h2 className="text-lg">Add Album</h2>
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
