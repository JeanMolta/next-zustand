"use client"

import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
  dec: () => void
}

const useStore = create<Store>()((set) => ({
  count: 1000,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}))

export default function Counter() {
  const { count, inc, dec } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
      <button onClick={useStore.getState().dec}>one down</button>
    </div>
  )
}