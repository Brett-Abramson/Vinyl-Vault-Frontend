import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AlbumsList from "../components/AlbumsList";
import Store from "@/context/Store";

const Home = ({}) => {
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
    <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-fit py-10">
      <div className="mx-auto my-10 w-72 h-72 rounded-full border-4 border-gray-800 hover:animate-spin">
        <div className="flex items-center justify-center h-full rounded-full bg-gray-800 text-white font-bold text-3xl tracking-wider">
          <div className="transform rotate-12">
            <div className="text-5xl font-barrio">VINYL</div>
            <div className="text-3xl font-barrio">VAULT</div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-fit bg-gray-800 text-center rounded-lg">
        <h1 className="text-white font-bold text-3xl py-4 pt-10 px-6">
          Welcome to Vinyl Vault
        </h1>
        <Store>
          <AlbumsList />
        </Store>
      </div>
    </div>
  );
};


export default Home;