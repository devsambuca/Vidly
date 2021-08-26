import React from 'react';

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>{match.params.id}</h1>
    </div>
  );
};

export default MovieForm;
