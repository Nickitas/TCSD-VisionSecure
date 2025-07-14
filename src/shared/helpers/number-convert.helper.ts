//#region numberConvert
/**
 *
 * @function numberConvert
 * @param value
 * @returns
 */
export const numberConvert = (value: number | undefined): string => {
  if (!value) return "0";

  return new Intl.NumberFormat("ru-RU", { style: "decimal", minimumFractionDigits: 0 }).format(
    value,
  );
};
//#endregion
