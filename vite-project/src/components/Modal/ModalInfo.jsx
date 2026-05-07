import React, { useState, useEffect } from 'react';
import "./ModalInfo.css"
import image from "../../assets/Image 93.png"

export default function IntroModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Tự động mở modal sau khi trang web load xong
    setIsOpen(true);
  }, []);

  if (!isOpen) return null; // Nếu isOpen = false thì không vẽ gì ra màn hình cả

  return (
    <div className="modal-overlay text">
      <div className="modal-content">
        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        <h2>Discover Chefify</h2>
        <p>Easy and delicious cooking instructions right here. Start exploring now!</p>
        <img src={image} alt="Chefify" />
        <button className="button-next">Next</button>
        <button className="button-skip" onClick={() => setIsOpen(false)}>Skip</button>
      </div>
    </div>
  );
};