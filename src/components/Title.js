import React from "react";

function Title({name, title}) {
  return (
    <div className="row">
      <div className="col-10 mx-auto">
        <h1>
          {name} <strong>{title}</strong>
        </h1>
      </div>
    </div>
  );
}

export default Title;
