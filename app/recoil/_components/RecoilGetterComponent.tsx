"use client"
/* recoilを読み取るコンポーネントはclientでなければならない */

import React from "react";
import { useRecoilState } from "recoil";
import { sampleAtom } from "../sampleAtom";

export default function RecoilGetterComponent() {
  const [store] = useRecoilState(sampleAtom);

  return (
    <>
      <p>
        Id: {store.id ?? "undefined"}
      </p>
      <p>
        Food: {store.food ?? "undefined"}
      </p>
    </>
  )
}
