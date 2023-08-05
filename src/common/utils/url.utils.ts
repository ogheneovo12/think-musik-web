/**
 *
 * @param baseUrl
 * @returns string
 * no supports for queryurl, unnecessary slash might  be appended to support django strict slash rule
 */
export const setBaseUrl = (baseUrl: string) => (url?: string) => {
  let generatedUrl = `${baseUrl}${url ? `/${url}` : ""}`;

  // Check if the last character of the URL is a slash
  if (generatedUrl.charAt(generatedUrl.length - 1) !== "/") {
    generatedUrl += "/";
  }

  return generatedUrl;
};
