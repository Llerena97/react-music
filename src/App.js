import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form'
import Song from './components/Song'
import axios from 'axios';

function App() {

  const [artist, setArtist] = useState('')
  const [lyrics, setLyrics] = useState([])
  const [info, setInfo] = useState({})

  const queryAPILyrics = async search => {
    const url = `https://api.lyrics.ovh/v1/${search.artist}/${search.song}`
    const result = await axios(url);
    setArtist(search.artist)
    setLyrics(result.data.lyrics);
  }

  const queryAPIInfo = async () => {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
    const result = await axios(url);
    setInfo(result.data.artists[0]);
  }

  useEffect(
    () => {
      queryAPIInfo()
    }, [artist]
  );

  return (
    <Fragment>
      <Form
          queryAPILyrics={queryAPILyrics}
        />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6" >
          </div>
          <div className="col-md-6" >
            <Song
                lyrics={lyrics}
              />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
