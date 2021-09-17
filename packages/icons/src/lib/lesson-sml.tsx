import * as React from "react"

function LessonSml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#d9d9d9"
      {...props}
    >
      <g clipRule="evenodd" fillRule="evenodd">
        <path d="M8 5h.918c.281.591.884 1 1.582 1h3c.698 0 1.3-.409 1.582-1H16a2 2 0 012 2v6.126A4 4 0 0013.535 19H8a2 2 0 01-2-2V7a2 2 0 012-2zm.75 4.5a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75z" />
        <path d="M19.8 17a2.8 2.8 0 11-5.6 0 2.8 2.8 0 015.6 0zM19.013 12.513a.75.75 0 011.06 0l1.414 1.414a.75.75 0 01-1.06 1.06l-1.414-1.414a.75.75 0 010-1.06zM9.75 4.25a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75z" />
      </g>
    </svg>
  )
}

export default LessonSml;
