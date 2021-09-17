import * as React from "react"

function CheckedSml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#00BFBD"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.707 7.793a1 1 0 010 1.414l-7.765 7.765a1 1 0 01-1.414 0l-4.235-4.236a1 1 0 111.414-1.414l3.528 3.529 7.058-7.058a1 1 0 011.414 0z"
      />
    </svg>
  )
}

export default CheckedSml;
