import Youtube from "../Youtube/Youtube";
import { useEffect, useState } from "react";
import { Status, CoverBox } from "./songcoverStyle";

function Songcover({img}) {
  return (
    <>
      <br />
      <br />
      <br />
      <Status>Covers</Status>
      <br />
      <br />
      <Status>By Artist Name </Status>
      <CoverBox>
        <img
          width="560"
          height="255"
          src={img}
          alt="songcover"
          style={{ borderRadius: "30px" }}
        ></img>
      </CoverBox>
    </>
  );
}

export default Songcover;
