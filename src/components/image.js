import React from "react";

const Image = ({ img }) => {
  return (
    <div>
      <img
        style={{ width: "320px", borderRadius: "var(--border-radius)" }}
        alt="A random dog"
        src={img}
      />
    </div>
  );
};

export default Image;
