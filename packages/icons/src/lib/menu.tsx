import * as React from "react"

function Menu(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M10.75 6a.75.75 0 01-.75.75H4a.75.75 0 010-1.5h6a.75.75 0 01.75.75zM14.75 18a.75.75 0 01-.75.75H4a.75.75 0 010-1.5h10a.75.75 0 01.75.75zM20.75 12a.75.75 0 01-.75.75H4a.75.75 0 010-1.5h16a.75.75 0 01.75.75z" />
      </g>
    </svg>
  )
}

export default Menu;
