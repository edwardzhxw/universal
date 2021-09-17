import * as React from "react"

function Settings(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18.227 20.335l3.889-7a2.75 2.75 0 000-2.67l-3.889-7a2.75 2.75 0 00-2.404-1.415H8.177a2.75 2.75 0 00-2.404 1.414l-3.89 7a2.75 2.75 0 000 2.672l3.89 7a2.75 2.75 0 002.404 1.414h7.646a2.75 2.75 0 002.404-1.415zm2.578-8.942c.21.377.21.836 0 1.214l-3.89 7a1.25 1.25 0 01-1.092.643H8.177a1.25 1.25 0 01-1.093-.643l-3.889-7a1.25 1.25 0 010-1.214l3.89-7a1.25 1.25 0 011.092-.643h7.646c.454 0 .872.246 1.093.643zM9.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Settings;
