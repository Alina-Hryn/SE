import * as React from "react";
import "./Main.css";

export const Main = () => {
  return (
    <div style={{ marginBottom: 30 }}>
      <iframe
        width="1113"
        height="626"
        src="https://www.youtube.com/embed/rrqqzjNZGzQ"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="movieDescriptionBanner">
        <div style={{ paddingLeft: 36, paddingBottom: 10, paddingTop: 10 }}>
          <a>Little Women</a>
        </div>
      </div>
    </div>
  );
};
