import * as React from "react"

function Message(props: React.SVGProps<SVGSVGElement>) {
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
        d="M13.9 2.25c4.593 0 8.35 3.75 8.35 8.34 0 3.4-1.849 5.85-4.214 7.652-2.349 1.79-5.29 3.009-7.658 3.954A.75.75 0 019.35 21.5v-2.604c-4.245-.382-7.6-3.97-7.6-8.306 0-4.59 3.757-8.34 8.35-8.34zm6.85 8.34c0-3.76-3.083-6.84-6.85-6.84h-3.8c-3.767 0-6.85 3.08-6.85 6.84 0 3.759 3.083 6.84 6.85 6.84a.75.75 0 01.75.75v2.208c2.121-.872 4.418-1.922 6.277-3.339 2.147-1.636 3.623-3.692 3.623-6.46zM8 12a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Message;
