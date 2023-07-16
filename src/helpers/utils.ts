export const pickQueryParams = <K extends string>(
  obj: URLSearchParams,
  keys: K[]
): string => {
  const queryParams: string[] = [];

  for (const key of keys) {
    if (obj.has(key)) {
      const value = obj.get(key)?.toLocaleLowerCase();
      if (value) {
        queryParams.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        );
      }
    }
  }

  return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
};
