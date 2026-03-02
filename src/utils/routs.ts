export function addRoutPrefix<T extends Record<string, string>>(prefix: string, routes: T): { [K in keyof T]: string } {
  const result = {} as { [K in keyof T]: string };

  for (const key in routes) {
    if (routes.hasOwnProperty(key)) {
      result[key] = `${prefix}${routes[key]}`;
    }
  }
  return result;
}


export const ROUT_PREFIX = "/myplatform/";
