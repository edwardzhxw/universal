import * as React from "react"

function SwitchMode(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.5 4.75a7.25 7.25 0 100 14.5h9a7.25 7.25 0 100-14.5zM1.75 12A5.75 5.75 0 017.5 6.25h9a5.75 5.75 0 010 11.5h-9A5.75 5.75 0 011.75 12zm4 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM7.5 8.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SwitchMode;
