import * as React from "react"

function Topic(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.403 19.127c-.128.4.076.845.457.996s.792-.052.92-.451l.952-2.972h3.718a.75.75 0 000-1.5h-3.238l1.826-5.7h3.212a.75.75 0 000-1.5h-2.731l.873-2.728c.128-.4-.076-.845-.457-.995s-.792.051-.92.45L15.967 8h-5.26l.896-2.721c.131-.398-.07-.846-.449-1s-.793.045-.924.443L9.15 8h-3.6a.75.75 0 100 1.5h3.106l-1.878 5.7H3.75a.75.75 0 000 1.5h2.534l-.797 2.421a.813.813 0 00.449 1 .692.692 0 00.924-.443l.981-2.978h5.34zM13.66 15.2l1.826-5.7h-5.274l-1.878 5.7z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Topic;
