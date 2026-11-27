// A heraldic rule: thick line, a lozenge in the middle, a dot either side.
export function Ornament() {
  return (
    <div className="ornament" aria-hidden="true">
      <span className="ornament__line" />
      <svg width="64" height="24" viewBox="0 0 64 24">
        <rect x="4" y="9" width="6" height="6" transform="rotate(45 7 12)" fill="currentColor" />
        <rect x="22" y="2" width="20" height="20" transform="rotate(45 32 12)" fill="var(--gules)" stroke="currentColor" strokeWidth="3" />
        <rect x="54" y="9" width="6" height="6" transform="rotate(45 57 12)" fill="currentColor" />
      </svg>
      <span className="ornament__line" />
    </div>
  );
}
