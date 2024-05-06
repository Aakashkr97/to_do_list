import React from "react";

export default function Todo({ item }) {
  return (
    <div className="todo-item">
      <h3>{item}</h3>
    </div>
  );
}
