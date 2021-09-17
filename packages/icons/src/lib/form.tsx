import * as React from "react"

function Form(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M3.25 5A2.75 2.75 0 016 2.25h12A2.75 2.75 0 0120.75 5v11A5.75 5.75 0 0115 21.75H4a.75.75 0 01-.75-.75zM6 3.75c-.69 0-1.25.56-1.25 1.25v15.25H15A4.25 4.25 0 0019.25 16V5c0-.69-.56-1.25-1.25-1.25z" />
        <path d="M6.25 14a.75.75 0 01.75-.75h5a.75.75 0 010 1.5H7a.75.75 0 01-.75-.75zM6.25 17a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H7a.75.75 0 01-.75-.75z" />
      </g>
    </svg>
  )
}

export default Form;
