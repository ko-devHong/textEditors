import React, { useEffect, useRef, useState } from "react";

const TextinputCompoent = (props) => {
  var titlelist = [];
  for (var i = 0; i < props.num; i++) {
    titlelist.push(
      <label>
        타이틀{i}:
        <input className="TitleInput" type="text" name={"title" + i} />
      </label>
    );
    titlelist.push(
      <label>
        내용{i}:
        <input className="TitleInput" type="text" name={"text" + i} />
      </label>
    );
    titlelist.push(<br />);
  }

  return titlelist;
};

export default TextinputCompoent;
