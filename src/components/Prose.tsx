// Paragraphs, with an illuminated initial on the first one.
export function Prose({ paragraphs, illuminate = true }: { paragraphs: string[]; illuminate?: boolean }) {
  return (
    <div className="prose">
      {paragraphs.map((p, i) => (
        <p key={i} className={i === 0 && illuminate ? "illuminated" : undefined}>{p}</p>
      ))}
    </div>
  );
}
