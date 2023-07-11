import React from "react";
import ContextSetterComponent from "./_components/ContextSetterComponent";
import ContextGetterComponent from "./_components/ContextGetterComponent";
import { SampleContextProvider } from "./sampleContext";

export default function ContextPage() {
  return (
    <SampleContextProvider>
      <ContextSetterComponent />
      <hr />
      <ContextGetterComponent />
    </SampleContextProvider>
  );
}
