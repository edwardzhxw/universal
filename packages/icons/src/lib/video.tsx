import * as React from "react"

function Video(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#333"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M5 2.75A2.75 2.75 0 002.25 5.5v15c0 .414.336.75.75.75h13a5.75 5.75 0 005.75-5.75v-10A2.75 2.75 0 0019 2.75zM3.75 5.5c0-.69.56-1.25 1.25-1.25h14c.69 0 1.25.56 1.25 1.25v10A4.25 4.25 0 0116 19.75H3.75zm6.875 10.18l4.5-2.597a1.25 1.25 0 000-2.166l-4.5-2.598A1.25 1.25 0 008.75 9.402v5.196a1.25 1.25 0 001.875 1.083zm-.375-5.845L14 12l-3.75 2.165z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Video;
