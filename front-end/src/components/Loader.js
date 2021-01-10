import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

function Loader(props) {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    width: "100px";
    height: "100px";
  `;
  return (
    <>
      <ClipLoader color={"red"} css={override} size={150}></ClipLoader>
    </>
  );
}

export default Loader;
