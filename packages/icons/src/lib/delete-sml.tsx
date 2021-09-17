import * as React from "react"

function DeleteSml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#D9D9D9"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.998 5c-1.083 0-2 .707-2.317 1.685H6.52a.75.75 0 000 1.5h10.957a.75.75 0 100-1.5h-3.162A2.436 2.436 0 0011.998 5zm4.87 4.26h-9.74V18a1 1 0 001 1h5.74a3 3 0 003-3V9.26z"
      />
    </svg>
  )
}

export default DeleteSml;
