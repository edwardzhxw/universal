import * as React from "react"

function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="#1877F2"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 20.122C40 9.01 31.046 0 20 0S0 9.009 0 20.122C0 30.166 7.314 38.49 16.875 40V25.939h-5.078v-5.817h5.078V15.69c0-5.043 2.986-7.829 7.554-7.829 2.189 0 4.477.393 4.477.393v4.952h-2.522c-2.484 0-3.259 1.551-3.259 3.143v3.774h5.547l-.887 5.817h-4.66V40C32.686 38.49 40 30.166 40 20.122z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.785 25.781L28.672 20h-5.547v-3.752c0-1.581.775-3.123 3.26-3.123h2.521V8.203s-2.288-.39-4.477-.39c-4.568 0-7.554 2.768-7.554 7.78V20h-5.078v5.781h5.078v13.976a20.145 20.145 0 006.25 0V25.781h4.66z"
        fill="#fff"
      />
    </svg>
  )
}

export default Facebook;
