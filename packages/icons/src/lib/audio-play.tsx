import * as React from "react"

function AudioPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={12} cy={12} fill="#ff554b" r={11} />
      <path
        d="M15.25 11.567a.5.5 0 010 .866l-4.5 2.598a.5.5 0 01-.75-.433V9.402a.5.5 0 01.75-.433z"
        fill="#fff"
      />
    </svg>
  )
}

export default AudioPlay;
