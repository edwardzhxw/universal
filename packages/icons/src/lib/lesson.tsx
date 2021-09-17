import * as React from "react"

function Lesson(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <clipPath id="prefix__aa">
        <path d="M0 0h24v24H0z" />
      </clipPath>
      <g clipPath="url(#prefix__aa)">
        <path
          clipRule="evenodd"
          d="M22.62 11.051a.75.75 0 00-1.299.75l1.25 2.165a.75.75 0 001.3-.75zM3.5 5.75c0-.69.56-1.25 1.25-1.25h1.234A2.25 2.25 0 008 5.75h4.5a2.25 2.25 0 002.016-1.25h1.234c.69 0 1.25.56 1.25 1.25v4.568A6.253 6.253 0 0010.567 20H3.5zm15 0v5.095A6.25 6.25 0 1112.041 21.5H2.75a.75.75 0 01-.75-.75v-15A2.75 2.75 0 014.75 3h1.056A2.25 2.25 0 018 1.25h4.5A2.25 2.25 0 0114.694 3h1.056a2.75 2.75 0 012.75 2.75zM7.25 3.5A.75.75 0 018 2.75h4.5a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zm12.565 15.308a4.75 4.75 0 10-8.227-4.75 4.75 4.75 0 008.227 4.75z"
          fill={props.fill || "#333"}
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}

export default Lesson;
