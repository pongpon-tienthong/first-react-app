import React from "react";
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>{props.username} You're awesome!</p>
    </div>
  );
}

export default userOutput;