import React, { useState, Fragment } from 'react';
import Form from './components/Form'
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
    </Fragment>
  );
}

export default App;
