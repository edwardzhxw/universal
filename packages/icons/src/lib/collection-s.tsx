import * as React from "react"

function CollectionS(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.5 3.25a5.75 5.75 0 00-4.067 1.685L12 5.368l-.433-.433a5.75 5.75 0 10-8.133 8.132l8.035 8.035a.75.75 0 001.061 0l8.035-8.035A5.752 5.752 0 0016.5 3.25z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default CollectionS;
