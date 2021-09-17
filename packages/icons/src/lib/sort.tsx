import * as React from "react"

function Sort(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M9.942 6.052a.75.75 0 01.475.698v11a.75.75 0 01-1.5 0V8.653l-1.369 1.466a.75.75 0 01-1.096-1.024l2.666-2.857a.75.75 0 01.824-.186zM14.058 18.448a.75.75 0 01-.475-.698v-11a.75.75 0 011.5 0v9.097l1.369-1.466a.75.75 0 111.096 1.024l-2.666 2.857a.75.75 0 01-.824.186z" />
      </g>
    </svg>
  )
}

export default Sort;
