import * as React from "react"

function RecommendationSml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="#d9d9d9"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          clipRule="evenodd"
          d="M6 7a2 2 0 012-2h8a2 2 0 012 2v6.81a2.71 2.71 0 00-1.134.355 2.71 2.71 0 00-3.272 4.26l.575.575H8a2 2 0 01-2-2zm2.75 2.5a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75z"
          fillRule="evenodd"
        />
        <path d="M19.29 15.442a1.508 1.508 0 00-2.133 0l-.29.29-.291-.29a1.509 1.509 0 10-2.134 2.134l.29.29L16.867 20 19 17.866l.29-.29a1.508 1.508 0 000-2.134z" />
      </g>
    </svg>
  )
}

export default RecommendationSml;
