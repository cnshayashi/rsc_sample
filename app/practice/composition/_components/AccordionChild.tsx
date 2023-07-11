import { css } from "@/styled-system/css";
import Link from "next/link";
import React from "react";

export default function AccordionChild({ title, url }: { title: string, url: string }) {
  return (
    <p className={linkStyle}>
      <Link href={url} key={title}>
        {title}
      </Link>
    </p>
  )
}

const linkStyle = css({
  height: "50px",
  lineHeight: "50px",
  textAlign: "center",
  verticalAlign: "middle",
})
