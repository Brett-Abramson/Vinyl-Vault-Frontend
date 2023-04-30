import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AlbumsList from "../components/AlbumsList";
import Store from "@/context/Store";
import AddAlbum from "@/components/AddAlbum";

const Home = ({}) => {
  return (
    <>
      <div className="mx-auto w-fit bg-gray-800 text-center rounded-lg">
        <h1 className="text-white font-bold text-3xl py-4 pt-10 px-6">
          Welcome to Vinyl Vault
        </h1>
        <div className="flex flex-col justify-around sm:flex-row">
          <div className="flex flex-col justify-around">
            <p className="text-white font-medium text-lg py-3">
              You can add an album manually
            </p>
            <AddAlbum />
          </div>
          <div className="flex flex-col justify-around">
            <p className="text-white font-medium text-lg p-3">
              Or you can search for it
            </p>
            <Link
              className="bg-amber-500 hover:bg-primary text-triadic_two font-bold py-2 px-4 rounded"
              href="/spotify"
            >
              Search Spotify
            </Link>
          </div>
        </div>
        <Store>
          <AlbumsList />
        </Store>
      </div>
    </>
  );
};

export default Home;
