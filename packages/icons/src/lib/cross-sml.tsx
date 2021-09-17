import * as React from "react"

function CrossSml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#D9D9D9" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path fillRule="evenodd" clipRule="evenodd"
        d="M10.0555 8.94458C9.76258 8.65168 9.28771 8.65168 8.99482 8.94458C8.70192 9.23747 8.70192 9.71234 8.99482 10.0052L10.9394 11.9498L8.99484 13.8943C8.70194 14.1872 8.70194 14.6621 8.99484 14.955C9.28773 15.2479 9.7626 15.2479 10.0555 14.955L12 13.0105L13.9446 14.955C14.2375 15.2479 14.7123 15.2479 15.0052 14.955C15.2981 14.6621 15.2981 14.1872 15.0052 13.8943L13.0607 11.9498L15.0052 10.0052C15.2981 9.71234 15.2981 9.23747 15.0052 8.94457C14.7124 8.65168 14.2375 8.65168 13.9446 8.94457L12 10.8891L10.0555 8.94458Z"
        fill="white" />
    </svg>
  )
}

export default CrossSml;