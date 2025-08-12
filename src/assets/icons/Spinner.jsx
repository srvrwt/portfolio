const Spinner = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="250"
    height="250"
    viewBox="0 0 250 250"
    fill="none"
  >
    <g clipPath="url(#clip0_2_274)">
      <mask
        id="mask0_2_274"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="250"
        height="250"
      >
        <path d="M250 0H0V250H250V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2_274)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M133.929 0H116.071V103.445L42.9251 30.2981L30.2983 42.9251L103.445 116.071H0V133.929H103.444L30.2983 207.075L42.9251 219.701L116.071 146.555V250H133.929V146.555L207.075 219.701L219.701 207.075L146.555 133.929H250V116.071H146.555L219.701 42.925L207.075 30.2981L133.929 103.444V0Z"
          fill="var(--color-btn)"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_2_274">
        <rect width="250" height="250" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Spinner;
