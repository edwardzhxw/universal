import * as React from "react"

function TopicSml(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.616 7.68a.75.75 0 00-1.456-.36L9.745 9H8.112a.75.75 0 100 1.5h1.263l-.74 3H7A.75.75 0 007 15h1.264l-.326 1.32a.75.75 0 101.456.36L9.81 15h2.9l-.326 1.32a.75.75 0 101.456.36l.415-1.68h1.634a.75.75 0 000-1.5h-1.264l.741-3H17A.75.75 0 0017 9h-1.264l.325-1.32a.75.75 0 10-1.456-.36L14.19 9h-2.9zm2.204 2.82h-2.9l-.74 3h2.9z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default TopicSml;
