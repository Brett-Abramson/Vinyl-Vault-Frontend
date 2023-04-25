const ListAlbums = (props) => {
    // if (error) return <div> {error.message} </div>
    // if (!data) return <div> Loading... </div>
    
    return (
      props.data.map((album, index) => {
        return (
          <div key={index} className="prose">
            <h3>{album.artist}</h3>
            <h4>{album.title}</h4>
            <h5>{album.year_released}</h5>
            <button onClick={handleDelete} value={album.id}>Remove Album</button>
          </div>
        );
      })
    )
  }

  export default ListAlbums