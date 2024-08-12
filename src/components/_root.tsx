import Sidebar from "./layout/sidebar/sidebar";
import Content from "./layout/content/Content";
import OverviewContent from "./layout/content/OverviewContent";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function _root({ children }: Props) {
  return (
    <div className="root__container">
      <Sidebar />
      <Content>{children}</Content>
    </div>
  );
}

export default _root;
