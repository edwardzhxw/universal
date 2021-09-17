import * as React from "react"

function FollowingT(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#333"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.517 8.457c.3.286.312.76.026 1.06l-6.667 7a.75.75 0 01-1.086 0l-3.333-3.5a.75.75 0 111.086-1.034l2.79 2.93 6.124-6.43a.75.75 0 011.06-.026z"
      />
    </svg>
  )
}

export default FollowingT;
