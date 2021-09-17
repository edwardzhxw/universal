import * as React from "react"

function Help(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="#333"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          clipRule="evenodd"
          d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12z"
          fillRule="evenodd"
        />
        <path d="M11.95 14.3a.76.76 0 01-.75-.75v-1.2a.75.75 0 01.75-.75 1.999 1.999 0 10-1.95-2 .75.75 0 11-1.5 0 3.45 3.45 0 114.2 3.4v.54a.76.76 0 01-.75.76zM11.95 17.46a.92.92 0 100-1.84.92.92 0 000 1.84z" />
      </g>
    </svg>
  )
}

export default Help;
