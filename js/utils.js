const $ = (q) => document.querySelectorAll(q);

const createElement = (type, id, classList = []) => {
  const element = document.createElement(type);
  element.setAttribute("id", id);
  element.setAttribute("class", classList.join(" "));

  return element;
};

HTMLElement.prototype.addSlot = (name) => {
  const slot = createElement("slot", "");
  slot.setAttribute("name", name);

  return slot;
};
