"use client"

import { css } from "@/styled-system/css";
import React, { useState } from "react";

export default function BadPage() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div
        className={css({
          margin: "10px"
        })}
      >
        <h3
          className={css({
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "5px"
          })}
        >
          利用規約
        </h3>
        <p>
          利用規約です。
        </p>
      </div>
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
      <hr />
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
