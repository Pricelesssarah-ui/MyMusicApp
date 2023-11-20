import { useEffect, useState } from 'react';
import LoginPage from './Components/LoginPage';
import { getTokenFromUrl } from './Components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player';


const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log(user);
      });
    }
  }, []);


  return (
    <div className="App">
      {
        token? (
            <Player />
        ) : (
          <LoginPage />
        )
        }
    </div>
  );
}

export default App;
