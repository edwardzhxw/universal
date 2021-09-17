import * as React from "react"

function EditSml(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M14.505 5.496a.84.84 0 00-1.188 0L7.453 11.36c-.29.29-.453.684-.453 1.094v1.691c0 .61.495 1.105 1.105 1.105h1.691c.41 0 .803-.163 1.093-.453l5.865-5.865a.84.84 0 000-1.187zM6 17.75a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1z" />
      </g>
    </svg>
  )
}

export default EditSml;
