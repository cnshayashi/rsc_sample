"use client"

import { css } from "@/styled-system/css";
import React from "react";
import { useStore } from "../checkdContext";

export default function Button() {
  const checked = useStore();

  return (
    <>
      <button
        type="button"
        onClick={() => alert(checked ? "確定しました" : "同意してください")}
        className={css({
          margin: "10px",
          border: "1px solid black",
          backgroundColor: "lightgray",
          padding: "5px",
          width: "100px"
        })}
      >
        確定
      </button>
    </>
  );
}
