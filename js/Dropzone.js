class Dropzone extends HTMLElement {
  constructor() {
    super();
    this.setup();
    this.customDrop = () => {
      console.log("setup custom drop to handle drop event");
    };
  }

  setup() {
    console.log("setting up Dropzone...");
    const container = createElement("div", "");
    container.appendChild(this.addSlot("dropzone-item"));
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(container);

    this.setupDragEvents();
  }

  setupDragEvents() {
    this.ondragover = (evt) => evt.preventDefault();
    this.ondragenter = (evt) => this.handleDragEnter(evt);
    this.ondragleave = (evt) => this.handleDragLeave(evt);
    this.ondrop = (evt) => this.handleDrop(evt);
  }

  handleDragEnter(evt) {
    evt.preventDefault();
    this.classList.add("drag-enter");
  }

  handleDragLeave(evt) {
    evt.preventDefault();
    this.classList.remove("drag-enter");
  }

  handleDrop(evt) {
    evt.preventDefault();
    this.customDrop(evt);
    this.classList.remove("drag-enter");
  }
}
