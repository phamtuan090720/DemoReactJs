import React from "react";

export default function ChildrenProps(props) {
  return (
    <div>
      <h3>*ChildrenProps</h3>
      {props.children}
    </div>
  );
}
