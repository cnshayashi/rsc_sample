"use client"
/* createContextを内部で使っているためclient componentとしてしか使えない */

import makeContext from "@/app/_utils/makeContext";

export type SampleContextType = {
  name?: string,
  type?: number,
}

const initialState: SampleContextType = {};

const [SampleContextProvider, useSampleStore, useSampleDispatch] = makeContext(initialState);

export { SampleContextProvider, useSampleStore, useSampleDispatch };
