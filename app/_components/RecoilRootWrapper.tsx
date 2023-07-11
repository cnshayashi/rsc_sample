"use client"

import React from "react";
import { RecoilRoot } from "recoil";

/**
 * server componentで使えるように、
 * "use client"を付与したclient componentのラッパーを用意
 */
export default function RecoilRootWrapper({
  children,
}: {
  children: React.ReactNode,
}) {
  return <RecoilRoot>{children}</RecoilRoot>
}
