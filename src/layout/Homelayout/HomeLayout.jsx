import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Loginpopup from "../../components/Register/Loginpopup";
import Slideover from "../../components/Slideover/Slideover";

function HomeLayout() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [open, setOpen] = useState(false)
  return (
    <div>
      {isOverlayVisible && (
        <Loginpopup setIsOverlayVisible={setIsOverlayVisible} />
      )}

        <Slideover open={open} setOpen={setOpen}/>
      <Header setIsOverlayVisible={setIsOverlayVisible} setOpen={setOpen} />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
