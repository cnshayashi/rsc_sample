"use client"
/* recoilを設定するコンポーネントはclientでなければならない */

import React, { useRef } from "react";
import { css } from "@/styled-system/css";
import { useSetRecoilState } from "recoil";
import { sampleAtom } from "../sampleAtom";


const buttonStyle = css({
  margin: "10px",
  border: "1px solid",
  backgroundColor: "lightgray",
});

const textBoxStyle = css({
  margin: "10px",
  border: "1px solid",
});

export default function RecoilSetterComponent() {
  const dispatch = useSetRecoilState(sampleAtom);

  const idRef = useRef<HTMLInputElement>(null);
  const foodRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <label>
        Id:
        <input className={textBoxStyle} type="number" ref={idRef} />
      </label>
      <label>
        Food:
        <input className={textBoxStyle} type="text" ref={foodRef} />
      </label>
      <button className={buttonStyle} onClick={() => dispatch({ id: Number(idRef.current?.value), food: foodRef.current?.value })}>
        Set!
      </button>
    </>
  )
}