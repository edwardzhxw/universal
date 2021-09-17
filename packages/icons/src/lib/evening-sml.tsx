import * as React from "react"

function EveningSml(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18.338 13.332c.068-.25-.211-.44-.444-.326a5.65 5.65 0 01-7.92-6.6c.07-.25-.168-.49-.402-.378a6.278 6.278 0 108.766 7.304z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default EveningSml;
