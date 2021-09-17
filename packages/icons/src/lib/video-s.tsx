import * as React from "react"

function VideoS(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 5.25A2.75 2.75 0 001.25 8v10c0 .414.336.75.75.75h9.667a5.75 5.75 0 005.716-5.127l4.123 3.608a.75.75 0 001.244-.565V7.333a.75.75 0 00-1.244-.564l-4.09 3.578V8a2.75 2.75 0 00-2.75-2.75zM2.75 8c0-.69.56-1.25 1.25-1.25h10.667c.69 0 1.25.56 1.25 1.25v5a4.25 4.25 0 01-4.25 4.25H2.75zm18.5 7.013L17.806 12l3.444-3.014z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default VideoS;
