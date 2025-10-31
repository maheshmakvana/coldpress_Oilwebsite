import { Link } from "react-router-dom";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label="VerdantPure Oils home" className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="drop-shadow-sm"
      >
        <circle cx="32" cy="32" r="30" fill="#0E7A4B" stroke="#D9A441" strokeWidth="2" />
        <path
          d="M32 12c6.627 8.32 10 14.64 10 19.04 0 6.08-4.48 11.2-10 11.2s-10-5.12-10-11.2C22 26.64 25.373 20.32 32 12Z"
          fill="#D9A441"
        />
        <path
          d="M25 40c2.24 4.48 5.973 8 7 12 1.013-4 4.733-7.52 7-12-2.267 2-4.8 3-7 3s-4.733-1-7-3Z"
          fill="#F8F5EC"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        VerdantPure <span className="text-primary">Oils</span>
      </span>
    </Link>
  );
}
