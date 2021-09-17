import * as React from "react"

function UpvoteS(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#ff554b"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M19.4 8.6c.8 0 1.5.3 2 .9.4.6.6 1.3.5 2l-1.1 6.7c-.5 2-1.9 3.5-3.7 3.5H8.45V8.318L12 2.9c.3-.4.9-.8 1.5-.9.4 0 .7 0 1.1.1s.7.4 1 .8c.1.2.2.4.2.6 0 .09.02.18.042.279.028.121.058.256.058.421.1.5.1 1.2.1 1.8 0 .463-.027.926-.052 1.376A21.84 21.84 0 0015.9 8.6zm-12.45.1H5.9c-1.1 0-2 .9-2 1.9L3 18.5v.1c0 1.7 1.4 3.1 3 3.1h.95z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default UpvoteS;
