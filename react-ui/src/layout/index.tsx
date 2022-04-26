import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren<{}>> = (props) => {
  return <div className="layout">{props.children}</div>;
};

export default Layout;
