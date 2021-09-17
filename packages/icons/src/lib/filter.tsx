import * as React from "react"

function Filter(props: React.SVGProps<SVGSVGElement>) {
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
        d="M21.181 5.63c.962-1.137.153-2.88-1.336-2.88H4.155c-1.49 0-2.298 1.743-1.336 2.88l6.431 7.605V21.5a.75.75 0 001.085.67l1.79-.894a4.75 4.75 0 002.625-4.248v-3.793zm-1.336-1.38a.25.25 0 01.19.411l-6.608 7.815a.75.75 0 00-.177.484v4.068a3.25 3.25 0 01-1.797 2.907l-.703.352V12.96a.75.75 0 00-.177-.484L3.964 4.66a.25.25 0 01.191-.411z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Filter;
