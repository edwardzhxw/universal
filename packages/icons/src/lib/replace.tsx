import * as React from "react"

function Replace(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M7.042 13.047a.6.6 0 01.558-.38h8.8a.6.6 0 010 1.2H9.122l1.173 1.094a.6.6 0 11-.819.878l-2.285-2.134a.6.6 0 01-.15-.658zM16.958 9.753a.6.6 0 01-.558.38H7.6a.6.6 0 010-1.2h7.278L13.705 7.84a.6.6 0 11.819-.878l2.285 2.134a.6.6 0 01.15.658z" />
      </g>
    </svg>
  )
}

export default Replace;
