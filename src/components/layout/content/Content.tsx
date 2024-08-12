import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Content({ children }: Props) {
  return (
    <div className="content">
      <div className="content__layout">
        <div className="content__header">
          <div className="content__header--title">Title</div>
          <div className="content__header--overview">Overview</div>
        </div>
        <div className="content__container">{children}</div>
      </div>
    </div>
  );
}

export default Content;
