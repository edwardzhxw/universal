import * as React from "react"

function Google(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={20} cy={20} r={19.5} fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 13.867c1.878 0 3.145.81 3.867 1.489l2.822-2.756C24.956 10.989 22.7 10 20 10a9.993 9.993 0 00-8.933 5.511l3.233 2.511c.811-2.41 3.056-4.155 5.7-4.155z"
        fill="#EA4335"
        stroke="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.6 20.222c0-.822-.067-1.422-.211-2.044H20v3.71h5.511c-.111.923-.711 2.312-2.044 3.245l3.155 2.445c1.89-1.745 2.978-4.311 2.978-7.356z"
        fill="#4285F4"
        stroke="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.311 21.978A6.156 6.156 0 0113.978 20c0-.689.122-1.355.322-1.978l-3.233-2.51A10.009 10.009 0 0010 20c0 1.611.389 3.133 1.067 4.489l3.244-2.511z"
        fill="#FBBC05"
        stroke="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 30c2.7 0 4.967-.889 6.622-2.422l-3.155-2.445c-.845.59-1.978 1-3.467 1-2.645 0-4.889-1.744-5.689-4.155l-3.233 2.51C12.722 27.757 16.088 30 20 30z"
        fill="#34A853"
        stroke="none"
      />
    </svg>
  )
}

export default Google;
