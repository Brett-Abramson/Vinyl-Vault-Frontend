import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AlbumsList from "../components/AlbumsList";
import Store from "@/context/Store";


const Home = ({  }) => {
  // const handleCreate = (newAlbum) => {
  //   axios
  //     .post("http://localhost:8000/api/albums", newAlbum)
  //     .then((response) => {
  //       console.log(response),
  //       getAlbums()
  //     })
  // }
  // const handleUpdate = (editAlbum) => {
  //   console.log(editAlbum)
  //   axios
  //     .put("http://localhost:8000/api/albums/" + editAlbum.id, editAlbum)
  //     .then((response) => {
  //       getAlbums()
  //     })
  // }
  // const handleDelete = (event) => {
  //   axios
  //     .delete("http://localhost:8000/api/albums/" + event.target.value)
  //     .then((response) => {
  //       console.log(response),
  //       getAlbums()
  //     })
  // }



  return (
    <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
      <h1 className="text-2xl">Album Assist</h1>
      <br />
      <p><Link href="/spotify">Spotify API</Link></p>
      <br />
      <Store>
        <AlbumsList />
      </Store>
    </div>
  );
};

export default Home;
