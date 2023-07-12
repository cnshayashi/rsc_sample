"use client"

import makeContext from "@/app/_utils/makeContext";

export type ContextType = boolean

const initialState: ContextType = false;

const [ContextProvider, useStore, useDispatch] = makeContext(initialState);

export { ContextProvider, useStore, useDispatch };
