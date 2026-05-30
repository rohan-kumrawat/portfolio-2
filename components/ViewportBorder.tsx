export default function ViewportBorder() {
  return (
    <div className="viewport-border" aria-hidden="true">
      {/* Top-right corner accent */}
      <div className="corner-tr" />
      <div className="corner-tr-v" />
      {/* Bottom-left corner accent */}
      <div className="corner-bl-h" />
      <div className="corner-bl-v" />
    </div>
  );
}
