const AlbumItem = ({ album, handleAddAlbum }) => {
  const artistName = album.artists.map((artist) => artist.name).join(" & ");

  return (
    <div className="flex justify-between flex-col bg-analogous_two hover:bg-primary shadow-md hover:scale-105 hover:shadow-xl transform transition duration-300 ease-in-out my-5 p-5 aspect-square rounded-lg">
      <br />
      <h2 className="text-2xl font-oswald font-bold">{album.name}</h2>
      <div>
        {album.artists.map((artist) => {
          <div key={artist.id}>
            <p className="font-lg font-oswald">{artist.name}</p>
          </div>;
        })}
        <button
          onClick={() => handleAddAlbum(album)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add to Owned Albums
        </button>
        <br />
      </div>
    </div>
  );
};

export default AlbumItem;
