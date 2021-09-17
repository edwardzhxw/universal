import * as React from "react"

function Checked(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#00B3BD" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071L3.29289 13.7071C2.90237 13.3166 2.90237 12.6834 3.29289 12.2929C3.68342 11.9024 4.31658 11.9024 4.70711 12.2929L9 16.5858L19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289Z"
      />
    </svg>
  )
}

export default Checked;
