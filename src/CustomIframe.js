import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./components/Mockup1/Mockup1.scss";

export default function CustomIframe({ children, ...props }) {
  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe {...props} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
}
