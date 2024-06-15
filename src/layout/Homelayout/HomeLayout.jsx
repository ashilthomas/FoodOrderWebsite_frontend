import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

import Slideover from "../../components/Slideover/Slideover";

function HomeLayout() {
  
  const [open, setOpen] = useState(false)
  return (
    <div>
    

        <Slideover open={open} setOpen={setOpen}/>
      <Header setOpen={setOpen} />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
