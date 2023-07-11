"use client"
/* contextを設定するコンポーネントはclientでなければならない */

import React, { useRef } from "react";
import { useSampleDispatch } from "../sampleContext";
import { css } from "@/styled-system/css";


const buttonStyle = css({
  margin: "10px",
  border: "1px solid",
  backgroundColor: "lightgray",
});

const textBoxStyle = css({
  margin: "10px",
  border: "1px solid",
});

export default function ContextSetterComponent() {
  const dispatch = useSampleDispatch();

  const nameRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <label>
        Name:
        <input className={textBoxStyle} type="text" ref={nameRef} />
      </label>
      <label>
        Type:
        <input className={textBoxStyle} type="number" ref={typeRef} />
      </label>
      <button className={buttonStyle} onClick={() => dispatch({ name: nameRef.current?.value, type: Number(typeRef.current?.value) })}>
        Set!
      </button>
    </>
  )
}