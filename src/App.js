import { Row, Container } from "react-bootstrap";
import "./App.css";
import { motion } from "framer-motion";
// import { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React, { useRef } from "react";

function App() {
  const swiperRef = useRef(null);
  const perView = 3; // Define perView with a value

  // const paginationOptions = {
  //   clickable: true, // Allow clicking on pagination dots
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + '</span>';
  //   }, // Custom rendering of pagination bullets
  //   // Add more options as needed
  // };

  return (
    <Container>
      <Row>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 5, x: 0 }}
          transition={{ duration: 2.5 }}
        >
          <p className="plans-memerbership">Membership Details</p>
          <div className="plans-detailsbox">
            <div className="plans-currentplan">
              <svg
                width="214"
                height="40"
                viewBox="0 0 214 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H214L188.386 19.5L214 40H0V0Z"
                  fill="url(#paint0_linear_969_333)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_969_333"
                    x1="0"
                    y1="20"
                    x2="214"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AEB2B5" />
                    <stop offset="1" stop-color="#E9EAEE" />
                  </linearGradient>
                </defs>
                <text
                  x="40%"
                  y="60%"
                  fill="black"
                  text-anchor="middle"
                  font-size="19px"
                  font-family="Roboto"
                  className="plans-exectext"
                >
                  EXEC-Silver
                </text>
              </svg>
            </div>
            <div className="d-flex flex">
              <div>
                <p className="subscriptiondate">Subscription Date</p>
              </div>
              <div>
                <p className="subdatenum">28 May 2024</p>
              </div>
            </div>
            <div className="d-flex flex">
              <div>
                <p className="nextpayment">Next Payment :</p>
              </div>
              <div>
                <p className="nextpaymentdate">28 May 2024</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Row>

      <Row>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from slightly below and invisible
          animate={{ opacity: 1, y: 0 }} // Move upwards and fade in
          transition={{ duration: 1.5 }} // Set the duration of the animation
        >
          <div className="header">
            <h1 className="plans-heading">Subscription Plans</h1>
            <p className="plans-paragraph">
              Choose the best plan that works best for you
            </p>
            <div>
              <svg
                width="209"
                height="54"
                viewBox="0 0 209 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="plans-comparebutton"
                onClick={() => {
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  });
                }}
              >
                <g filter="url(#filter0_d_1022_977)">
                  <rect x="4" width="201" height="46" rx="20" fill="white" />
                  <rect
                    x="4.5"
                    y="0.5"
                    width="200"
                    height="45"
                    rx="19.5"
                    stroke="url(#paint0_linear_1022_977)"
                  />
                </g>
                <path
                  d="M52.1193 21H50.5341C50.4403 20.544 50.2763 20.1435 50.0419 19.7983C49.8118 19.4531 49.5305 19.1634 49.1982 18.929C48.87 18.6903 48.5057 18.5114 48.1051 18.392C47.7045 18.2727 47.2869 18.2131 46.8523 18.2131C46.0597 18.2131 45.3416 18.4134 44.6982 18.8139C44.0589 19.2145 43.5497 19.8047 43.1705 20.5845C42.7955 21.3643 42.608 22.321 42.608 23.4545C42.608 24.5881 42.7955 25.5447 43.1705 26.3246C43.5497 27.1044 44.0589 27.6946 44.6982 28.0952C45.3416 28.4957 46.0597 28.696 46.8523 28.696C47.2869 28.696 47.7045 28.6364 48.1051 28.517C48.5057 28.3977 48.87 28.2209 49.1982 27.9865C49.5305 27.7479 49.8118 27.456 50.0419 27.1108C50.2763 26.7614 50.4403 26.3608 50.5341 25.9091H52.1193C52 26.5781 51.7827 27.1768 51.4673 27.7053C51.152 28.2337 50.7599 28.6832 50.2912 29.054C49.8224 29.4205 49.2962 29.6996 48.7124 29.8913C48.1328 30.0831 47.5128 30.179 46.8523 30.179C45.7358 30.179 44.7429 29.9062 43.8736 29.3608C43.0043 28.8153 42.3203 28.0398 41.8217 27.0341C41.3232 26.0284 41.0739 24.8352 41.0739 23.4545C41.0739 22.0739 41.3232 20.8807 41.8217 19.875C42.3203 18.8693 43.0043 18.0938 43.8736 17.5483C44.7429 17.0028 45.7358 16.7301 46.8523 16.7301C47.5128 16.7301 48.1328 16.826 48.7124 17.0178C49.2962 17.2095 49.8224 17.4908 50.2912 17.8615C50.7599 18.228 51.152 18.6754 51.4673 19.2038C51.7827 19.728 52 20.3267 52.1193 21ZM58.465 30.2045C57.5787 30.2045 56.801 29.9936 56.1319 29.5717C55.4672 29.1499 54.9473 28.5597 54.5723 27.8011C54.2015 27.0426 54.0162 26.1562 54.0162 25.142C54.0162 24.1193 54.2015 23.2266 54.5723 22.4638C54.9473 21.701 55.4672 21.1087 56.1319 20.6868C56.801 20.2649 57.5787 20.054 58.465 20.054C59.3514 20.054 60.127 20.2649 60.7917 20.6868C61.4608 21.1087 61.9806 21.701 62.3514 22.4638C62.7264 23.2266 62.9139 24.1193 62.9139 25.142C62.9139 26.1562 62.7264 27.0426 62.3514 27.8011C61.9806 28.5597 61.4608 29.1499 60.7917 29.5717C60.127 29.9936 59.3514 30.2045 58.465 30.2045ZM58.465 28.8494C59.1383 28.8494 59.6923 28.6768 60.127 28.3317C60.5616 27.9865 60.8833 27.5327 61.0922 26.9702C61.301 26.4077 61.4054 25.7983 61.4054 25.142C61.4054 24.4858 61.301 23.8743 61.0922 23.3075C60.8833 22.7408 60.5616 22.2827 60.127 21.9332C59.6923 21.5838 59.1383 21.4091 58.465 21.4091C57.7917 21.4091 57.2377 21.5838 56.8031 21.9332C56.3684 22.2827 56.0467 22.7408 55.8379 23.3075C55.6291 23.8743 55.5247 24.4858 55.5247 25.142C55.5247 25.7983 55.6291 26.4077 55.8379 26.9702C56.0467 27.5327 56.3684 27.9865 56.8031 28.3317C57.2377 28.6768 57.7917 28.8494 58.465 28.8494ZM65.2166 30V20.1818H66.674V21.7159H66.8018C67.0064 21.1918 67.3366 20.7848 67.7926 20.495C68.2486 20.201 68.7962 20.054 69.4354 20.054C70.0831 20.054 70.6222 20.201 71.0526 20.495C71.4872 20.7848 71.826 21.1918 72.0689 21.7159H72.1712C72.4226 21.2088 72.7997 20.8061 73.3026 20.5078C73.8054 20.2053 74.4084 20.054 75.1115 20.054C75.9893 20.054 76.7074 20.3288 77.2656 20.8786C77.8239 21.424 78.103 22.2741 78.103 23.429V30H76.5945V23.429C76.5945 22.7045 76.3963 22.1868 76 21.8757C75.6037 21.5646 75.1371 21.4091 74.6001 21.4091C73.9098 21.4091 73.375 21.6179 72.9957 22.0355C72.6165 22.4489 72.4268 22.973 72.4268 23.608V30H70.8928V23.2756C70.8928 22.7173 70.7116 22.2678 70.3494 21.9268C69.9872 21.5817 69.5206 21.4091 68.9496 21.4091C68.5575 21.4091 68.1911 21.5135 67.8501 21.7223C67.5135 21.9311 67.2408 22.2209 67.032 22.5916C66.8274 22.9581 66.7251 23.3821 66.7251 23.8636V30H65.2166ZM80.8612 33.6818V20.1818H82.3185V21.7415H82.4975C82.6083 21.571 82.7617 21.3537 82.9577 21.0895C83.158 20.821 83.4435 20.5824 83.8143 20.3736C84.1893 20.1605 84.6964 20.054 85.3356 20.054C86.1623 20.054 86.891 20.2607 87.5217 20.674C88.1523 21.0874 88.6445 21.6733 88.9982 22.4318C89.3519 23.1903 89.5288 24.0852 89.5288 25.1165C89.5288 26.1562 89.3519 27.0575 88.9982 27.8203C88.6445 28.5788 88.1545 29.1669 87.5281 29.5845C86.9016 29.9979 86.1793 30.2045 85.3612 30.2045C84.7305 30.2045 84.2255 30.1001 83.8462 29.8913C83.467 29.6783 83.1751 29.4375 82.9705 29.169C82.766 28.8963 82.6083 28.6705 82.4975 28.4915H82.3697V33.6818H80.8612ZM82.3441 25.0909C82.3441 25.8324 82.4528 26.4865 82.6701 27.0533C82.8874 27.6158 83.2049 28.0568 83.6225 28.3764C84.0401 28.6918 84.5515 28.8494 85.1566 28.8494C85.7873 28.8494 86.3136 28.6832 86.7354 28.3509C87.1616 28.0142 87.4812 27.5625 87.6942 26.9957C87.9116 26.4247 88.0202 25.7898 88.0202 25.0909C88.0202 24.4006 87.9137 23.7784 87.7006 23.2244C87.4918 22.6662 87.1744 22.2251 86.7482 21.9013C86.3263 21.5732 85.7958 21.4091 85.1566 21.4091C84.543 21.4091 84.0273 21.5646 83.6097 21.8757C83.1921 22.1825 82.8768 22.6129 82.6637 23.1669C82.4506 23.7166 82.3441 24.358 82.3441 25.0909ZM94.7191 30.2301C94.0969 30.2301 93.5323 30.1129 93.0252 29.8786C92.5181 29.6399 92.1154 29.2969 91.8171 28.8494C91.5188 28.3977 91.3697 27.8523 91.3697 27.2131C91.3697 26.6506 91.4805 26.1946 91.7021 25.8452C91.9237 25.4915 92.2198 25.2145 92.5906 25.0142C92.9613 24.8139 93.3704 24.6648 93.8178 24.5668C94.2695 24.4645 94.7234 24.3835 95.1793 24.3239C95.7759 24.2472 96.2596 24.1896 96.6303 24.1513C97.0053 24.1087 97.2781 24.0384 97.4485 23.9403C97.6232 23.8423 97.7106 23.6719 97.7106 23.429V23.3778C97.7106 22.7472 97.538 22.2571 97.1928 21.9077C96.8519 21.5582 96.3342 21.3835 95.6396 21.3835C94.9194 21.3835 94.3548 21.5412 93.9457 21.8565C93.5366 22.1719 93.2489 22.5085 93.0827 22.8665L91.6509 22.3551C91.9066 21.7585 92.2475 21.294 92.6737 20.9616C93.104 20.625 93.5728 20.3906 94.0799 20.2585C94.5913 20.1222 95.0941 20.054 95.5884 20.054C95.9038 20.054 96.266 20.0923 96.6751 20.169C97.0884 20.2415 97.4869 20.3928 97.8704 20.6229C98.2582 20.853 98.5799 21.2003 98.8356 21.6648C99.0913 22.1293 99.2191 22.7514 99.2191 23.5312V30H97.7106V28.6705H97.6339C97.5316 28.8835 97.3612 29.1115 97.1225 29.3544C96.8839 29.5973 96.5664 29.804 96.1701 29.9744C95.7738 30.1449 95.2901 30.2301 94.7191 30.2301ZM94.9492 28.875C95.5458 28.875 96.0487 28.7578 96.4577 28.5234C96.8711 28.2891 97.1822 27.9865 97.391 27.6158C97.604 27.245 97.7106 26.8551 97.7106 26.446V25.0653C97.6467 25.142 97.506 25.2124 97.2887 25.2763C97.0756 25.3359 96.8285 25.3892 96.5472 25.4361C96.2702 25.4787 95.9996 25.517 95.7354 25.5511C95.4755 25.581 95.2646 25.6065 95.1026 25.6278C94.7106 25.679 94.3441 25.7621 94.0032 25.8771C93.6665 25.9879 93.3938 26.1562 93.185 26.3821C92.9805 26.6037 92.8782 26.9062 92.8782 27.2898C92.8782 27.8139 93.0721 28.2102 93.4599 28.4787C93.8519 28.7429 94.3484 28.875 94.9492 28.875ZM101.972 30V20.1818H103.43V21.6648H103.532C103.711 21.179 104.035 20.7848 104.504 20.4822C104.972 20.1797 105.501 20.0284 106.089 20.0284C106.2 20.0284 106.338 20.0305 106.504 20.0348C106.671 20.0391 106.796 20.0455 106.882 20.054V21.5881C106.83 21.5753 106.713 21.5561 106.53 21.5305C106.351 21.5007 106.161 21.4858 105.961 21.4858C105.484 21.4858 105.058 21.5859 104.683 21.7862C104.312 21.9822 104.018 22.255 103.801 22.6044C103.588 22.9496 103.481 23.3437 103.481 23.7869V30H101.972ZM112.487 30.2045C111.541 30.2045 110.725 29.9957 110.039 29.5781C109.357 29.1562 108.831 28.5682 108.46 27.8139C108.094 27.0554 107.911 26.1733 107.911 25.1676C107.911 24.1619 108.094 23.2756 108.46 22.5085C108.831 21.7372 109.347 21.1364 110.007 20.706C110.672 20.2713 111.448 20.054 112.334 20.054C112.845 20.054 113.35 20.1392 113.849 20.3097C114.347 20.4801 114.801 20.7571 115.21 21.1406C115.619 21.5199 115.945 22.0227 116.188 22.6491C116.431 23.2756 116.553 24.0469 116.553 24.9631V25.6023H108.985V24.2983H115.019C115.019 23.7443 114.908 23.25 114.686 22.8153C114.469 22.3807 114.158 22.0376 113.753 21.7862C113.352 21.5348 112.879 21.4091 112.334 21.4091C111.733 21.4091 111.213 21.5582 110.774 21.8565C110.34 22.1506 110.005 22.5341 109.771 23.0071C109.536 23.4801 109.419 23.9872 109.419 24.5284V25.3977C109.419 26.1392 109.547 26.7678 109.803 27.2834C110.063 27.7947 110.423 28.1847 110.883 28.4531C111.343 28.7173 111.878 28.8494 112.487 28.8494C112.884 28.8494 113.242 28.794 113.561 28.6832C113.885 28.5682 114.164 28.3977 114.399 28.1719C114.633 27.9418 114.814 27.6562 114.942 27.3153L116.399 27.7244C116.246 28.2188 115.988 28.6534 115.626 29.0284C115.264 29.3991 114.816 29.6889 114.284 29.8977C113.751 30.1023 113.152 30.2045 112.487 30.2045ZM124.115 30V16.9091H128.538C129.565 16.9091 130.404 17.0945 131.056 17.4652C131.713 17.8317 132.198 18.3281 132.514 18.9545C132.829 19.581 132.987 20.2798 132.987 21.0511C132.987 21.8224 132.829 22.5234 132.514 23.1541C132.203 23.7848 131.721 24.2876 131.069 24.6626C130.417 25.0334 129.582 25.2188 128.563 25.2188H125.393V23.8125H128.512C129.215 23.8125 129.78 23.6911 130.206 23.4482C130.632 23.2053 130.941 22.8771 131.133 22.4638C131.329 22.0462 131.427 21.5753 131.427 21.0511C131.427 20.527 131.329 20.0582 131.133 19.6449C130.941 19.2315 130.63 18.9077 130.2 18.6733C129.769 18.4347 129.198 18.3153 128.487 18.3153H125.7V30H124.115ZM136.844 16.9091V30H135.336V16.9091H136.844ZM142.496 30.2301C141.874 30.2301 141.31 30.1129 140.803 29.8786C140.295 29.6399 139.893 29.2969 139.594 28.8494C139.296 28.3977 139.147 27.8523 139.147 27.2131C139.147 26.6506 139.258 26.1946 139.479 25.8452C139.701 25.4915 139.997 25.2145 140.368 25.0142C140.739 24.8139 141.148 24.6648 141.595 24.5668C142.047 24.4645 142.501 24.3835 142.957 24.3239C143.553 24.2472 144.037 24.1896 144.408 24.1513C144.783 24.1087 145.055 24.0384 145.226 23.9403C145.401 23.8423 145.488 23.6719 145.488 23.429V23.3778C145.488 22.7472 145.315 22.2571 144.97 21.9077C144.629 21.5582 144.112 21.3835 143.417 21.3835C142.697 21.3835 142.132 21.5412 141.723 21.8565C141.314 22.1719 141.026 22.5085 140.86 22.8665L139.428 22.3551C139.684 21.7585 140.025 21.294 140.451 20.9616C140.881 20.625 141.35 20.3906 141.857 20.2585C142.369 20.1222 142.871 20.054 143.366 20.054C143.681 20.054 144.043 20.0923 144.452 20.169C144.866 20.2415 145.264 20.3928 145.648 20.6229C146.036 20.853 146.357 21.2003 146.613 21.6648C146.869 22.1293 146.996 22.7514 146.996 23.5312V30H145.488V28.6705H145.411C145.309 28.8835 145.138 29.1115 144.9 29.3544C144.661 29.5973 144.344 29.804 143.947 29.9744C143.551 30.1449 143.067 30.2301 142.496 30.2301ZM142.727 28.875C143.323 28.875 143.826 28.7578 144.235 28.5234C144.648 28.2891 144.96 27.9865 145.168 27.6158C145.381 27.245 145.488 26.8551 145.488 26.446V25.0653C145.424 25.142 145.283 25.2124 145.066 25.2763C144.853 25.3359 144.606 25.3892 144.325 25.4361C144.048 25.4787 143.777 25.517 143.513 25.5511C143.253 25.581 143.042 25.6065 142.88 25.6278C142.488 25.679 142.121 25.7621 141.781 25.8771C141.444 25.9879 141.171 26.1562 140.962 26.3821C140.758 26.6037 140.656 26.9062 140.656 27.2898C140.656 27.8139 140.849 28.2102 141.237 28.4787C141.629 28.7429 142.126 28.875 142.727 28.875ZM151.258 24.0938V30H149.75V20.1818H151.207V21.7159H151.335C151.565 21.2173 151.915 20.8168 152.383 20.5142C152.852 20.2074 153.457 20.054 154.199 20.054C154.863 20.054 155.445 20.1903 155.944 20.4631C156.442 20.7315 156.83 21.1406 157.107 21.6903C157.384 22.2358 157.523 22.9261 157.523 23.7614V30H156.014V23.8636C156.014 23.0923 155.814 22.4915 155.413 22.0611C155.013 21.6264 154.463 21.4091 153.764 21.4091C153.282 21.4091 152.852 21.5135 152.473 21.7223C152.098 21.9311 151.802 22.2358 151.584 22.6364C151.367 23.0369 151.258 23.5227 151.258 24.0938ZM167.234 22.3807L165.879 22.7642C165.793 22.5384 165.668 22.3189 165.501 22.1058C165.339 21.8885 165.118 21.7095 164.837 21.5689C164.555 21.4283 164.195 21.358 163.756 21.358C163.156 21.358 162.655 21.4964 162.254 21.7734C161.858 22.0462 161.66 22.3935 161.66 22.8153C161.66 23.1903 161.796 23.4865 162.069 23.7038C162.342 23.9212 162.768 24.1023 163.347 24.2472L164.805 24.6051C165.683 24.8182 166.337 25.1442 166.767 25.5831C167.197 26.0178 167.413 26.5781 167.413 27.2642C167.413 27.8267 167.251 28.3295 166.927 28.7727C166.607 29.2159 166.16 29.5653 165.585 29.821C165.009 30.0767 164.34 30.2045 163.577 30.2045C162.576 30.2045 161.747 29.9872 161.091 29.5526C160.435 29.1179 160.019 28.483 159.844 27.6477L161.276 27.2898C161.413 27.8182 161.67 28.2145 162.05 28.4787C162.433 28.7429 162.934 28.875 163.552 28.875C164.255 28.875 164.813 28.7259 165.227 28.4276C165.644 28.125 165.853 27.7628 165.853 27.3409C165.853 27 165.734 26.7145 165.495 26.4844C165.256 26.25 164.89 26.0753 164.396 25.9602L162.759 25.5767C161.86 25.3636 161.2 25.0334 160.778 24.5859C160.36 24.1342 160.151 23.5696 160.151 22.892C160.151 22.3381 160.307 21.848 160.618 21.4219C160.933 20.9957 161.362 20.6612 161.903 20.4183C162.448 20.1754 163.066 20.054 163.756 20.054C164.728 20.054 165.491 20.267 166.045 20.6932C166.603 21.1193 166.999 21.6818 167.234 22.3807Z"
                  fill="#5451F9"
                />
                <defs>
                  <filter
                    id="filter0_d_1022_977"
                    x="0"
                    y="0"
                    width="209"
                    height="54"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.76756 0 0 0 0 0.763333 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1022_977"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1022_977"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1022_977"
                    x1="4"
                    y1="23"
                    x2="205"
                    y2="23"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5451F9" />
                    <stop offset="1" stop-color="#E767E9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>
      </Row>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start from slightly below and invisible
        animate={{ opacity: 1, y: 0 }} // Move upwards and fade in
        transition={{ duration: 1.5 }} // Set the duration of the animation
      >
        <div className="body">
          <div className="d-flex flex">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Scrollbar, A11y, Zoom
              ]}
              spaceBetween={50}
              slidesPerView={perView} // Use perView variable instead of perview
              initialSlide={1} // Start with the first card in center
              pagination={{
              clickable: true,
              cssMode: true,
              modifierClass: "swiper-pagination-custom", // custom class name
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              effect={"coverflow"}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              onSwiper={(swiper) => (swiperRef.current.swiper = swiper)} 
              // effect={"zoom"} // Use zoom effect for card zooming
              zoom={{
                maxRatio: 1.2, // Maximum zoom ratio
                toggle: true, // Enable toggle zooming
                minRatio: 1,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev-custom",
              }}
            >
              <SwiperSlide>
                <div className="plans-card1">
                  <div className="plans-free">
                    <svg
                      width="214"
                      height="40"
                      viewBox="0 0 214 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0H214L188.386 19.5L214 40H0V0Z"
                        fill="#90F38E"
                        textAnchor="EXEC-Free"
                      />
                      <text
                        x="30%"
                        y="60%"
                        fill="black"
                        text-anchor="middle"
                        font-size="19px"
                        font-family="Roboto"
                        className="plans-exectext"
                      >
                        FREE
                      </text>
                    </svg>
                  </div>
                  <div>
                    <p className="plans-ammount">25847/-</p>
                  </div>
                  <div>
                    <p className="free-jobposting">25 Job Posting</p>
                  </div>
                  <div>
                    <p className="free-interviewinvitation">
                      50 Interview Invitations
                    </p>
                  </div>
                  <div>
                    <p className="free-resumefilter">Resume Filtering</p>
                  </div>
                  <div>
                    <p className="free-unlimited">
                      Unlimited for each Job posting
                    </p>
                  </div>
                  <div>
                    <p className="free-talent">Talent Pool</p>
                  </div>
                  <div>
                    <p className="free-platforms">
                      Users can view all the students and jobseekers across all
                      the platforms.{" "}
                    </p>
                  </div>
                  <div>
                    <button className="free-buynow">Buy Now</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="plans-card2">
                  <div className="plans-silver">
                    <svg
                      width="214"
                      height="40"
                      viewBox="0 0 214 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0H214L188.386 19.5L214 40H0V0Z"
                        fill="url(#paint0_linear_969_333)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_969_333"
                          x1="0"
                          y1="20"
                          x2="214"
                          y2="20"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AEB2B5" />
                          <stop offset="1" stop-color="#E9EAEE" />
                        </linearGradient>
                      </defs>
                      <text
                        x="40%"
                        y="60%"
                        fill="black"
                        text-anchor="middle"
                        font-size="19px"
                        font-family="Roboto"
                        className="plans-exectext"
                      >
                        EXEC-Silver
                      </text>
                    </svg>
                  </div>
                  <div>
                    <p className="plans-ammount">25847/-</p>
                  </div>
                  <div>
                    <p className="silver-jobposting">25 Job Posting</p>
                  </div>
                  <div>
                    <p className="silver-interviewinvitation">
                      50 Interview Invitations
                    </p>
                  </div>
                  <div>
                    <p className="silver-resumefilter">Resume Filtering</p>
                  </div>
                  <div>
                    <p className="silver-unlimited">
                      Unlimited for each Job posting
                    </p>
                  </div>
                  <div>
                    <p className="silver-talent">Talent Pool</p>
                  </div>
                  <div>
                    <p className="silver-platforms">
                      Users can view all the students and jobseekers across all
                      the platforms.
                    </p>
                  </div>
                  <div>
                    <button className="silver-buynow">Buy Now</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="plans-card3">
                  <div className="plans-gold">
                    <svg
                      width="214"
                      height="40"
                      viewBox="0 0 214 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0H214L188.386 19.5L214 40H0V0Z"
                        fill="#FCEA8D"
                      />
                      <text
                        x="40%"
                        y="60%"
                        fill="black"
                        text-anchor="middle"
                        font-size="19px"
                        font-family="Roboto"
                        className="plans-exectext"
                      >
                        EXEC-Gold
                      </text>
                    </svg>
                  </div>
                  <div>
                    <p className="plans-ammount">25847/-</p>
                  </div>
                  <div>
                    <p className="gold-jobposting">25 Job Posting</p>
                  </div>
                  <div>
                    <p className="gold-interviewinvitation">
                      50 Interview Invitations
                    </p>
                  </div>
                  <div>
                    <p className="gold-resumefilter">Resume Filtering</p>
                  </div>
                  <div>
                    <p className="gold-unlimited">
                      Unlimited for each Job posting
                    </p>
                  </div>
                  <div>
                    <p className="gold-talent">Talent Pool</p>
                  </div>
                  <div>
                    <p className="gold-platforms">
                      Users can view all the students and jobseekers across all
                      the platforms.
                    </p>
                  </div>
                  <div>
                    <button className="gold-buynow">Buy Now</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="plans-card4">
                  <div className="plans-free">
                    <svg
                      width="214"
                      height="40"
                      viewBox="0 0 214 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0H214L188.386 19.5L214 40H0V0Z"
                        fill="#C093FA"
                      />
                      <text
                        x="40%"
                        y="60%"
                        fill="black"
                        text-anchor="middle"
                        font-size="19px"
                        font-family="Roboto"
                        className="plans-exectext"
                      >
                        EXEC-Platinum
                      </text>
                    </svg>
                  </div>
                  <div>
                    <p className="plans-ammount">25847/-</p>
                  </div>
                  <div>
                    <p className="free-jobposting">25 Job Posting</p>
                  </div>
                  <div>
                    <p className="free-interviewinvitation">
                      50 Interview Invitations
                    </p>
                  </div>
                  <div>
                    <p className="free-resumefilter">Resume Filtering</p>
                  </div>
                  <div>
                    <p className="free-unlimited">
                      Unlimited for each Job posting
                    </p>
                  </div>
                  <div>
                    <p className="free-talent">Talent Pool</p>
                  </div>
                  <div>
                    <p className="free-platforms">
                      Users can view all the students and jobseekers across all
                      the platforms.
                    </p>
                  </div>
                  <div>
                    <button className="free-buynow">Buy Now</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="plans-card5">
                  <div className="plans-silver">
                    <svg
                      width="214"
                      height="41"
                      viewBox="0 0 214 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0.417725H214L188.386 19.9177L214 40.4177H0V0.417725Z"
                        fill="#A7BBFF"
                      />
                      <text
                        x="30%"
                        y="60%"
                        fill="black"
                        text-anchor="middle"
                        font-size="19px"
                        font-family="Roboto"
                        className="plans-exectext"
                      >
                        EXEC-Diamond
                      </text>
                    </svg>
                  </div>
                  <div>
                    <p className="plans-ammount">25847/-</p>
                  </div>
                  <div>
                    <p className="silver-jobposting">25 Job Posting</p>
                  </div>
                  <div>
                    <p className="silver-interviewinvitation">
                      50 Interview Invitations
                    </p>
                  </div>
                  <div>
                    <p className="silver-resumefilter">Resume Filtering</p>
                  </div>
                  <div>
                    <p className="silver-unlimited">
                      Unlimited for each Job posting
                    </p>
                  </div>
                  <div>
                    <p className="silver-talent">Talent Pool</p>
                  </div>
                  <div>
                    <p className="silver-platforms">
                      Users can view all the students and jobseekers across all
                      the platforms.
                    </p>
                  </div>
                  <div>
                    <button className="silver-buynow">Buy Now</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="plans-card6">
                  <div className="plans-gold">
                    <svg
                      width="214"
                      height="40"
                      viewBox="0 0 214 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0H214L188.386 19.5L214 40H0V0Z"
                        fill="#FCEA8D"
                      />
                      <text
                        x="40%"
                        y="60%"
                        fill="black"
                        text-anchor="middle"
                        font-size="19px"
                        font-family="Roboto"
                        className="plans-exectext"
                      >
                        EXEC-Gold
                      </text>
                    </svg>
                  </div>
                  <div>
                    <p className="plans-ammount">25847/-</p>
                  </div>
                  <div>
                    <p className="gold-jobposting">25 Job Posting</p>
                  </div>
                  <div>
                    <p className="gold-interviewinvitation">
                      50 Interview Invitations
                    </p>
                  </div>
                  <div>
                    <p className="gold-resumefilter">Resume Filtering</p>
                  </div>
                  <div>
                    <p className="gold-unlimited">
                      Unlimited for each Job posting
                    </p>
                  </div>
                  <div>
                    <p className="gold-talent">Talent Pool</p>
                  </div>
                  <div>
                    <p className="gold-platforms">
                      Users can view all the students and jobseekers across all
                      the platforms.
                    </p>
                  </div>
                  <div>
                    <button className="gold-buynow">Buy Now</button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="swiper-nav-button">
            <button
              className="leftclick"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <MdKeyboardArrowLeft size={26} />
              {/* Back */}
            </button>
            <button
              className="rightclick"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <MdKeyboardArrowRight size={26} />

              {/* Next */}
            </button>
          </div>
        </div>
      </motion.div>

      <div className="main">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from slightly below and invisible
          animate={{ opacity: 1, y: 0 }} // Move upwards and fade in
          transition={{ duration: 1.5 }} // Set the duration of the animation
        >
          <Row>
            <div className="compareplans-heading">
              <div className="d-flex flex">
                <div className="compare-dots">.....</div>
                <div className="compare-free">FREE</div>
                <div className="compare-silver">EXEC-Silver</div>
                <div className="compare-gold">EXEC-Gold</div>
                <div className="compare-platinum">EXEC-Platinum</div>
                <div className="compare-diamond">EXEC-Diamond</div>
              </div>
            </div>
          </Row>

          <Row>
            <div className="compareplans-jobpostings">
              <div className="d-flex flex">
                <div className="compare-jobposting">Job Postings</div>
                <div className="comparefree-date">01</div>
                <div className="comparesilver-date">10</div>
                <div className="comparegold-date">25</div>
                <div className="compareplatinum-date">50</div>
                <div className="comparediamond-date">Unlimited</div>
              </div>
            </div>
          </Row>

          <Row>
            <div className="compareplans-interviews">
              <div className="d-flex flex">
                <div className="compare-interviews">Interview Invitations</div>
                <div className="comparefree-date">01</div>
                <div className="comparesilver-date">10</div>
                <div className="comparegold-date">25</div>
                <div className="compareplatinum-date">50</div>
                <div className="comparediamond-date">Unlimited</div>
              </div>
            </div>
          </Row>

          <Row>
            <div className="compareplans-resumefilter">
              <div className="d-flex flex">
                <div className="compare-resumefilter">Resume Filtering</div>
                <div className="resumefree-date">0</div>
                <div className="resumesilver-date">50</div>
                <div className="resumegold-date">100</div>
                <div className="resumeplatinum-date">300</div>
                <div className="resumediamond-date">Unlimited</div>
              </div>
            </div>
          </Row>
          <p className="resume-para">for each Job posting</p>

          <Row>
            <div className="compareplans-talent">
              <div className="d-flex flex">
                <div className="compare-talent">Talent Pool</div>
                <div className="talentfree-date">Unlimited</div>
                <div className="talentsilver-date">Unlimited</div>
                <div className="talentgold-date">Unlimited</div>
                <div className="talentplatinum-date">Unlimited</div>
                <div className="talentdiamond-date">Unlimited</div>
              </div>
            </div>
          </Row>
          <p className="talent-para">
            Users can view all the students and jobseekers across all the
            platforms.
          </p>

          <Row>
            <div className="compareplans-price">
              <div className="d-flex flex">
                <div className="free-price">FREE</div>
                <div className="silver-price">25847/-</div>
                <div className="gold-price">25847/-</div>
                <div className="platinum-price">25847/-</div>
                <div className="diamond-price">25847/-</div>
              </div>
            </div>
          </Row>

          <Row>
            <div className="compareplans-buttons">
              <div className="d-flex flex">
                <div className="silver-button">
                  <svg
                    width="157"
                    height="54"
                    viewBox="0 0 157 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1068_361)">
                      <rect
                        x="4.5"
                        y="0.5"
                        width="148"
                        height="45"
                        rx="19.5"
                        fill="white"
                        stroke="url(#paint0_linear_1068_361)"
                      />
                      <path
                        d="M48.0469 24.0146H44.8037L44.7861 22.6523H47.7305C48.2168 22.6523 48.6416 22.5703 49.0049 22.4062C49.3682 22.2422 49.6494 22.0078 49.8486 21.7031C50.0537 21.3926 50.1562 21.0234 50.1562 20.5957C50.1562 20.127 50.0654 19.7461 49.8838 19.4531C49.708 19.1543 49.4355 18.9375 49.0664 18.8027C48.7031 18.6621 48.2402 18.5918 47.6777 18.5918H45.1816V30H43.4854V17.2031H47.6777C48.334 17.2031 48.9199 17.2705 49.4355 17.4053C49.9512 17.5342 50.3877 17.7393 50.7451 18.0205C51.1084 18.2959 51.3838 18.6475 51.5713 19.0752C51.7588 19.5029 51.8525 20.0156 51.8525 20.6133C51.8525 21.1406 51.7178 21.6182 51.4482 22.0459C51.1787 22.4678 50.8037 22.8135 50.3232 23.083C49.8486 23.3525 49.292 23.5254 48.6533 23.6016L48.0469 24.0146ZM47.9678 30H44.1357L45.0938 28.6201H47.9678C48.5068 28.6201 48.9639 28.5264 49.3389 28.3389C49.7197 28.1514 50.0098 27.8877 50.209 27.5479C50.4082 27.2021 50.5078 26.7949 50.5078 26.3262C50.5078 25.8516 50.4229 25.4414 50.2529 25.0957C50.083 24.75 49.8164 24.4834 49.4531 24.2959C49.0898 24.1084 48.6211 24.0146 48.0469 24.0146H45.6299L45.6475 22.6523H48.9521L49.3125 23.1445C49.9277 23.1973 50.4492 23.373 50.877 23.6719C51.3047 23.9648 51.6299 24.3398 51.8525 24.7969C52.0811 25.2539 52.1953 25.7578 52.1953 26.3086C52.1953 27.1055 52.0195 27.7793 51.668 28.3301C51.3223 28.875 50.833 29.291 50.2002 29.5781C49.5674 29.8594 48.8232 30 47.9678 30ZM60.2725 27.8027V20.4902H61.9072V30H60.3516L60.2725 27.8027ZM60.5801 25.7988L61.2568 25.7812C61.2568 26.4141 61.1895 27 61.0547 27.5391C60.9258 28.0723 60.7148 28.5352 60.4219 28.9277C60.1289 29.3203 59.7451 29.6279 59.2705 29.8506C58.7959 30.0674 58.2188 30.1758 57.5391 30.1758C57.0762 30.1758 56.6514 30.1084 56.2646 29.9736C55.8838 29.8389 55.5557 29.6309 55.2803 29.3496C55.0049 29.0684 54.791 28.7021 54.6387 28.251C54.4922 27.7998 54.4189 27.2578 54.4189 26.625V20.4902H56.0449V26.6426C56.0449 27.0703 56.0918 27.4248 56.1855 27.7061C56.2852 27.9814 56.417 28.2012 56.5811 28.3652C56.751 28.5234 56.9385 28.6348 57.1436 28.6992C57.3545 28.7637 57.5713 28.7959 57.7939 28.7959C58.4854 28.7959 59.0332 28.6641 59.4375 28.4004C59.8418 28.1309 60.1318 27.7705 60.3076 27.3193C60.4893 26.8623 60.5801 26.3555 60.5801 25.7988ZM67.0576 29.0156L69.7031 20.4902H71.4434L67.6289 31.4678C67.541 31.7021 67.4238 31.9541 67.2773 32.2236C67.1367 32.499 66.9551 32.7598 66.7324 33.0059C66.5098 33.252 66.2402 33.4512 65.9238 33.6035C65.6133 33.7617 65.2412 33.8408 64.8076 33.8408C64.6787 33.8408 64.5146 33.8232 64.3154 33.7881C64.1162 33.7529 63.9756 33.7236 63.8936 33.7002L63.8848 32.3818C63.9316 32.3877 64.0049 32.3936 64.1045 32.3994C64.21 32.4111 64.2832 32.417 64.3242 32.417C64.6934 32.417 65.0068 32.3672 65.2646 32.2676C65.5225 32.1738 65.7393 32.0127 65.915 31.7842C66.0967 31.5615 66.252 31.2539 66.3809 30.8613L67.0576 29.0156ZM65.1152 20.4902L67.585 27.873L68.0068 29.5869L66.8379 30.1846L63.3398 20.4902H65.1152ZM87.4658 17.2031V30H85.7607L79.3184 20.1299V30H77.6221V17.2031H79.3184L85.7871 27.0996V17.2031H87.4658ZM89.7949 25.3506V25.1484C89.7949 24.4629 89.8945 23.8271 90.0938 23.2412C90.293 22.6494 90.5801 22.1367 90.9551 21.7031C91.3301 21.2637 91.7842 20.9238 92.3174 20.6836C92.8506 20.4375 93.4482 20.3145 94.1104 20.3145C94.7783 20.3145 95.3789 20.4375 95.9121 20.6836C96.4512 20.9238 96.9082 21.2637 97.2832 21.7031C97.6641 22.1367 97.9541 22.6494 98.1533 23.2412C98.3525 23.8271 98.4521 24.4629 98.4521 25.1484V25.3506C98.4521 26.0361 98.3525 26.6719 98.1533 27.2578C97.9541 27.8438 97.6641 28.3564 97.2832 28.7959C96.9082 29.2295 96.4541 29.5693 95.9209 29.8154C95.3936 30.0557 94.7959 30.1758 94.1279 30.1758C93.46 30.1758 92.8594 30.0557 92.3262 29.8154C91.793 29.5693 91.3359 29.2295 90.9551 28.7959C90.5801 28.3564 90.293 27.8438 90.0938 27.2578C89.8945 26.6719 89.7949 26.0361 89.7949 25.3506ZM91.4209 25.1484V25.3506C91.4209 25.8252 91.4766 26.2734 91.5879 26.6953C91.6992 27.1113 91.8662 27.4805 92.0889 27.8027C92.3174 28.125 92.6016 28.3799 92.9414 28.5674C93.2812 28.749 93.6768 28.8398 94.1279 28.8398C94.5732 28.8398 94.9629 28.749 95.2969 28.5674C95.6367 28.3799 95.918 28.125 96.1406 27.8027C96.3633 27.4805 96.5303 27.1113 96.6416 26.6953C96.7588 26.2734 96.8174 25.8252 96.8174 25.3506V25.1484C96.8174 24.6797 96.7588 24.2373 96.6416 23.8213C96.5303 23.3994 96.3604 23.0273 96.1318 22.7051C95.9092 22.377 95.6279 22.1191 95.2881 21.9316C94.9541 21.7441 94.5615 21.6504 94.1104 21.6504C93.665 21.6504 93.2725 21.7441 92.9326 21.9316C92.5986 22.1191 92.3174 22.377 92.0889 22.7051C91.8662 23.0273 91.6992 23.3994 91.5879 23.8213C91.4766 24.2373 91.4209 24.6797 91.4209 25.1484ZM102.899 28.3125L105.343 20.4902H106.415L106.204 22.0459L103.717 30H102.671L102.899 28.3125ZM101.256 20.4902L103.339 28.4004L103.488 30H102.39L99.6299 20.4902H101.256ZM108.753 28.3389L110.739 20.4902H112.356L109.597 30H108.507L108.753 28.3389ZM106.652 20.4902L109.043 28.1807L109.315 30H108.278L105.721 22.0283L105.51 20.4902H106.652Z"
                        fill="#4343E8"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1068_361"
                        x="0"
                        y="0"
                        width="157"
                        height="54"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.682353 0 0 0 0 0.701961 0 0 0 0 0.976471 0 0 0 0.3 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1068_361"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1068_361"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1068_361"
                        x1="4"
                        y1="23"
                        x2="153"
                        y2="23"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#5656EC" />
                        <stop offset="1" stop-color="#D0A3EC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="gold-button">
                  <svg
                    width="157"
                    height="54"
                    viewBox="0 0 157 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1068_361)">
                      <rect
                        x="4.5"
                        y="0.5"
                        width="148"
                        height="45"
                        rx="19.5"
                        fill="white"
                        stroke="url(#paint0_linear_1068_361)"
                      />
                      <path
                        d="M48.0469 24.0146H44.8037L44.7861 22.6523H47.7305C48.2168 22.6523 48.6416 22.5703 49.0049 22.4062C49.3682 22.2422 49.6494 22.0078 49.8486 21.7031C50.0537 21.3926 50.1562 21.0234 50.1562 20.5957C50.1562 20.127 50.0654 19.7461 49.8838 19.4531C49.708 19.1543 49.4355 18.9375 49.0664 18.8027C48.7031 18.6621 48.2402 18.5918 47.6777 18.5918H45.1816V30H43.4854V17.2031H47.6777C48.334 17.2031 48.9199 17.2705 49.4355 17.4053C49.9512 17.5342 50.3877 17.7393 50.7451 18.0205C51.1084 18.2959 51.3838 18.6475 51.5713 19.0752C51.7588 19.5029 51.8525 20.0156 51.8525 20.6133C51.8525 21.1406 51.7178 21.6182 51.4482 22.0459C51.1787 22.4678 50.8037 22.8135 50.3232 23.083C49.8486 23.3525 49.292 23.5254 48.6533 23.6016L48.0469 24.0146ZM47.9678 30H44.1357L45.0938 28.6201H47.9678C48.5068 28.6201 48.9639 28.5264 49.3389 28.3389C49.7197 28.1514 50.0098 27.8877 50.209 27.5479C50.4082 27.2021 50.5078 26.7949 50.5078 26.3262C50.5078 25.8516 50.4229 25.4414 50.2529 25.0957C50.083 24.75 49.8164 24.4834 49.4531 24.2959C49.0898 24.1084 48.6211 24.0146 48.0469 24.0146H45.6299L45.6475 22.6523H48.9521L49.3125 23.1445C49.9277 23.1973 50.4492 23.373 50.877 23.6719C51.3047 23.9648 51.6299 24.3398 51.8525 24.7969C52.0811 25.2539 52.1953 25.7578 52.1953 26.3086C52.1953 27.1055 52.0195 27.7793 51.668 28.3301C51.3223 28.875 50.833 29.291 50.2002 29.5781C49.5674 29.8594 48.8232 30 47.9678 30ZM60.2725 27.8027V20.4902H61.9072V30H60.3516L60.2725 27.8027ZM60.5801 25.7988L61.2568 25.7812C61.2568 26.4141 61.1895 27 61.0547 27.5391C60.9258 28.0723 60.7148 28.5352 60.4219 28.9277C60.1289 29.3203 59.7451 29.6279 59.2705 29.8506C58.7959 30.0674 58.2188 30.1758 57.5391 30.1758C57.0762 30.1758 56.6514 30.1084 56.2646 29.9736C55.8838 29.8389 55.5557 29.6309 55.2803 29.3496C55.0049 29.0684 54.791 28.7021 54.6387 28.251C54.4922 27.7998 54.4189 27.2578 54.4189 26.625V20.4902H56.0449V26.6426C56.0449 27.0703 56.0918 27.4248 56.1855 27.7061C56.2852 27.9814 56.417 28.2012 56.5811 28.3652C56.751 28.5234 56.9385 28.6348 57.1436 28.6992C57.3545 28.7637 57.5713 28.7959 57.7939 28.7959C58.4854 28.7959 59.0332 28.6641 59.4375 28.4004C59.8418 28.1309 60.1318 27.7705 60.3076 27.3193C60.4893 26.8623 60.5801 26.3555 60.5801 25.7988ZM67.0576 29.0156L69.7031 20.4902H71.4434L67.6289 31.4678C67.541 31.7021 67.4238 31.9541 67.2773 32.2236C67.1367 32.499 66.9551 32.7598 66.7324 33.0059C66.5098 33.252 66.2402 33.4512 65.9238 33.6035C65.6133 33.7617 65.2412 33.8408 64.8076 33.8408C64.6787 33.8408 64.5146 33.8232 64.3154 33.7881C64.1162 33.7529 63.9756 33.7236 63.8936 33.7002L63.8848 32.3818C63.9316 32.3877 64.0049 32.3936 64.1045 32.3994C64.21 32.4111 64.2832 32.417 64.3242 32.417C64.6934 32.417 65.0068 32.3672 65.2646 32.2676C65.5225 32.1738 65.7393 32.0127 65.915 31.7842C66.0967 31.5615 66.252 31.2539 66.3809 30.8613L67.0576 29.0156ZM65.1152 20.4902L67.585 27.873L68.0068 29.5869L66.8379 30.1846L63.3398 20.4902H65.1152ZM87.4658 17.2031V30H85.7607L79.3184 20.1299V30H77.6221V17.2031H79.3184L85.7871 27.0996V17.2031H87.4658ZM89.7949 25.3506V25.1484C89.7949 24.4629 89.8945 23.8271 90.0938 23.2412C90.293 22.6494 90.5801 22.1367 90.9551 21.7031C91.3301 21.2637 91.7842 20.9238 92.3174 20.6836C92.8506 20.4375 93.4482 20.3145 94.1104 20.3145C94.7783 20.3145 95.3789 20.4375 95.9121 20.6836C96.4512 20.9238 96.9082 21.2637 97.2832 21.7031C97.6641 22.1367 97.9541 22.6494 98.1533 23.2412C98.3525 23.8271 98.4521 24.4629 98.4521 25.1484V25.3506C98.4521 26.0361 98.3525 26.6719 98.1533 27.2578C97.9541 27.8438 97.6641 28.3564 97.2832 28.7959C96.9082 29.2295 96.4541 29.5693 95.9209 29.8154C95.3936 30.0557 94.7959 30.1758 94.1279 30.1758C93.46 30.1758 92.8594 30.0557 92.3262 29.8154C91.793 29.5693 91.3359 29.2295 90.9551 28.7959C90.5801 28.3564 90.293 27.8438 90.0938 27.2578C89.8945 26.6719 89.7949 26.0361 89.7949 25.3506ZM91.4209 25.1484V25.3506C91.4209 25.8252 91.4766 26.2734 91.5879 26.6953C91.6992 27.1113 91.8662 27.4805 92.0889 27.8027C92.3174 28.125 92.6016 28.3799 92.9414 28.5674C93.2812 28.749 93.6768 28.8398 94.1279 28.8398C94.5732 28.8398 94.9629 28.749 95.2969 28.5674C95.6367 28.3799 95.918 28.125 96.1406 27.8027C96.3633 27.4805 96.5303 27.1113 96.6416 26.6953C96.7588 26.2734 96.8174 25.8252 96.8174 25.3506V25.1484C96.8174 24.6797 96.7588 24.2373 96.6416 23.8213C96.5303 23.3994 96.3604 23.0273 96.1318 22.7051C95.9092 22.377 95.6279 22.1191 95.2881 21.9316C94.9541 21.7441 94.5615 21.6504 94.1104 21.6504C93.665 21.6504 93.2725 21.7441 92.9326 21.9316C92.5986 22.1191 92.3174 22.377 92.0889 22.7051C91.8662 23.0273 91.6992 23.3994 91.5879 23.8213C91.4766 24.2373 91.4209 24.6797 91.4209 25.1484ZM102.899 28.3125L105.343 20.4902H106.415L106.204 22.0459L103.717 30H102.671L102.899 28.3125ZM101.256 20.4902L103.339 28.4004L103.488 30H102.39L99.6299 20.4902H101.256ZM108.753 28.3389L110.739 20.4902H112.356L109.597 30H108.507L108.753 28.3389ZM106.652 20.4902L109.043 28.1807L109.315 30H108.278L105.721 22.0283L105.51 20.4902H106.652Z"
                        fill="#4343E8"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1068_361"
                        x="0"
                        y="0"
                        width="157"
                        height="54"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.682353 0 0 0 0 0.701961 0 0 0 0 0.976471 0 0 0 0.3 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1068_361"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1068_361"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1068_361"
                        x1="4"
                        y1="23"
                        x2="153"
                        y2="23"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#5656EC" />
                        <stop offset="1" stop-color="#D0A3EC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="platinum-button">
                  <svg
                    width="157"
                    height="54"
                    viewBox="0 0 157 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1068_361)">
                      <rect
                        x="4.5"
                        y="0.5"
                        width="148"
                        height="45"
                        rx="19.5"
                        fill="white"
                        stroke="url(#paint0_linear_1068_361)"
                      />
                      <path
                        d="M48.0469 24.0146H44.8037L44.7861 22.6523H47.7305C48.2168 22.6523 48.6416 22.5703 49.0049 22.4062C49.3682 22.2422 49.6494 22.0078 49.8486 21.7031C50.0537 21.3926 50.1562 21.0234 50.1562 20.5957C50.1562 20.127 50.0654 19.7461 49.8838 19.4531C49.708 19.1543 49.4355 18.9375 49.0664 18.8027C48.7031 18.6621 48.2402 18.5918 47.6777 18.5918H45.1816V30H43.4854V17.2031H47.6777C48.334 17.2031 48.9199 17.2705 49.4355 17.4053C49.9512 17.5342 50.3877 17.7393 50.7451 18.0205C51.1084 18.2959 51.3838 18.6475 51.5713 19.0752C51.7588 19.5029 51.8525 20.0156 51.8525 20.6133C51.8525 21.1406 51.7178 21.6182 51.4482 22.0459C51.1787 22.4678 50.8037 22.8135 50.3232 23.083C49.8486 23.3525 49.292 23.5254 48.6533 23.6016L48.0469 24.0146ZM47.9678 30H44.1357L45.0938 28.6201H47.9678C48.5068 28.6201 48.9639 28.5264 49.3389 28.3389C49.7197 28.1514 50.0098 27.8877 50.209 27.5479C50.4082 27.2021 50.5078 26.7949 50.5078 26.3262C50.5078 25.8516 50.4229 25.4414 50.2529 25.0957C50.083 24.75 49.8164 24.4834 49.4531 24.2959C49.0898 24.1084 48.6211 24.0146 48.0469 24.0146H45.6299L45.6475 22.6523H48.9521L49.3125 23.1445C49.9277 23.1973 50.4492 23.373 50.877 23.6719C51.3047 23.9648 51.6299 24.3398 51.8525 24.7969C52.0811 25.2539 52.1953 25.7578 52.1953 26.3086C52.1953 27.1055 52.0195 27.7793 51.668 28.3301C51.3223 28.875 50.833 29.291 50.2002 29.5781C49.5674 29.8594 48.8232 30 47.9678 30ZM60.2725 27.8027V20.4902H61.9072V30H60.3516L60.2725 27.8027ZM60.5801 25.7988L61.2568 25.7812C61.2568 26.4141 61.1895 27 61.0547 27.5391C60.9258 28.0723 60.7148 28.5352 60.4219 28.9277C60.1289 29.3203 59.7451 29.6279 59.2705 29.8506C58.7959 30.0674 58.2188 30.1758 57.5391 30.1758C57.0762 30.1758 56.6514 30.1084 56.2646 29.9736C55.8838 29.8389 55.5557 29.6309 55.2803 29.3496C55.0049 29.0684 54.791 28.7021 54.6387 28.251C54.4922 27.7998 54.4189 27.2578 54.4189 26.625V20.4902H56.0449V26.6426C56.0449 27.0703 56.0918 27.4248 56.1855 27.7061C56.2852 27.9814 56.417 28.2012 56.5811 28.3652C56.751 28.5234 56.9385 28.6348 57.1436 28.6992C57.3545 28.7637 57.5713 28.7959 57.7939 28.7959C58.4854 28.7959 59.0332 28.6641 59.4375 28.4004C59.8418 28.1309 60.1318 27.7705 60.3076 27.3193C60.4893 26.8623 60.5801 26.3555 60.5801 25.7988ZM67.0576 29.0156L69.7031 20.4902H71.4434L67.6289 31.4678C67.541 31.7021 67.4238 31.9541 67.2773 32.2236C67.1367 32.499 66.9551 32.7598 66.7324 33.0059C66.5098 33.252 66.2402 33.4512 65.9238 33.6035C65.6133 33.7617 65.2412 33.8408 64.8076 33.8408C64.6787 33.8408 64.5146 33.8232 64.3154 33.7881C64.1162 33.7529 63.9756 33.7236 63.8936 33.7002L63.8848 32.3818C63.9316 32.3877 64.0049 32.3936 64.1045 32.3994C64.21 32.4111 64.2832 32.417 64.3242 32.417C64.6934 32.417 65.0068 32.3672 65.2646 32.2676C65.5225 32.1738 65.7393 32.0127 65.915 31.7842C66.0967 31.5615 66.252 31.2539 66.3809 30.8613L67.0576 29.0156ZM65.1152 20.4902L67.585 27.873L68.0068 29.5869L66.8379 30.1846L63.3398 20.4902H65.1152ZM87.4658 17.2031V30H85.7607L79.3184 20.1299V30H77.6221V17.2031H79.3184L85.7871 27.0996V17.2031H87.4658ZM89.7949 25.3506V25.1484C89.7949 24.4629 89.8945 23.8271 90.0938 23.2412C90.293 22.6494 90.5801 22.1367 90.9551 21.7031C91.3301 21.2637 91.7842 20.9238 92.3174 20.6836C92.8506 20.4375 93.4482 20.3145 94.1104 20.3145C94.7783 20.3145 95.3789 20.4375 95.9121 20.6836C96.4512 20.9238 96.9082 21.2637 97.2832 21.7031C97.6641 22.1367 97.9541 22.6494 98.1533 23.2412C98.3525 23.8271 98.4521 24.4629 98.4521 25.1484V25.3506C98.4521 26.0361 98.3525 26.6719 98.1533 27.2578C97.9541 27.8438 97.6641 28.3564 97.2832 28.7959C96.9082 29.2295 96.4541 29.5693 95.9209 29.8154C95.3936 30.0557 94.7959 30.1758 94.1279 30.1758C93.46 30.1758 92.8594 30.0557 92.3262 29.8154C91.793 29.5693 91.3359 29.2295 90.9551 28.7959C90.5801 28.3564 90.293 27.8438 90.0938 27.2578C89.8945 26.6719 89.7949 26.0361 89.7949 25.3506ZM91.4209 25.1484V25.3506C91.4209 25.8252 91.4766 26.2734 91.5879 26.6953C91.6992 27.1113 91.8662 27.4805 92.0889 27.8027C92.3174 28.125 92.6016 28.3799 92.9414 28.5674C93.2812 28.749 93.6768 28.8398 94.1279 28.8398C94.5732 28.8398 94.9629 28.749 95.2969 28.5674C95.6367 28.3799 95.918 28.125 96.1406 27.8027C96.3633 27.4805 96.5303 27.1113 96.6416 26.6953C96.7588 26.2734 96.8174 25.8252 96.8174 25.3506V25.1484C96.8174 24.6797 96.7588 24.2373 96.6416 23.8213C96.5303 23.3994 96.3604 23.0273 96.1318 22.7051C95.9092 22.377 95.6279 22.1191 95.2881 21.9316C94.9541 21.7441 94.5615 21.6504 94.1104 21.6504C93.665 21.6504 93.2725 21.7441 92.9326 21.9316C92.5986 22.1191 92.3174 22.377 92.0889 22.7051C91.8662 23.0273 91.6992 23.3994 91.5879 23.8213C91.4766 24.2373 91.4209 24.6797 91.4209 25.1484ZM102.899 28.3125L105.343 20.4902H106.415L106.204 22.0459L103.717 30H102.671L102.899 28.3125ZM101.256 20.4902L103.339 28.4004L103.488 30H102.39L99.6299 20.4902H101.256ZM108.753 28.3389L110.739 20.4902H112.356L109.597 30H108.507L108.753 28.3389ZM106.652 20.4902L109.043 28.1807L109.315 30H108.278L105.721 22.0283L105.51 20.4902H106.652Z"
                        fill="#4343E8"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1068_361"
                        x="0"
                        y="0"
                        width="157"
                        height="54"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.682353 0 0 0 0 0.701961 0 0 0 0 0.976471 0 0 0 0.3 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1068_361"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1068_361"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1068_361"
                        x1="4"
                        y1="23"
                        x2="153"
                        y2="23"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#5656EC" />
                        <stop offset="1" stop-color="#D0A3EC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="diamond-button">
                  <svg
                    width="157"
                    height="54"
                    viewBox="0 0 157 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1068_361)">
                      <rect
                        x="4.5"
                        y="0.5"
                        width="148"
                        height="45"
                        rx="19.5"
                        fill="white"
                        stroke="url(#paint0_linear_1068_361)"
                      />
                      <path
                        d="M48.0469 24.0146H44.8037L44.7861 22.6523H47.7305C48.2168 22.6523 48.6416 22.5703 49.0049 22.4062C49.3682 22.2422 49.6494 22.0078 49.8486 21.7031C50.0537 21.3926 50.1562 21.0234 50.1562 20.5957C50.1562 20.127 50.0654 19.7461 49.8838 19.4531C49.708 19.1543 49.4355 18.9375 49.0664 18.8027C48.7031 18.6621 48.2402 18.5918 47.6777 18.5918H45.1816V30H43.4854V17.2031H47.6777C48.334 17.2031 48.9199 17.2705 49.4355 17.4053C49.9512 17.5342 50.3877 17.7393 50.7451 18.0205C51.1084 18.2959 51.3838 18.6475 51.5713 19.0752C51.7588 19.5029 51.8525 20.0156 51.8525 20.6133C51.8525 21.1406 51.7178 21.6182 51.4482 22.0459C51.1787 22.4678 50.8037 22.8135 50.3232 23.083C49.8486 23.3525 49.292 23.5254 48.6533 23.6016L48.0469 24.0146ZM47.9678 30H44.1357L45.0938 28.6201H47.9678C48.5068 28.6201 48.9639 28.5264 49.3389 28.3389C49.7197 28.1514 50.0098 27.8877 50.209 27.5479C50.4082 27.2021 50.5078 26.7949 50.5078 26.3262C50.5078 25.8516 50.4229 25.4414 50.2529 25.0957C50.083 24.75 49.8164 24.4834 49.4531 24.2959C49.0898 24.1084 48.6211 24.0146 48.0469 24.0146H45.6299L45.6475 22.6523H48.9521L49.3125 23.1445C49.9277 23.1973 50.4492 23.373 50.877 23.6719C51.3047 23.9648 51.6299 24.3398 51.8525 24.7969C52.0811 25.2539 52.1953 25.7578 52.1953 26.3086C52.1953 27.1055 52.0195 27.7793 51.668 28.3301C51.3223 28.875 50.833 29.291 50.2002 29.5781C49.5674 29.8594 48.8232 30 47.9678 30ZM60.2725 27.8027V20.4902H61.9072V30H60.3516L60.2725 27.8027ZM60.5801 25.7988L61.2568 25.7812C61.2568 26.4141 61.1895 27 61.0547 27.5391C60.9258 28.0723 60.7148 28.5352 60.4219 28.9277C60.1289 29.3203 59.7451 29.6279 59.2705 29.8506C58.7959 30.0674 58.2188 30.1758 57.5391 30.1758C57.0762 30.1758 56.6514 30.1084 56.2646 29.9736C55.8838 29.8389 55.5557 29.6309 55.2803 29.3496C55.0049 29.0684 54.791 28.7021 54.6387 28.251C54.4922 27.7998 54.4189 27.2578 54.4189 26.625V20.4902H56.0449V26.6426C56.0449 27.0703 56.0918 27.4248 56.1855 27.7061C56.2852 27.9814 56.417 28.2012 56.5811 28.3652C56.751 28.5234 56.9385 28.6348 57.1436 28.6992C57.3545 28.7637 57.5713 28.7959 57.7939 28.7959C58.4854 28.7959 59.0332 28.6641 59.4375 28.4004C59.8418 28.1309 60.1318 27.7705 60.3076 27.3193C60.4893 26.8623 60.5801 26.3555 60.5801 25.7988ZM67.0576 29.0156L69.7031 20.4902H71.4434L67.6289 31.4678C67.541 31.7021 67.4238 31.9541 67.2773 32.2236C67.1367 32.499 66.9551 32.7598 66.7324 33.0059C66.5098 33.252 66.2402 33.4512 65.9238 33.6035C65.6133 33.7617 65.2412 33.8408 64.8076 33.8408C64.6787 33.8408 64.5146 33.8232 64.3154 33.7881C64.1162 33.7529 63.9756 33.7236 63.8936 33.7002L63.8848 32.3818C63.9316 32.3877 64.0049 32.3936 64.1045 32.3994C64.21 32.4111 64.2832 32.417 64.3242 32.417C64.6934 32.417 65.0068 32.3672 65.2646 32.2676C65.5225 32.1738 65.7393 32.0127 65.915 31.7842C66.0967 31.5615 66.252 31.2539 66.3809 30.8613L67.0576 29.0156ZM65.1152 20.4902L67.585 27.873L68.0068 29.5869L66.8379 30.1846L63.3398 20.4902H65.1152ZM87.4658 17.2031V30H85.7607L79.3184 20.1299V30H77.6221V17.2031H79.3184L85.7871 27.0996V17.2031H87.4658ZM89.7949 25.3506V25.1484C89.7949 24.4629 89.8945 23.8271 90.0938 23.2412C90.293 22.6494 90.5801 22.1367 90.9551 21.7031C91.3301 21.2637 91.7842 20.9238 92.3174 20.6836C92.8506 20.4375 93.4482 20.3145 94.1104 20.3145C94.7783 20.3145 95.3789 20.4375 95.9121 20.6836C96.4512 20.9238 96.9082 21.2637 97.2832 21.7031C97.6641 22.1367 97.9541 22.6494 98.1533 23.2412C98.3525 23.8271 98.4521 24.4629 98.4521 25.1484V25.3506C98.4521 26.0361 98.3525 26.6719 98.1533 27.2578C97.9541 27.8438 97.6641 28.3564 97.2832 28.7959C96.9082 29.2295 96.4541 29.5693 95.9209 29.8154C95.3936 30.0557 94.7959 30.1758 94.1279 30.1758C93.46 30.1758 92.8594 30.0557 92.3262 29.8154C91.793 29.5693 91.3359 29.2295 90.9551 28.7959C90.5801 28.3564 90.293 27.8438 90.0938 27.2578C89.8945 26.6719 89.7949 26.0361 89.7949 25.3506ZM91.4209 25.1484V25.3506C91.4209 25.8252 91.4766 26.2734 91.5879 26.6953C91.6992 27.1113 91.8662 27.4805 92.0889 27.8027C92.3174 28.125 92.6016 28.3799 92.9414 28.5674C93.2812 28.749 93.6768 28.8398 94.1279 28.8398C94.5732 28.8398 94.9629 28.749 95.2969 28.5674C95.6367 28.3799 95.918 28.125 96.1406 27.8027C96.3633 27.4805 96.5303 27.1113 96.6416 26.6953C96.7588 26.2734 96.8174 25.8252 96.8174 25.3506V25.1484C96.8174 24.6797 96.7588 24.2373 96.6416 23.8213C96.5303 23.3994 96.3604 23.0273 96.1318 22.7051C95.9092 22.377 95.6279 22.1191 95.2881 21.9316C94.9541 21.7441 94.5615 21.6504 94.1104 21.6504C93.665 21.6504 93.2725 21.7441 92.9326 21.9316C92.5986 22.1191 92.3174 22.377 92.0889 22.7051C91.8662 23.0273 91.6992 23.3994 91.5879 23.8213C91.4766 24.2373 91.4209 24.6797 91.4209 25.1484ZM102.899 28.3125L105.343 20.4902H106.415L106.204 22.0459L103.717 30H102.671L102.899 28.3125ZM101.256 20.4902L103.339 28.4004L103.488 30H102.39L99.6299 20.4902H101.256ZM108.753 28.3389L110.739 20.4902H112.356L109.597 30H108.507L108.753 28.3389ZM106.652 20.4902L109.043 28.1807L109.315 30H108.278L105.721 22.0283L105.51 20.4902H106.652Z"
                        fill="#4343E8"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1068_361"
                        x="0"
                        y="0"
                        width="157"
                        height="54"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.682353 0 0 0 0 0.701961 0 0 0 0 0.976471 0 0 0 0.3 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1068_361"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1068_361"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1068_361"
                        x1="4"
                        y1="23"
                        x2="153"
                        y2="23"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#5656EC" />
                        <stop offset="1" stop-color="#D0A3EC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </Row>
        </motion.div>
      </div>
    </Container>
  );
}

export default App;
