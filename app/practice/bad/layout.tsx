import { css } from "@/styled-system/css";
import React from "react";
import AccordionItem, { AccordionType } from "./_components/AccordionItem";

const accordionData: AccordionType[] = [
  {
    group: "home",
    pages: [
      {
        title: "home",
        url: "/",
      },
    ],
  },
  {
    group: "state",
    pages: [
      {
        title: "context",
        url: "/context",
      },
      {
        title: "recoil",
        url: "/recoil",
      },
    ],
  },
  {
    group: "metadata",
    pages: [
      {
        title: "server",
        url: "/metadata/server",
      },
      {
        title: "client",
        url: "/metadata/client",
      },
    ],
  },
  {
    group: "practice",
    pages: [
      {
        title: "bad",
        url: "/practice/bad",
      },
      {
        title: "composition",
        url: "/practice/composition",
      },
    ],
  },
];

export default function BadLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={wrapperStyle}>
        <div
          className={headerStyle}>
          <p className={titleStyle}>ページタイトル</p>
        </div>
        <div className={bodyStyle}>
          <div className={sideStyle}>
            {accordionData.map((item, index) => (
              <AccordionItem group={item.group} pages={item.pages} key={index} />
            ))}
          </div>
          <div className={contentStyle}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

const wrapperStyle = css({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
})

const headerStyle = css({
  width: "100%",
  height: "100px",
  textAlign: "center",
  verticalAlign: "middle",
  borderBottom: "2px solid gray",
})

const titleStyle = css({
  fontSize: "40px",
  lineHeight: "100px",
});

const bodyStyle = css({
  flexGrow: 1,
  display: "flex",
  flexDirection: "row",
})

const sideStyle = css({
  height: "100%",
  width: "200px",
  borderRight: "1px solid gray",
})

const contentStyle = css({
  flexGrow: 1,
})
