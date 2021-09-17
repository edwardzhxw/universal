import * as React from "react"

function Search(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.75 11.582a8.332 8.332 0 1116.664 0 8.332 8.332 0 01-16.664 0zm8.332-9.832c-5.43 0-9.832 4.402-9.832 9.832 0 5.43 4.402 9.832 9.832 9.832a9.793 9.793 0 006.42-2.385c.03.053.069.102.114.147l2.854 2.854a.75.75 0 101.06-1.06l-2.854-2.854A.752.752 0 0018.53 18a9.793 9.793 0 002.384-6.419c0-5.43-4.402-9.832-9.832-9.832z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Search;
