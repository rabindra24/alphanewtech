import CustomButton from "@/utils/CustomButton";
import React, { useState } from "react";

const TrustedSection = () => {
  const [play, setPlay] = useState(false);
  const playPause = (e) => {
    e.preventDefault();
    var myVideo = document.getElementById("video1");
    if (myVideo.paused) {
      setPlay(true);
      myVideo.play();
    } else {
      setPlay(true);
      myVideo.pause();
    }
  };
  return (
    <div className="flex md:flex-row relative top-0 z-10 flex-col md:gap-6  md:px-10 sm:px-3">
      <div className="flex-1 relative top-0 border-4 border-primary">
        <video
          id="video1"
          onClick={(e) => {
            playPause(e);
          }}
          autoPlay
          src="https://cdn.merixstudio.com/media/homepage/video_teaser/teaser_why_merix.mp4"
           className="w-full h-full object-cover"
        ></video>
        {!play && (
          <span className="absolute pointer-events-none top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" >
            Tap to Play
          </span>
        )}
      </div>
      <div className="flex-1 md:px-10 px-5 pb-10  md:py-10  workBackground">
        <h3 className="font-regular md:text-3xl text-2xl max-sm:mt-10 mb-10">
          trusted by 250+ revolutionary businesses
        </h3>
        <p className="text-gray-300 md:text-md text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          recusandae temporibus aliquam repudiandae dolorem, cum eligendi unde
          fugit repellat nobis.
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus autem hic tempore facilis non beatae eaque natus quam voluptate sed vel atque excepturi alias quaerat odit eius voluptatibus, porro impedit!
        </p>
        <CustomButton/>
      </div>
    </div>
  );
};

export default TrustedSection;
