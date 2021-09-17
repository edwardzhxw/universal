import * as React from "react"

function PromptS(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipRule="evenodd" fillRule="evenodd">
        <path
          d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25z"
          fill="#00bfbd"
        />
        <path
          d="M10.75 14.52A3.501 3.501 0 0112 7.75a3.5 3.5 0 011.25 6.77v1.03h-2.5zm3.033 2.432a1.5 1.5 0 00.967-1.402v-.124a5 5 0 10-5.5 0v.124a1.5 1.5 0 001.5 1.5h2.5c.188 0 .368-.035.533-.098zm-.57 1.098c.017-.065.028-.132.033-.2a.094.094 0 00-.096-.1h-2.3c-.055 0-.1.045-.096.1a1.264 1.264 0 00.096.39 1.253 1.253 0 001.976.448 1.253 1.253 0 00.388-.638z"
          fill="#fff"
        />
      </g>
    </svg>
  )
}

export default PromptS;
