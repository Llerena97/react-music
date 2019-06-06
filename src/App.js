import React, { useState, Fragment } from 'react';
import Form from './components/Form'

function App() {

  const [artist, setArtist] = useState('')
  const [lyrics, setLyrics] = useState([])
  const [info, setInfo] = useState({})

  const queryAPILyrics = search => {
    console.log(search)
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
