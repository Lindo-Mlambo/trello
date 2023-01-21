class Draggable extends HTMLElement {
  static count = 0;
  constructor() {
    super();
    this.setAttribute("data-sys-gen-id", `draggable-${Draggable.count++}`);
    this.dropzone = false;
    this.setup();
  }

  setup() {
    const container = createElement("div", "");
    container.appendChild(this.addSlot("draggable-child"));
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(container);
    this.setAttribute("draggable", true);

    this.setupDragEvents();
  }

  setupDragEvents() {
    this.ondragstart = (evt) => this.handleDragStart(evt);
    this.ondragend = (evt) => this.handleDragEnd(evt);
    this.ondrop = (evt) => evt.preventDefault();
  }

  handleDragStart(evt) {
    evt.dataTransfer.setData("drag-item", evt.target.dataset.sysGenId);
  }

  handleDragEnd(evt) {
    // console.log("drag item dropped...");
  }
}
