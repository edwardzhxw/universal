import * as React from "react"

function Share(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M5 4c-.69 0-1.25.56-1.25 1.25V20.5H16a4.25 4.25 0 004.25-4.25v-4a.75.75 0 011.5 0v4A5.75 5.75 0 0116 22H3a.75.75 0 01-.75-.75v-16A2.75 2.75 0 015 2.5h7A.75.75 0 0112 4z" />
        <path d="M18.066 2.22a.75.75 0 00-1.06 1.06l2.219 2.22H17a6.75 6.75 0 00-6.75 6.75v2a.75.75 0 001.5 0v-2C11.75 9.35 14.1 7 17 7h2.296l-2.29 2.29a.75.75 0 101.06 1.061L21.6 6.816a.75.75 0 000-1.06z" />
      </g>
    </svg>
  )
}

export default Share;
