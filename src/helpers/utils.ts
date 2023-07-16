export const pickQueryParams = <
  T extends Record<string, unknown>,
  K extends keyof T,
>(
  obj: T,
  keys: K[]
): string => {
  const queryParams: string[] = [];

  for (const key of keys) {
    const lowerCase = String(key).toLowerCase();

    if (obj) {
      const isKeyExist = Object.keys(obj).find(
        (k: string) => k.toLowerCase() === lowerCase
      );

      if (isKeyExist) {
        const value = obj[key];
        queryParams.push(
          `${encodeURIComponent(lowerCase)}=${encodeURIComponent(
            String(value)
          )}`
        );
      }
    }
  }

  return `?${queryParams.join('&')}`;
};

// export const pickQueryParams = <K extends string>(
//     obj: URLSearchParams,
//     keys: K[]
//   ): string => {
//     const queryParams: string[] = [];

//     for (const key of keys) {
//       const lowerCase = key.toLowerCase();

//       if (obj.has(lowerCase)) {
//         const value = obj.get(lowerCase);
//         if (value) {
//           queryParams.push(
//             `${encodeURIComponent(lowerCase)}=${encodeURIComponent(value)}`
//           );
//         }
//       }
//     }

//     return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
//   };
