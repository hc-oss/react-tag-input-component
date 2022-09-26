/**
 * A minimal utility to combine classes
 *
 * @export
 * @param {(string[] | string | undefined)} obj
 * @returns {string}
 */
export default function cc(...obj: (string | number | undefined)[]): string {
  return obj.filter(c => c).join(" ");
}
