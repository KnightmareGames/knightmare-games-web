// Allows a line break after the @, so a narrow cell never splits the address mid-word.
export function Email({ address }: { address: string }) {
  const [user, domain] = address.split("@");
  return <a href={`mailto:${address}`}>{user}@<wbr />{domain}</a>;
}
