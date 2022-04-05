const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Please check "${selector}" selector, no such element exist`);
};

export { getElement };
