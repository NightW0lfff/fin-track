import Sidebar from "../layout/sidebar/Sidebar";
import Content from "../layout/content/Content";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

function MainLayout({ title, children }: Props) {
  return (
    <div className="MainLayout">
      <Sidebar />
      <Content title={title}>{children}</Content>
    </div>
  );
}

export default MainLayout;
