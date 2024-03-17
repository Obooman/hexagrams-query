import React, { useState, useEffect, useRef } from "react";
import { getHexaImageURL } from "./hexaGenerate";
import { HexagramList } from "./HexagramList";

export const App = () => {
  const [hexaValue, updateHexaValue] = useState("1101010");

  return (
    <div>
      <aside id="aside">
        <div style={{ width: "100%" }}>
          <textarea
            type="number"
            placeholder="Input your hexa code"
            id="hexaCode"
            value={hexaValue}
            onInput={(event) => {
              updateHexaValue(event.target.value);
            }}
          ></textarea>
        </div>
        <HexagramList focus={hexaValue}></HexagramList>
      </aside>
      <main>
        <article></article>
      </main>
    </div>
  );
};
