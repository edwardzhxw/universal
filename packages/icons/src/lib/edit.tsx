import * as React from "react"

function Edit(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M14.056 3.884a2.75 2.75 0 013.889 0l1.414 1.414a2.75 2.75 0 010 3.89l-8.9 8.899a1.75 1.75 0 01-1.237.512H5.893c-.69 0-1.25-.56-1.25-1.25v-3.328c0-.464.185-.91.513-1.238zm2.828 1.06a1.25 1.25 0 00-1.768 0l-8.9 8.9a.25.25 0 00-.073.177v3.078h3.079a.25.25 0 00.177-.073l8.9-8.9a1.25 1.25 0 000-1.767zM3.25 21a.75.75 0 01.75-.75h16a.75.75 0 010 1.5H4a.75.75 0 01-.75-.75z" />
      </g>
    </svg>
  )
}

export default Edit;
