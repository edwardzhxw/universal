import * as React from "react"

function Right(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.506 3.436a.75.75 0 00-.07 1.058L14.003 12l-6.567 7.506a.75.75 0 001.128.988l7-8a.75.75 0 000-.988l-7-8a.75.75 0 00-1.058-.07z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Right;
