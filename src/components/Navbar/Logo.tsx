import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'


function Logo(props: HTMLChakraProps<'svg'>) {
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="140"
      version="1"
      viewBox="0 0 375 105"
      {...props}
    >
      <defs>
        <clipPath id="fb411d413b">
          <path d="M7.04 6.617h180.222v91.067H7.039zm0 0"></path>
        </clipPath>
        <clipPath id="3a14b6b6e7">
          <path d="M7.04 6.617h180v90.746h-180zm0 0"></path>
        </clipPath>
      </defs>
      <path fill="transparent" d="M-37.5 -10.5H412.5V115.5H-37.5z"></path>
      <path fill="transparent" d="M-37.5 -10.5H412.5V115.5H-37.5z"></path>
      <path fill={useColorModeValue('transparent','wheat')} d="M-37.5 -10.5H412.5V115.5H-37.5z"></path>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="18"
        d="M0 0h375v105H0V0"
      ></path>
      <g clipPath="url(#fb411d413b)">
        <path d="M7.04 6.617h180.378v91.301H7.039zm0 0"></path>
      </g>
      <g clipPath="url(#3a14b6b6e7)">
        <path
          fill="none"
          stroke="#000"
          strokeWidth="4"
          d="M-.003 0H240.28v121.417H-.003V0"
          transform="matrix(.74912 0 0 .7474 7.041 6.617)"
        ></path>
      </g>
      <path
        fill="#fff"
        fillOpacity="0.4"
        d="M26.012-12.98v-7.286H9.562v-5.199h16.45v-7.582H1.289V0h8.274v-12.98zm0 0"
        transform="translate(39.54 71.888)"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.4"
        d="M26.11 0v-33.047H1.29V0h8.273v-9.215h8.273V0zm-8.274-16.746H9.563v-8.719h8.273zm0 0"
        transform="translate(70.596 71.888)"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.4"
        d="M26.11 0v-20.266H9.562v-5.199h16.546v-7.582H1.29v20.067h16.547v5.449H1.289V0zm0 0"
        transform="translate(101.75 71.888)"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.4"
        d="M25.566-25.465v-7.582H.742v7.582h8.324V0h8.274v-25.465zm0 0"
        transform="translate(132.856 71.888)"
      ></path>
      <path
        fill="#fff"
        d="M26.012-12.98v-7.286H9.562v-5.199h16.45v-7.582H1.289V0h8.274v-12.98zm0 0"
        transform="translate(37.35 69.699)"
      ></path>
      <path
        fill="#fff"
        d="M26.11 0v-33.047H1.29V0h8.273v-9.215h8.273V0zm-8.274-16.746H9.563v-8.719h8.273zm0 0"
        transform="translate(68.406 69.699)"
      ></path>
      <path
        fill="#fff"
        d="M26.11 0v-20.266H9.562v-5.199h16.546v-7.582H1.29v20.067h16.547v5.449H1.289V0zm0 0"
        transform="translate(99.56 69.699)"
      ></path>
      <path
        fill="#fff"
        d="M25.566-25.465v-7.582H.742v7.582h8.324V0h8.274v-25.465zm0 0"
        transform="translate(130.666 69.699)"
      ></path>
      <path
        fill="none"
        stroke="#a6a6a6"
        strokeWidth="5.185"
        d="M216.008 73.172h10.875V61.965h12.61v-9.426h-12.61V45.16h14.004V35.47h-24.88zm30.914 0h26.289V63.098h-15.414v-27.63h-10.875zm31.613 0h10.88V35.469h-10.88zm16 0H307.2l6.942-11.152 3.129 5.007 3.761 6.145h12.719L321.254 53.84l11.797-18.371h-12.125l-3.285 5.219-3.5 5.656-3.551-5.656-3.235-5.22H295.18l11.847 18.477zm0 0"
      ></path>
      <path
        d="M3.984 0h10.883v-11.203h12.606v-9.426H14.867v-7.383h14.004v-9.695H3.984zm0 0"
        transform="translate(212.021 73.17)"
      ></path>
      <path
        d="M3.984 0h26.29v-10.074H14.866v-27.633H3.984zm0 0"
        transform="translate(242.936 73.17)"
      ></path>
      <path
        d="M3.984 0h10.883v-37.707H3.984zm0 0"
        transform="translate(274.552 73.17)"
      ></path>
      <path
        d="M1.133 0h12.656l6.95-11.148 3.124 5.007L27.633 0h12.71L27.849-19.336l11.797-18.371H27.523l-3.285 5.227-3.5 5.656-3.554-5.656-3.235-5.227H1.777L13.63-19.23zm0 0"
        transform="translate(293.403 73.17)"
      ></path>
    </chakra.svg>
  );
}

export default Logo;