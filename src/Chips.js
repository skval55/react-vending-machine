import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
  return (
    <>
      <h1>Chips</h1>
      <iframe
        src="https://giphy.com/embed/WpToCsBQuIopU4L4Ij"
        width="480"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">go back</Link>
    </>
  );
};

export default Chips;
