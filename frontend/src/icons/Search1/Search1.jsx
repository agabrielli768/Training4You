import React from "react";

export const Search1 = ({ className }) => {
  return (
    <svg
      className={`search-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_34_26)">
        <rect className="rect" fill="#A3A3A3" height="20" width="20" />
        <path
          className="path"
          d="M13.1625 13.1766L17.5 17.5M15 8.75C15 12.2016 12.2016 15 8.75 15C5.29844 15 2.5 12.2016 2.5 8.75C2.5 5.29844 5.29844 2.5 8.75 2.5C12.2016 2.5 15 5.29844 15 8.75Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.16667"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_34_26">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};
