export const createCSSClass = (staticClass, dynamicClass) => {
  let result = staticClass.join(' ').trimEnd();
  if (!dynamicClass) return result;
  Object.entries(dynamicClass).forEach(([key, value]) => {
    if (value) result += ` ${key}`;
  });
  return result.trim();
};
