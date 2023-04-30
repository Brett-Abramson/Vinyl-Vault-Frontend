import Image from "next/image"


const AlbumView = (props) => {

    return (
        <div className="fixed z-20 top-20 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="bg-stone-900 rounded-lg overflow-hidden w-full max-w-md mx-auto shadow-lg z-50">
                    <div className="relative bg-stone-800 py-5 px-5">
                        <div className="absolute top-0 right-1 mt-2 mr-2">
                            <button
                                className="text-complementary text-xl font-bold"
                                onClick={props.onClose}>
                                    X
                                </button>
                        </div>
                        <h2 className="text-3xl font-oswald text-white">{props.album.title}</h2>
                        <p className="text-lg font-orbitron font-semibold text-white mt-2">
                            {props.album.artist}
                        </p>
                    </div>

                    <div className="p-5">
                        <div className="text-center">
                            <Image
                            src={props.album.artwork}
                            alt={`The album cover of ${props.album.title}`}
                            width={600}
                            height={600}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly font-barrio text-gray-100 py-2">
                        <p className=""> Released: {props.album.release_date}</p>
                        <p className="">Tracks: {props.album.tracks}</p>
                    </div>
                    <div>
                        <button className="bg-amber-500 hover:bg-complementary text-triadic_two font-bold py-2 px-4 mb-3 rounded" onClick={()=>{props.handleDelete(props.album.id)}}>Remove Album From Collection</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumView