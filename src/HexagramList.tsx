import React, { useState, useEffect } from "react";
import { getHexaImageURL, getHexaNameWithIndex } from "./hexaGenerate";

const HexagramCell = ({ index }) => {
  const [imageURL, updateImageURL] = useState("");
  const [contentName, updateContentName] = useState("");

  useEffect(() => {
    getHexaImageURL(index).then((imageURL) => updateImageURL(imageURL));
    updateContentName(getHexaNameWithIndex(index));
  }, [index]);

  return (
    <a
      href={`https://www.google.com.hk/search?q=${contentName}+site%3Aeee-learning.com`}
      target="_blank"
    >
      <span>{contentName}</span>
      <img src={imageURL} alt="" />
    </a>
  );
};

export const HexagramList = ({ focus }) => {
  if (focus?.length === 6) {
    return <HexagramCell index={parseInt(focus, 2)}></HexagramCell>;
  }

  return Array.from({ length: 64 }).map((_, index) => (
    // index would exactly be the key, the content will never update
    <HexagramCell index={index} key={index}></HexagramCell>
  ));
};
