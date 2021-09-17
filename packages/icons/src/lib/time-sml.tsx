import * as React from "react"

function TimeSml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#d9d9d9"
      {...props}
    >
      <g clipRule="evenodd" fillRule="evenodd">
        <path d="M8.05 8.464a6 6 0 108.486 8.486A6 6 0 008.05 8.464zm6.646 2.689a.6.6 0 00-.849-.849l-2.116 2.116a.6.6 0 000 .849l1.655 1.655a.6.6 0 00.849-.848l-1.231-1.231zM16.005 5.106a.75.75 0 011.06 0l2.83 2.828a.75.75 0 01-1.061 1.06l-2.829-2.828a.75.75 0 010-1.06z" />
      </g>
    </svg>
  )
}

export default TimeSml;
