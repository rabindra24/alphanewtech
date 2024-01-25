import React from "react";
import { DedicatedSolutionData } from "@/constants/contants";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/utils/CustomButton";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const DedicatedSolutions = () => {
  return (
    <div className=" relative flex flex-col px-20 py-24">
      <h3 className="font-regular  text-center md:text-4xl text-white">
        dedicated solutions
      </h3>
      <span className="h-[100px] w-[3px] bg-primary mx-auto mt-5"></span>
      <div className="flex md:flex-row flex-col w-full h-full">
        {/* Fields  */}
        <div className="text-lg  flex-1 flex flex-col font-pontiac font-thin  justify-center">
          <div className="triangle_container hover:text-primary  mx-auto px-5">
            <Link href={"/services"}>
              <h3>Startup DNA</h3>
            </Link>
            <span className="triangle_link right-0"></span>
          </div>
          <div className="triangle_container hover:text-primary  mx-auto px-5">
            <Link href={"/services"}>
              <h3>Startup DNA</h3>
            </Link>
            <span className="triangle_link right-0"></span>
          </div>
          <div className="triangle_container hover:text-primary  mx-auto px-5">
            <Link href={"/services"}>
              <h3>Startup DNA</h3>
            </Link>
            <span className="triangle_link right-0"></span>
          </div>
        </div>
        {/* carosel  */}
        <div className="flex-1">
        <div class="container">
      {/* <!-- Side infos --> */}
      <div class="side-info">
        <span>discover</span>
        <h1>Modern Cars</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          omnis quis nesciunt.
        </p>
        <a href="#">Browse More</a>
      </div>
      {/* <!-- Swiper slider --> */}
      <div class="swiper">
        <div class="swiper-wrapper">
          {/* <!-- Content 1 --> */}
          <div class="swiper-slide slide-one">
            <div>
              <h2>Car 01</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                nemo eveniet delectus obcaecati dolorem at, cumque deleniti sint
                laborum adipisci quis aut consequuntur eum?
              </p>
              <a href="#">View Detail</a>
            </div>
          </div>
          {/* <!-- Content 2 --> */}
          <div class="swiper-slide slide-two">
            <div>
              <h2>Car 02</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                nemo eveniet delectus obcaecati dolorem at, cumque deleniti sint
                laborum adipisci quis aut consequuntur eum?
              </p>
              <a href="#">View Detail</a>
            </div>
          </div>
          {/* <!-- Content 3 --> */}
          <div class="swiper-slide slide-three">
            <div>
              <h2>Car 03</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                nemo eveniet delectus obcaecati dolorem at, cumque deleniti sint
                laborum adipisci quis aut consequuntur eum?
              </p>
              <a href="#">View Detail</a>
            </div>
          </div>
          {/* <!-- Content 4 --> */}
          <div class="swiper-slide slide-four">
            <div>
              <h2>Car 04</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                nemo eveniet delectus obcaecati dolorem at, cumque deleniti sint
                laborum adipisci quis aut consequuntur eum?
              </p>
              <a href="#">View Detail</a>
            </div>
          </div>
        </div>
        {/* <!-- Add Pagination --> */}
        <div class="swiper-pagination"></div>
      </div>
    </div>
</div>
        </div>
      <div className="mx-auto text-center">
        <p className="">You have ideas. We have software solutions.</p>
        <h4>Time to join forces.</h4>
        <CustomButton />
      </div>
    </div>
  );
};

export default DedicatedSolutions;
