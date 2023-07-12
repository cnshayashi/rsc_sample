"use client"

import { css } from "@/styled-system/css";
import React from "react";
import { useDispatch, useStore } from "../checkdContext";

export default function Check() {
  const checked = useStore();
  const setChecked = useDispatch();

  return (
    <>
      <div
        className={css({
          margin: "10px",
        })}
      >
        <label>
          <input type="checkbox" onChange={() => setChecked(prev => !prev)} checked={checked} />
          利用規約に同意します。
        </label>
      </div>
    </>
  );
}
