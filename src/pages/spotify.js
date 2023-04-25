const axios = require("axios")


const client_id = process.env.NEXT_PUBLIC_CLIENT_ID
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET

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
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64')

axios(authOptions)
    .then(response => {
        const token = response.data.access_token
        console.log(token)
    })
    .catch(error => {
        console.log(error)
    })

const Spotify = () => {

    return (
        <>
        
        </>
    )
}

export default Spotify