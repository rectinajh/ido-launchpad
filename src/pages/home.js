import React from "react";
import * as s from "../styles/global";

const Home = () => {
  const style = {width:'100%'}
  return (
    <s.Container ai="center">
      <s.Container ai="center">
        <s.SpacerLarge />
        {/* <s.TextDescription fs={"89px"}>IDOFactory</s.TextDescription> */}
        <s.TextDescription style={{ textAlign: "center" }}>
        Merlin's first launch pad
          <video style={style} src="https://gamic.themerex.net/wp-content/uploads/2022/09/Pexels-Videos-2759479.mp4" autoplay="" loop="" muted="muted" playsinline="" controlslist="nodownload"></video>        </s.TextDescription>
        <s.SpacerLarge />
        <s.TextDescription>{/* - Isaak Solovev - */}</s.TextDescription>
      </s.Container>
    </s.Container>
  );
};

export default Home;
