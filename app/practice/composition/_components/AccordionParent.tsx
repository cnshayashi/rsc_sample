"use client"

import { css } from "@/styled-system/css";
import React, { useState } from "react";

export default function AccordionParent({ group, childNum, children }: { group: string, childNum: number, children: React.ReactNode }) {
  const [showContents, setShowContents] = useState(true);

  return (
    <div className={wrapper}>
      <button className={button} onClick={() => setShowContents(prev => !prev)}>
        {group}
      </button>
      <div
        style={{
          height: showContents ? `${50 * childNum}px` : "0px",
          opacity: showContents ? 1 : 0,
        }}
        className={innerContent}
      >
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

const wrapper = css({
  marginBottom: "1px",
  width: "100%",
});

const button = css({
  width: "100%",
  height: "50px",
  color: "black",
  backgroundColor: "lightgray",
  cursor: "pointer",
})

const innerContent = css({
  transition: "height 0.2s linear",
  overflow: "hidden",
  backgroundColor: "whitesmoke",
})
