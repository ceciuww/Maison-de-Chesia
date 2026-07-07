"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { InternshipItem } from "@/data/internships";

interface Props {
  item: InternshipItem | null;
  onClose: () => void;
}

export default function InternshipModal({ item, onClose }: Props) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = item ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <div
      className={`modal-overlay ${item ? "active" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {item && (
        <div className="modal-content">
          <button className="modal-close" onClick={onClose} aria-label="Close">
            &times;
          </button>
          <h2>{item.company}</h2>
          <p className="modal-period">{item.period}</p>
          <div className="modal-image">
            <Image
              src={item.modalImage}
              alt={item.company}
              width={700}
              height={438}
            />
          </div>
          <p className="modal-desc">{item.description}</p>
        </div>
      )}
    </div>
  );
}
