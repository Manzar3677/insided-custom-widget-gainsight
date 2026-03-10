import "./styles.css";

export default class CustomWidget {
  constructor(config) {
    this.config = config;
  }

  render(container) {
    const title = this.config.settings?.title || "Custom Widget";

    const widget = document.createElement("div");
    widget.className = "custom-widget";

    widget.innerHTML = `
      <h2>${title}</h2>
      <p>${this.config.settings?.description || ""}</p>
      <iframe 
        src="${this.config.component_data.config.url}" 
        width="100%" 
        height="300"
        frameborder="0">
      </iframe>
    `;

    container.appendChild(widget);
  }
}
