import React, { PropsWithChildren } from "react";

interface IProps {
  style?: React.CSSProperties;
}

const Layout: React.FC<PropsWithChildren<IProps>> = (props) => {
  return (
    <div className="layout" style={props.style}>
      {props.children}
    </div>
  );
};

export default Layout;
