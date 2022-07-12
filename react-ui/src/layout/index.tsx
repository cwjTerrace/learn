import { CSSProperties, PropsWithChildren } from "react";

import "./index.less";

interface IProps {
  style?: CSSProperties;
}

function Layout(props: PropsWithChildren<IProps>) {
  return (
    <div className="layout" style={props.style}>
      {props.children}
    </div>
  );
}

export default Layout;
