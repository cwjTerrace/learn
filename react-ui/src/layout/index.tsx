import React, { PropsWithChildren } from "react";

interface IProps {
  style?: React.CSSProperties;
}

function Layout(props: PropsWithChildren<IProps>) {
  return (
    <div className="layout" style={props.style}>
      {props.children}
    </div>
  );
}

export default Layout;
