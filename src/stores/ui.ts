import { atom } from "nanostores";

export type ToastBG = "primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark";
export interface IToast {
  message: string
  bg: ToastBG
  delay: number
  show: boolean
}

export const toasts = atom<Array<IToast>>([
  {
    message:"abc",
    bg:"danger",
    delay:3000,
    show:true
  }
]);

export function showToast(message:string, bg:ToastBG, delay:number) {
  const $toasts = toasts.get();
  let availableToast = $toasts.find((show) => !show);
  if (!availableToast) {
    availableToast = { message, bg, delay, show: true }
    $toasts.push(availableToast);
  } else {
    availableToast.message = message;
    availableToast.bg = bg;
    availableToast.delay = delay;
    availableToast.show = true;
  }
  toasts.set($toasts);
}