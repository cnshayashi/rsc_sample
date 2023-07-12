import { css } from "@/styled-system/css";
import React from "react";
import Check from "./_components/Check";
import Button from "./_components/Button";
import { ContextProvider } from "./checkdContext";

export default function BadPage() {
  return (
    <ContextProvider>
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
      <Check />
      <hr />
      <Button />
    </ContextProvider>
  );
}
