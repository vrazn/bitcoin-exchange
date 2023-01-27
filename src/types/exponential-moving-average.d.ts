declare module 'exponential-moving-average' {
  export default function (
    array: number[],
    options: number | { range: number }
  ): number[];
}
