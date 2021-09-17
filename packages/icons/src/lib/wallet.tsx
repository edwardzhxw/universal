import * as React from "react"

function Wallet(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5 2.75A2.75 2.75 0 002.25 5.5v15c0 .414.336.75.75.75h13a5.75 5.75 0 005.75-5.75v-10A2.75 2.75 0 0019 2.75zm15.25 6.5V5.5c0-.69-.56-1.25-1.25-1.25H5c-.69 0-1.25.56-1.25 1.25v14.25H16a4.25 4.25 0 004.25-4.25v-.75H16a2.75 2.75 0 110-5.5zm0 4v-2.5H16a1.25 1.25 0 100 2.5z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Wallet;
