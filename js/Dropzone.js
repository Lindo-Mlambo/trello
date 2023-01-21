class Dropzone extends HTMLElement {
  static count = 0;
  constructor() {
    super();
    this.setAttribute("data-sys-gen-id", `dropzone-${Draggable.count++}`);
    this.setup();
  }

  setup() {
    const container = createElement("div", "");
    container.style.width = "100%";
    container.style.display = "flex";
    container.appendChild(this.addSlot("dropzone-child"));
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
    console.log(evt);
    evt.preventDefault();
    const sysGenId = evt.dataTransfer.getData("drag-item");
    evt.target.insertBefore(
      $(`[data-sys-gen-id="${sysGenId}"]`)[0],
      evt.target.childNodes[0]
    );
    this.classList.remove("drag-enter");
  }
}
