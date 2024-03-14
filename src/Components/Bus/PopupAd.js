import React, { useState } from "react";
import "./PopupAd.css";

export default function PopupAd() {
  const [isOpen, setIsOpen] = useState(true);
  const [marginTop, setMarginTop] = useState(0);

  const handleClose = () => {
    setIsOpen(false);
    setMarginTop(0)
  };

  return (
    <div className={`popup-ad ${isOpen ? 'open' : 'closed'}`} onClick={handleClose}>
      <div className="content">
        <img src="https://img.androidfreeware.net/screens/yygpKSi20tcvyEms1M3J0EvPz0_PSS0tTi1Kzs8rSc0r0UvOz9Uvc4_IKPBKSw-xdK7IMvf1jygKq3IxKsxOcnNNT_U3ys40MDRI0i22jPcoqSqJzPRJT6r08fVxMzBKDy0t9c0McHYEAA/com-goibibo-2.jpg?size=large" alt="Advertisement" className="blink" />
      </div>
    </div>
  );
}
