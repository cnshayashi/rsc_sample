"use client"
/* contextを読み取るコンポーネントはclientでなければならない */

import React from "react";
import { useSampleStore } from "../sampleContext";

export default function ContextGetterComponent() {
  const store = useSampleStore();

  return (
    <>
      <p>
        Name: {store.name ?? "undefined"}
      </p>
      <p>
        Type: {store.type ?? "undefined"}
      </p>
    </>
  )
}
