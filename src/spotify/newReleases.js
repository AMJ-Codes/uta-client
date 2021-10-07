import { useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-node"
import useAuth from "./useAuth"

const spotifyApi = new SpotifyWebApi({
  clientId: "d5939a6c88b14b0a9416f80d88506c04",
})

export default function newReleases({ code }) {

  const accessToken = useAuth(code)
  spotifyApi.getNewReleases({ limit: 5, offset: 0, country: 'SE' })
    .then(function (data) {
      console.log(data.body);
      done();
    }, function (err) {
      console.log("Something went wrong!", err);
    });

    useEffect(() => {
      if (!accessToken) return
      spotifyApi.setAccessToken(accessToken)
    }, [accessToken])
}

    return (
      <div
        className="d-flex m-2 align-items-center"
        style={{ cursor: "pointer" }}
        onClick={handlePlay}
      >
        <img src={track.albumUrl} alt={''} style={{ height: "64px", width: "64px" }} />
      </div>
    )



