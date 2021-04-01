import React from "react";

export default function FunctionProps(props) {
  return (
    <div>
      <h3>*FunctionProps</h3>
      <p>
        Username: {props.username} - Lop: {props.lop}
      </p>
    </div>
  );
}
