export default function Logo({ onDark = false }) {
  return (
    <img
      src="/img/logo.png"
      alt="SM Residence"
      className={`logo-img ${onDark ? "on-dark" : ""}`}
    />
  );
}
