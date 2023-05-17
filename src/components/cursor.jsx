import React from "react";

import '../styles/Cursor.scss';

export const Cursor = ({height=45, width=30}) => {
  return (
    <div className="cursor">
      <div className="cursor__inner" style={{height:height, width:width}}></div>
    </div>
  );
}