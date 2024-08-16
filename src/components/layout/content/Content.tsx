import React, { ReactNode } from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

function Content({ title, children }: Props) {
  return (
    <div className="content">
      <div className="content__layout">
        <div className="content__header">
          <div className="content__header--title">{title}</div>
        </div>
        <div className="content__container">{children}</div>
      </div>
    </div>
  );
}

export default Content;
