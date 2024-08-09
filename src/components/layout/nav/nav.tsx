import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Nav({ children }: Props) {
  return <div className="nav">{children}</div>;
}

export default Nav;
