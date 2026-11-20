import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <Image
            src="/Maison de Chesia.png"
            alt="Chesia"
            className="footer-logo-img"
            width={160}
            height={64}
          />
        </div>
        <p className="footer-text">
          Chesia Julian Pratiwi — Informatics Engineering, Jakarta State
          Polytechnic.
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} Chesia Julian Pratiwi. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
