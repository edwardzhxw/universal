import * as React from "react"

function Copy(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.5 1.75A2.75 2.75 0 001.75 4.5v8.667a2.75 2.75 0 002.75 2.75h3.583V19.5a2.75 2.75 0 002.75 2.75H16.5a5.75 5.75 0 005.75-5.75v-5.667a2.75 2.75 0 00-2.75-2.75h-3.583V4.5a2.75 2.75 0 00-2.75-2.75zm9.917 6.333V4.5c0-.69-.56-1.25-1.25-1.25H4.5c-.69 0-1.25.56-1.25 1.25v8.667c0 .69.56 1.25 1.25 1.25h3.583v-3.584a2.75 2.75 0 012.75-2.75zm-4.834 2.75c0-.69.56-1.25 1.25-1.25H19.5c.69 0 1.25.56 1.25 1.25V16.5a4.25 4.25 0 01-4.25 4.25h-5.667c-.69 0-1.25-.56-1.25-1.25z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Copy;
