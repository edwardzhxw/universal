import * as React from "react"

function Test(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M17.53 6.47a.75.75 0 010 1.06l-2.5 2.5a.75.75 0 01-1.06 0l-1-1a.75.75 0 011.06-1.06l.47.47 1.97-1.97a.75.75 0 011.06 0zM16.398 13.768a.75.75 0 00-1.06-1.06l-.708.706-.707-.707a.75.75 0 00-1.06 1.06l.706.708-.707.707a.75.75 0 101.06 1.06l.708-.707.707.708a.75.75 0 001.06-1.061l-.706-.707z" />
      </g>
    </svg>
  )
}

export default Test;
