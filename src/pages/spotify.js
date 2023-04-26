const axios = require("axios")
import Link from "next/link"


const client_id = process.env.NEXT_PUBLIC_CLIENT_ID
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET
let token = ""

// requesting authorization
let authOptions = {
    method: "post",
    url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
    "Content-Type": "application/x-www-form-urlencoded"
  },
  data: "grant_type=client_credentials",
}

export const getServerSideProps = async () => {
    axios(authOptions)
    .then(response => {
        console.log(response.data)
        const token = response.data.access_token
        console.log(token)
        // return { props: { token } }
    })
    .catch(error => {
        console.log(error)
    })
}

const searchAlbums = async (query) => {
    // const token = await getToken();
    console.log(token)
    const response = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        params: {
            q:"get on board",
            type: "album",
            market: "US"
        }
    })
    console.log(response.data)
    return response.data
}

const Spotify = () => {

    return (
        <>
        <div>
            {/* <button onClick={getToken}>Token</button> */}
            <br />
            <button onClick={searchAlbums}>Search albums</button>
            <br />
            <p>Back To <Link href="/">Home</Link></p>
        </div>
        <div>
            <h2>Album Title: </h2>
        </div>
        </>
    )
}

export default Spotify