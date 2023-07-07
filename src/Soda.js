import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <>
      <h1>Soda</h1>
      <iframe
        src="https://giphy.com/embed/mFmuXkziY2RsQ"
        width="480"
        height="335"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">go back</Link>
    </>
  );
};

export default Soda;
