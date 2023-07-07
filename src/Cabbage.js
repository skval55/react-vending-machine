import React from "react";
import { Link } from "react-router-dom";

const Cabbage = () => {
  return (
    <>
      <h1>Cabbage</h1>
      <iframe
        src="https://giphy.com/embed/T0KyApIE4Znwc"
        width="480"
        height="360"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">go back</Link>
    </>
  );
};

export default Cabbage;
