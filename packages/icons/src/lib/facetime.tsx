import * as React from "react"

function Facetime(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.94 21H7.06A4.06 4.06 0 013 16.94V7.063A4.057 4.057 0 017.06 3h9.88A4.06 4.06 0 0121 7.06v9.878A4.06 4.06 0 0116.94 21z"
        fill="#36E67F"
      />
      <path
        d="M13.741 16H7.06C6.473 16 6 15.553 6 15.004V9.996C6 9.444 6.475 9 7.06 9h6.681c.587 0 1.06.447 1.06.996v5.006c.002.551-.473.998-1.06.998zM18 9.632v5.733c0 .04-.048.065-.084.04L15.29 13.75a.046.046 0 01-.023-.04v-2.425c0-.016.01-.033.023-.04l2.627-1.655c.036-.02.084.003.084.043z"
        fill="#fff"
      />
    </svg>
  )
}

export default Facetime;
