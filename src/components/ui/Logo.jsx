const Logo = ({ height = 28, className = '' }) => (
  <svg
    height={height}
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ height: `${height}px`, width: 'auto', display: 'block' }}
  >
    <defs>
      <linearGradient id="grad1" x1="0" y1="0" x2="120" y2="120">
        <stop offset="0%" stopColor="#3EC6FF" />
        <stop offset="100%" stopColor="#1A4DFF" />
      </linearGradient>
    </defs>

    <circle cx="60" cy="60" r="58" fill="url(#grad1)" />

    <path
      d="M78 38 A28 28 0 1 0 78 82"
      stroke="white"
      strokeWidth="12"
      strokeLinecap="round"
      fill="none"
    />

    <rect x="78" y="34" width="10" height="10" fill="white" rx="2" />
  </svg>
);

export default Logo;