import * as React from "react"

function Up(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3.436 15.494a.75.75 0 001.058.07L12 8.997l7.506 6.567a.75.75 0 10.988-1.128l-8-7a.75.75 0 00-.988 0l-8 7a.75.75 0 00-.07 1.058z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Up;
