"use client"

import { css } from "@/styled-system/css";
import Link from "next/link";
import React, { useState } from "react";

export type AccordionType = {
  group: string;
  pages: {
    title: string;
    url: string;
  }[];
};

export default function AccordionItem({ group, pages }: AccordionType) {
  const [showContents, setShowContents] = useState(true);

  return (
    <div className={wrapper}>
      <button className={button} onClick={() => setShowContents(prev => !prev)}>
        {group}
      </button>
      <div
        style={{
          height: showContents ? `${50 * pages.length}px` : "0px",
          opacity: showContents ? 1 : 0,
        }}
        className={innerContent}
      >
        <div>
          {pages.map(page =>
            <p className={linkStyle} key={page.title}>
              <Link href={page.url}>
                {page.title}
              </Link>
            </p>
          )}
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

const linkStyle = css({
  height: "50px",
  lineHeight: "50px",
  textAlign: "center",
  verticalAlign: "middle",
})
