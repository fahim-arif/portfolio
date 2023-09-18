import React, { useState } from "react";
import Image from "next/image";
import { ContactUsModal } from "@/common/elements/Modals/ContactUsModal";

interface IProps {
  title: string;
  description: string;
  btnText: string;
}

const ClientSection = ({ title, description, btnText }: IProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="px-4 md:px-12 max-w-7xl mx-auto max-h-fit py-8 my-20">
      {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
      <div className="flex h-full flex-col-reverse md:flex-row">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 min-h-max mt-8 md:mt-0">
          <div className="bg-gray-50 flex flex-col justify-center items-center h-40">
            <svg
              viewBox="0 0 25 33"
              focusable="false"
              className="chakra-icon css-1l9125y"
              style={{
                height: "50px",
              }}
            >
              <path
                d="M23.378 15.25a2.493 2.493 0 01-2.05 1.014 2.534 2.534 0 01-1.08-.246c-1.14-.583-1.518-1.989-1.565-3.169a12.39 12.39 0 00-.238-1.916 16.672 16.672 0 00-1.518-4.475 11.936 11.936 0 00-3.667-4.363A11.273 11.273 0 0010.661.77 12.767 12.767 0 009.09.285 18.87 18.87 0 008.248.12c-.146 0-.802 0-.889-.119 0 0 3.037 3.7 2.44 7.426l.292.663A3.846 3.846 0 017 10.973c-.095.006-.19.006-.285 0a2.392 2.392 0 01-1.989-1.021c-.362.464-.754.905-1.173 1.32a12.16 12.16 0 1020.765 8.618 12 12 0 00-.941-4.64z"
                fill="url(#navbar-logo_paint0_linear_1:4)"
              ></path>
              <path
                d="M23.378 15.25a2.493 2.493 0 01-2.05 1.014 2.534 2.534 0 01-1.08-.246c-1.14-.583-1.518-1.989-1.565-3.169a12.39 12.39 0 00-.238-1.916 16.672 16.672 0 00-1.518-4.475 11.936 11.936 0 00-3.667-4.363A11.273 11.273 0 0010.661.77 12.767 12.767 0 009.09.285 18.87 18.87 0 008.248.12c-.146 0-.802 0-.889-.119 0 0 3.037 3.7 2.44 7.426l.292.663A3.846 3.846 0 017 10.973c-.095.006-.19.006-.285 0a2.392 2.392 0 01-1.989-1.021c-.362.464-.754.905-1.173 1.32a12.16 12.16 0 1020.765 8.618 12 12 0 00-.941-4.64z"
                fill="url(#navbar-logo_paint1_radial_1:4)"
                fillOpacity="0.3"
              ></path>
              <path
                d="M23.378 15.25a2.493 2.493 0 01-2.05 1.014 2.534 2.534 0 01-1.08-.246c-1.14-.583-1.518-1.989-1.565-3.169a12.39 12.39 0 00-.238-1.916 16.672 16.672 0 00-1.518-4.475 11.936 11.936 0 00-3.667-4.363A11.273 11.273 0 0010.661.77 12.767 12.767 0 009.09.285 18.87 18.87 0 008.248.12c-.146 0-.802 0-.889-.119 0 0 3.037 3.7 2.44 7.426l.292.663A3.846 3.846 0 017 10.973c-.095.006-.19.006-.285 0a2.392 2.392 0 01-1.989-1.021c-.362.464-.754.905-1.173 1.32a12.16 12.16 0 1020.765 8.618 12 12 0 00-.941-4.64z"
                fill="url(#navbar-logo_paint2_radial_1:4)"
                fillOpacity="0.6"
              ></path>
              <path
                fillOpacity="evenodd"
                clipRule="evenodd"
                d="M7.36 0s2.585 3.315 2.327 6.836a5.145 5.145 0 01-.484 2.386 2.924 2.924 0 01-1.704 1.585 2.46 2.46 0 01-1.558 0 2.48 2.48 0 01-1.128-.796l-.072-.066c-.367.467-.764.91-1.187 1.326A12.12 12.12 0 000 19.891c2.937 1.537 5.61.57 7.545-.777a11.59 11.59 0 004.601-7.067C13.923 4.044 7.36 0 7.36 0z"
                fill="url(#navbar-logo_paint3_linear_1:4)"
              ></path>
              <g opacity="0.4">
                <path
                  opacity="0.4"
                  d="M23.378 15.25a2.493 2.493 0 01-2.05 1.014 2.534 2.534 0 01-1.08-.246 2.81 2.81 0 01-1.326-1.83c.058.473.09.95.093 1.426A12.086 12.086 0 012.102 26.68a12.147 12.147 0 0022.217-6.79 12 12 0 00-.941-4.64z"
                  fill="url(#navbar-logo_paint4_linear_1:4)"
                ></path>
                <path
                  opacity="0.4"
                  d="M23.378 15.25a2.493 2.493 0 01-2.05 1.014 2.534 2.534 0 01-1.08-.246 2.81 2.81 0 01-1.326-1.83c.058.473.09.95.093 1.426A12.086 12.086 0 012.102 26.68a12.147 12.147 0 0022.217-6.79 12 12 0 00-.941-4.64z"
                  fill="url(#navbar-logo_paint5_radial_1:4)"
                  fillOpacity="0.4"
                ></path>
                <path
                  opacity="0.4"
                  d="M23.378 15.25a2.493 2.493 0 01-2.05 1.014 2.534 2.534 0 01-1.08-.246 2.81 2.81 0 01-1.326-1.83c.058.473.09.95.093 1.426A12.086 12.086 0 012.102 26.68a12.147 12.147 0 0022.217-6.79 12 12 0 00-.941-4.64z"
                  fill="url(#navbar-logo_paint6_radial_1:4)"
                  fillOpacity="0.9"
                ></path>
              </g>
              <defs>
                <radialGradient
                  id="navbar-logo_paint1_radial_1:4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(19.89016 -1.65751 1.25884 15.10604 0 26.189)"
                >
                  <stop></stop>
                  <stop offset="1" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="navbar-logo_paint2_radial_1:4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(-11.27115 10.27648 -7.8047 -8.56013 20.553 11.603)"
                >
                  <stop stopColor="#FFC2A8" stopOpacity="0.97"></stop>
                  <stop offset="1" stopColor="#FFC2A8" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="navbar-logo_paint5_radial_1:4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(-18.8 97.1 -2.441) scale(16.4587 20.4888)"
                >
                  <stop></stop>
                  <stop offset="1" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="navbar-logo_paint6_radial_1:4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(-3.6466 10.27659 -12.79286 -4.53949 23.205 16.907)"
                >
                  <stop stopColor="#FFD9C8" stopOpacity="0.97"></stop>
                  <stop offset="1" stopColor="#FFC2A8" stopOpacity="0"></stop>
                </radialGradient>
                <linearGradient
                  id="navbar-logo_paint0_linear_1:4"
                  x1="11.934"
                  y1="2.321"
                  x2="8.288"
                  y2="25.526"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8A00"></stop>
                  <stop offset="1" stopColor="#FC2D00"></stop>
                </linearGradient>
                <linearGradient
                  id="navbar-logo_paint3_linear_1:4"
                  x1="6.226"
                  y1="0"
                  x2="6.226"
                  y2="20.676"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FD550A"></stop>
                  <stop offset="1" stopColor="#CA2501"></stop>
                </linearGradient>
                <linearGradient
                  id="navbar-logo_paint4_linear_1:4"
                  x1="24.531"
                  y1="13.923"
                  x2="18.233"
                  y2="27.183"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff"></stop>
                  <stop offset="1" stopColor="#F30"></stop>
                </linearGradient>
              </defs>
            </svg>
            <p>twoMatches</p>
          </div>
          <div className="bg-gray-50 flex flex-col justify-center items-center h-40">
            <Image
              src="/images/clientLogo/hexaLogo.png"
              height={150}
              width={130}
              alt="twomatches logo"
            />
          </div>
          <div className="bg-gray-50 flex flex-col justify-center items-center h-40">
            <Image
              src="/images/clientLogo/ARROWX.png"
              height={200}
              width={200}
              alt="twomatches logo"
            />
          </div>
          <div className="bg-gray-50 flex flex-col justify-center items-center  h-40">
            <Image
              src="/images/clientLogo/shouttLogo.png"
              height={100}
              width={100}
              alt="twomatches logo"
            />
          </div>
          {/* Second Row */}
          <div className="bg-gray-50 flex flex-col justify-center items-center py-20 h-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                minHeight: "30px",
              }}
              width="408"
              height="94"
              viewBox="0 0 408 94"
              fill="none"
            >
              <path
                d="M44.5 77C61.8971 77 76 62.897 76 45.5C76 28.103 61.8971 14 44.5 14C27.103 14 13 28.103 13 45.5C13 62.897 27.103 77 44.5 77Z"
                fill="white"
              />
              <path
                fillOpacity="evenodd"
                clipRule="evenodd"
                d="M45.5227 86C68.4552 86 87.0454 67.6438 87.0454 45C87.0454 22.3563 68.4552 4 45.5227 4C22.5903 4 4 22.3563 4 45C4 67.6438 22.5903 86 45.5227 86ZM45.5234 38.412H45.2691C42.2024 38.412 39.2612 39.6149 37.0927 41.7561C34.9242 43.8973 33.7059 46.8013 33.7059 49.8293C33.7059 52.8575 34.9242 55.7616 37.0927 57.9028C39.2612 60.044 42.2024 61.2468 45.2691 61.2468H45.5234V70.8831H45.2691C39.7016 70.7551 34.4056 68.4814 30.514 64.5481C26.6222 60.6148 24.4433 55.3341 24.4433 49.8351C24.4433 44.3362 26.6222 39.0555 30.514 35.1222C34.4056 31.1889 39.7016 28.9151 45.2691 28.7871H45.5234V38.412ZM45.7767 51.5882H45.5223V61.2359H45.7767C51.3442 61.1078 56.6401 58.8341 60.5317 54.9006C64.4235 50.9673 66.6023 45.6866 66.6023 40.1879C66.6023 34.6889 64.4235 29.4082 60.5317 25.4749C56.6401 21.5416 51.3442 19.2678 45.7767 19.1397H45.5223V28.7532H45.7767C48.8433 28.7532 51.7846 29.9562 53.953 32.0974C56.1215 34.2384 57.3398 37.1427 57.3398 40.1707C57.3398 43.1987 56.1215 46.1027 53.953 48.2439C51.7846 50.3851 48.8433 51.5882 45.7767 51.5882Z"
                fill="#3152F5"
              />
              <path
                fillOpacity="evenodd"
                clipRule="evenodd"
                d="M110.021 46.6778C110.021 32.2349 119.561 23.1237 132.662 23.1237C146.78 23.1237 154.145 33.2396 154.145 44.9196C154.145 59.3512 144.675 68.4623 131.517 68.4623C117.398 68.4623 110.021 58.3578 110.021 46.6778ZM140.987 46.5523C140.987 35.3746 138.443 26.1378 131.736 26.1378C125.307 26.1378 123.145 35.8086 123.145 45.0451C123.145 56.2115 125.689 65.4482 132.396 65.4482C138.825 65.4482 140.987 55.7775 140.987 46.5523Z"
                fill="black"
              />
              <path
                d="M203.82 40.3993C204.095 39.7831 204.244 39.12 204.26 38.4469C204.26 37.1339 203.103 36.7573 200.64 36.4376V33.9942H211.637V36.4376C209.417 37.1339 208.977 37.5792 208.399 38.9494L195.877 68.0866H192.061L184.556 48.677L175.653 68.0866H171.895L158.551 38.9494C157.904 37.5678 157.522 37.1339 155.302 36.4376V33.9942H174.381V36.4376C172.276 36.7573 171.386 37.2595 171.386 38.39C171.444 39.0826 171.615 39.7614 171.895 40.3993L177.942 55.025L182.706 44.5439L180.544 38.9494C180.342 38.3032 179.961 37.7257 179.444 37.2819C178.927 36.8381 178.295 36.5457 177.619 36.4376V33.9942H196.443V36.4376C193.772 36.7573 192.5 37.0084 192.5 38.5726C192.528 39.1977 192.657 39.8143 192.882 40.3993L198.166 54.397L203.82 40.3993Z"
                fill="black"
              />
              <path
                d="M233.456 40.2049C236.764 40.2049 237.722 41.8376 237.722 44.6007V62.9369C237.722 64.9465 236.891 65.1978 234.347 65.3804V67.835H253.078V65.3804C250.534 65.2206 249.516 64.9465 249.516 62.9369V43.6415C249.516 36.791 246.025 33.3658 239.851 33.3658C234.126 33.3658 230.437 36.6312 228.02 39.6455L228.276 33.3658H226.113L212.828 37.008V38.7664L216.296 40.9014V62.9369C216.296 64.9465 215.267 65.1978 212.735 65.3804V67.835H231.456V65.3804C228.878 65.2206 227.986 64.9465 227.986 62.9369V41.5864C229.675 40.7063 231.548 40.233 233.456 40.2049Z"
                fill="black"
              />
              <path
                fillOpacity="evenodd"
                clipRule="evenodd"
                d="M271.683 60.8017C271.683 64.124 273.395 64.8776 279.06 65.1973V67.8347H254.57V65.1973C258.836 64.752 259.195 64.2497 259.195 60.9843V30.6024C259.195 27.337 258.815 26.8347 254.57 26.3894V23.752H276.54C288.936 23.752 294.659 29.4608 294.659 37.0647C294.659 45.7306 288.622 50.7658 276.031 50.7658H271.683V60.8017ZM271.683 47.5573H273.14C279.245 47.5573 282.495 43.5385 282.495 37.0647C282.495 30.591 278.865 26.7091 273.14 26.7091H271.683V47.5573Z"
                fill="black"
              />
              <path
                d="M316.455 65.4138C312.825 64.9456 311.368 64.6945 311.368 61.9885L311.321 45.4448C314.247 43.2869 317.809 43.1612 321.809 43.1612H323.336V34.4269C322.46 33.6737 321.317 33.2922 320.157 33.3652C316.155 33.3652 313.925 35.6828 311.321 43.0357L311.577 33.3652H309.495L296.197 37.0072V38.7656L299.667 40.9005V62.9364C299.667 64.9456 298.648 65.197 296.105 65.3796V67.8686H316.455V65.4138Z"
                fill="black"
              />
              <path
                fillOpacity="evenodd"
                clipRule="evenodd"
                d="M324.296 51.5761C324.296 41.0263 331.671 33.3081 342.101 33.3081C352.531 33.3081 359.839 39.8958 359.839 50.1945C359.839 60.7441 352.462 68.4624 342.032 68.4624C331.602 68.4624 324.296 61.8631 324.296 51.5761ZM347.42 53.0146C347.42 42.7389 345.963 36.0025 341.824 36.0025C338.008 36.0025 336.805 40.8321 336.805 48.8129C336.805 59.0886 338.333 65.825 342.402 65.825C346.264 65.825 347.42 60.9838 347.42 53.0146Z"
                fill="black"
              />
              <path
                fillOpacity="evenodd"
                clipRule="evenodd"
                d="M361.575 38.7664L365.042 40.9014V76.2499C365.042 78.2592 364.026 78.5105 361.483 78.6931V81.148H381.741V78.6931C377.994 78.3848 376.836 78.2821 376.836 75.9985V67.1386C378.497 68.1446 380.435 68.6082 382.377 68.4632C392.414 68.4632 400.369 61.6811 400.369 48.8137C400.369 38.5153 395.026 33.3658 387.522 33.3658C385.361 33.3847 383.24 33.9549 381.369 35.0213C379.496 36.0875 377.936 37.6136 376.836 39.4515L377.092 33.3658H374.871L361.575 37.008V38.7664ZM380.562 40.1935C385.393 40.1935 388.377 44.0297 388.377 52.3188V52.3302C388.377 59.7401 385.891 65.5059 381.324 65.5059C377.96 65.5059 376.802 62.9941 376.802 58.9182V41.2668C377.917 40.5437 379.227 40.1697 380.562 40.1935Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="bg-gray-50 flex flex-col justify-center items-center h-40">
            <Image
              src="/images/clientLogo/fourthPartyLogo.png"
              height={100}
              width={100}
              alt="FourthParty Logo"
            />
          </div>
          <div className="bg-gray-50 flex flex-col justify-center items-center h-40">
            <Image
              src="/images/clientLogo/diligiteLogo.png"
              height={100}
              width={100}
              alt="Diligite logo"
            />
          </div>
          <div className="bg-gray-50 flex flex-col justify-center items-center h-40">
            <Image
              src="/images/clientLogo/logosmallblack.png"
              height={100}
              width={100}
              alt="Diligite logo"
            />
          </div>
        </div>
        <div className="flex-auto">
          <h3 className="text-4xl font-bold p-8 py-0">{title}</h3>
          <p className="p-8 text-gray-500 font-semibold text-lg pb-0">
            {description}
          </p>
          <button
            onClick={showModal}
            className="ml-8 p-4 mt-8 text-gray-700 text-base-bold tracking-wider border-2 border-primary p-1 grow-on-hover font-semibold"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
