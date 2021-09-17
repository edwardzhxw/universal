import * as React from "react"

function Play(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#333"
      {...props}
    >
      <g clipRule="evenodd" fillRule="evenodd">
        <path d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12z" />
        <path d="M15.625 10.918a1.25 1.25 0 010 2.165l-4.5 2.598a1.25 1.25 0 01-1.875-1.083V9.402a1.25 1.25 0 011.875-1.083zM14.5 12l-3.75-2.165v4.33z" />
      </g>
    </svg>
  )
}

export default Play;
