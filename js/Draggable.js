class Draggable extends HTMLElement {
  constructor() {
    super();
    this.setup();
    this.customDragStart = () => {
      console.log("setup custom ondragstart to handle drag event");
    };
  }

  setup() {
    console.log("setting up Draggable...");

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
  }

  handleDragStart(evt) {
    console.log("drag started");
    this.customDragStart(evt);
  }

  handleDragEnd(evt) {
    console.log("drag item dropped...");
  }
}
