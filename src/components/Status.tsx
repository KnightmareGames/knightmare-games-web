// A game's status ("Coming 2027", "Free on Steam") as a notched ribbon. The one way status is shown.
export function Status({ children }: { children: React.ReactNode }) {
  return <span className="status">{children}</span>;
}
