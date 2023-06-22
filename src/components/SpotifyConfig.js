import axios from "axios";

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

const getToken = async () => {
  const authOptions = {
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(client_id + ":" + client_secret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: "grant_type=client_credentials",
  };

  try {
    const response = await axios(authOptions)
    return response.data.access_token
  } catch (error) {
    console.log(error)
  }
};

export default getToken
