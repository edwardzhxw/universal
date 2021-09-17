import * as React from "react"

function LocationSml(props: React.SVGProps<SVGSVGElement>) {
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
        clipRule="evenodd"
        d="M17.54 7.224a6.336 6.336 0 011.105 3.042v-.037a6.305 6.305 0 01-1.834 5.092l-3.937 3.959a.746.746 0 01-1.059 0l-3.95-3.96A6.307 6.307 0 016.03 10.23a6.382 6.382 0 012.803-4.675 6.337 6.337 0 018.707 1.67zm-4.977 5.923a2.344 2.344 0 100-4.687 2.344 2.344 0 000 4.687z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default LocationSml;
