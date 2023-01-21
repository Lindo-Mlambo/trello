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
    evt.preventDefault();
    const sysGenId = evt.dataTransfer.getData("drag-item");
    let dropTarget = evt.target;
    if (!dropTarget.classList.contains("drop-target")) {
      const targetParent = evt.target.closest("dropzone-widget");
      dropTarget = $(
        `[data-sys-gen-id="${targetParent.dataset.sysGenId}"] .drop-target`
      )[0];
    }

    dropTarget.insertBefore(
      $(`[data-sys-gen-id="${sysGenId}"]`)[0],
      dropTarget.childNodes[0]
    );
    this.classList.remove("drag-enter");
  }
}
