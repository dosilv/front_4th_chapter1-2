import { VNode } from "./type";

export const isBooleanTrue = (value: any) =>
  typeof value === "boolean" && value;

export const isNumberZero = (value: any) => value === 0;

export const stringifyWhen = (value: any) =>
  typeof value === "string" || typeof value === "number";

export const returnEmptyStringWhen = (value: any) =>
  !value || isBooleanTrue(value);

export const isStringOrNum = (value: any): value is string | number =>
  typeof value === "string" || typeof value === "number";

export const isValidVNode = (vNode: any): vNode is VNode =>
  vNode && typeof vNode === "object" && Object.keys(vNode).includes("type");