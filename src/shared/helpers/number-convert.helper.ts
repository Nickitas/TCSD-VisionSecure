//#region numberConvert
/**
 *
 * @function numberConvert
 * @param value
 * @returns
 */
export const numberConvert = (value: number | undefined): string => {
  if (!value) return '0';

  return new Intl.NumberFormat(
    localStorage.getItem('i18nextLng') || 'ru',
  ).format(value);
};
//#endregion
