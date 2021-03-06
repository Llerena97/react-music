import React, { useState } from 'react';

const Form = ({queryAPILyrics}) => {
  const [search, setSearch] = useState({
    artist: '',
    song: ''
  });

  const updateState = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    queryAPILyrics(search)
  }

  return(
    <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form
                    onSubmit={handleSubmit}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Find Song Lyrics</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artist</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="artist"
                                        placeholder="Artist Name"
                                        required
                                        onChange={updateState}
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Song</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="song"
                                        placeholder="Song Name"
                                        required
                                        onChange={updateState}
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Find Song</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
  )
};

export default Form;
