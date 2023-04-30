import Image from "next/image"


const AlbumView = (props) => {

    return (
        <div className="fixed z-20 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div className="modal bg-white rounded-lg overflow-hidden w-full max-w-md mx-auto shadow-lg z-50">
                    <div className="relative bg-cyan-900 py-5 px-5">
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                            <button
                                className="text-white"
                                onClick={props.onClose}>
                                    X
                                </button>
                        </div>
                        <h2 className="text-2xl font-bold text-white">{props.album.title}</h2>
                        <p className="text-lg font-semibold text-triadic_two_two mt-2">
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
                </div>
            </div>
        </div>
    )
}

export default AlbumView