import * as React from "react"

function Support(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v6A2.75 2.75 0 0119 20.75h-2A2.75 2.75 0 0114.25 18v-2A2.75 2.75 0 0117 13.25h3.25V12a8.25 8.25 0 00-16.5 0v1.25H7A2.75 2.75 0 019.75 16v2A2.75 2.75 0 017 20.75H5A2.75 2.75 0 012.25 18v-4.75zm18 2.75H17c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25zM3.75 18v-3.25H7c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Support;
