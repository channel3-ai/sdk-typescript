/* eslint-disable @typescript-eslint/no-explicit-any */

type CaseConverter = (str: string) => string;

const snakeToCamelCase: CaseConverter = (str: string): string =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));

const camelToSnakeCase: CaseConverter = (str: string): string =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const convertKeys = (obj: any, converter: CaseConverter): any => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeys(item, converter));
  }

  const newObj: { [key: string]: any } = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = converter(key);
      newObj[newKey] = convertKeys(obj[key], converter);
    }
  }
  return newObj;
};

export const toCamelCase = (obj: any) => convertKeys(obj, snakeToCamelCase);
export const toSnakeCase = (obj: any) => convertKeys(obj, camelToSnakeCase);
