import * as React from "react"

function FilterSml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#d9d9d9"
      {...props}
    >
      <path
        d="M6.733 7.609A1 1 0 017.527 6h8.946a1 1 0 01.793 1.609L13.3 12.78v1.457a4 4 0 01-2.298 3.62L10.7 18v-5.219z"
      />
    </svg>
  )
}

export default FilterSml;
