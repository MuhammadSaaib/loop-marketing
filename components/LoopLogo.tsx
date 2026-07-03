export default function LoopLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Left vertical line */}
      <line x1="20" y1="30" x2="20" y2="70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* First circle */}
      <circle cx="40" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
      
      {/* Second circle */}
      <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
      
      {/* Third circle */}
      <circle cx="60" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
      
      {/* Right vertical line */}
      <line x1="80" y1="30" x2="80" y2="70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}