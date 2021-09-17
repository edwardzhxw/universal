import * as React from "react"

function Coupon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 3.75A2.75 2.75 0 001.25 6.5v3.05a.75.75 0 00.9.735 1.75 1.75 0 110 3.43.75.75 0 00-.9.735v3.05A2.75 2.75 0 004 20.25h16a2.75 2.75 0 002.75-2.75v-3.05a.75.75 0 00-.9-.735 1.75 1.75 0 110-3.43.75.75 0 00.9-.735V6.5A2.75 2.75 0 0020 3.75zM2.75 6.5c0-.69.56-1.25 1.25-1.25h4.25V7.5a.75.75 0 001.5 0V5.25H20c.69 0 1.25.56 1.25 1.25v2.26a3.25 3.25 0 000 6.48v2.26c0 .69-.56 1.25-1.25 1.25H9.75V16.5a.75.75 0 00-1.5 0v2.25H4c-.69 0-1.25-.56-1.25-1.25v-2.26a3.25 3.25 0 000-6.48zm7 4.5a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Coupon;
