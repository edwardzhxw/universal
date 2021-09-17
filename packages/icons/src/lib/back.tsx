import * as React from "react"

function Back(props: React.SVGProps<SVGSVGElement>) {
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
        d="M13.494 3.436a.75.75 0 01.07 1.058L6.997 12l6.567 7.506a.75.75 0 11-1.128.988l-7-8a.75.75 0 010-.988l7-8a.75.75 0 011.058-.07z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Back;
