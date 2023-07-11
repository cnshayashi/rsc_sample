import { atom } from "recoil";

export type SampleAtomType = {
  id?: number,
  food?: string,
}

export const sampleAtom = atom<SampleAtomType>({
  key: "sample",
  default: {}
})
