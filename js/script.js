window.onload = () => {
  console.log("ready...");

  customElements.define("draggable-widget", Draggable);
  customElements.define("dropzone-widget", Dropzone);
};
