import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Loginpopup from "../../components/Register/Loginpopup";

function HomeLayout() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  return (
    <div>
      {isOverlayVisible && (
        <Loginpopup setIsOverlayVisible={setIsOverlayVisible} />
      )}

      <Header setIsOverlayVisible={setIsOverlayVisible} />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
