import * as React from 'react';

function Spinner(props: React.SVGProps<SVGCircleElement>) {
  return (
    <svg
      style={{
        background: 'transparent',
      }}
      width={props.width || 24}
      height={props.height || 24}
      viewBox="0 0 100 100"
      display="inline-block"
    >
      <circle
        cx={50}
        cy={50}
        fill="none"
        stroke="#53585a"
        strokeWidth={5}
        r={28}
        strokeDasharray="131.94689145077132 45.982297150257104"
        transform="rotate(90.68 50 50)"
        {...props}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
}

export default Spinner;
