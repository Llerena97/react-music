import React, { useState, Fragment } from 'react';
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
    setLyrics(result.data.lyrics);
  }

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
