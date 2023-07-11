import React from "react";
import RecoilSetterComponent from "./_components/RecoilSetterComponent";
import RecoilGetterComponent from "./_components/RecoilGetterComponent";

export default function ReactPage() {
  return (
    <>
      <RecoilSetterComponent />
      <hr />
      <RecoilGetterComponent />
    </>
  )
}