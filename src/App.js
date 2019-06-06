import React, { useState, Fragment } from 'react';
import Form from './components/Form'

function App() {

  const [artist, setArtist] = useState('')
  const [lyrics, setLyrics] = useState([])
  const [info, setInfo] = useState({})

  return (
    <Fragment>
      <Form/>
    </Fragment>
  );
}

export default App;
