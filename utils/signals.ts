import { Signal } from "@preact/signals"

export const mySignal = new Signal<string>("Hello World")

export const page = new Signal<number>(1)

export const search = new Signal<string>("")


