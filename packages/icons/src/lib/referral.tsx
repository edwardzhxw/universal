import * as React from "react"

function Referral(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.25 5A3.25 3.25 0 0112 2.923a3.25 3.25 0 015.24 3.827H19a2.75 2.75 0 012.75 2.75v3a.75.75 0 01-.75.75h-.75v3.25a5.75 5.75 0 01-5.75 5.75h-10a.75.75 0 01-.75-.75v-8.25H3a.75.75 0 01-.75-.75v-3A2.75 2.75 0 015 6.75h1.76A3.235 3.235 0 016.25 5zM9.5 6.75h1.75V5A1.75 1.75 0 109.5 6.75zm3.25 0h1.75A1.75 1.75 0 1012.75 5zm1.75 1.5H5c-.69 0-1.25.56-1.25 1.25v2.25h16.5V9.5c0-.69-.56-1.25-1.25-1.25zm-9.25 12.5v-7.5h13.5v3.25a4.25 4.25 0 01-4.25 4.25z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Referral;
