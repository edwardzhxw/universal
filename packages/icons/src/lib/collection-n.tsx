import * as React from "react"

function CollectionN(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.298 3.688a5.75 5.75 0 016.267 9.38s0-.001 0 0l-8.035 8.034a.75.75 0 01-1.06 0l-8.036-8.035a5.75 5.75 0 018.133-8.132l.433.433.433-.433a5.751 5.751 0 011.865-1.247zM16.5 4.75a4.25 4.25 0 00-3.005 1.245l-.964.964a.75.75 0 01-1.06 0l-.964-.964a4.25 4.25 0 10-6.011 6.011L12 19.511l7.505-7.505a4.25 4.25 0 00-3.006-7.256z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default CollectionN;
