import { useState } from "react";
import "./LazyImage.css";

export default function LazyImage({ src, alt = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="lazy-wrapper">
      {/* Skeleton */}
      {!loaded && <div className="skeleton" />}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}