import { isNil, always, ifElse, contains } from "ramda";
import { darken as d, lighten as l } from "polished";

export const darken = (color: string) => (v: number) => d(v, color);
export const lighten = (color: string) => (v: number) => l(v, color);

export const safeIncludes = (x: any, y: any[] | undefined) =>
  ifElse(isNil, always(false), contains(x))(y);
