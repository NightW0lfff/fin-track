export default function timeOutStep(
  init: number,
  ratio: number,
  start: number,
  end: number
) {
  if (start === end) return init;
  return timeOutStep(init / ratio, ratio, start + 1, end);
}
