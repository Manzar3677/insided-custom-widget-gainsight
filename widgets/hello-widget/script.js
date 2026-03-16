function initWidget() {
  console.log("Hello widget loaded");

  const container = document.querySelector(".widget-container");

  if (container) {
    const msg = document.createElement("p");
    msg.textContent = "Widget initialized successfully!";
    container.appendChild(msg);
  }
}

initWidget();

  (async () => {
    const sdk = new window.WidgetServiceSDK();

    const result = await sdk.connectors.execute({
      permalink: "users-location",
      method: "GET",
      query: {
        appId: "D41D8CD98F00B204E9800998ECF8427E1FBE79C2",
        q: "Hyderabad"
      }
    });

    console.log(result);
    const createArticles = await sdk.connectors.execute({
      permalink: "create-articles",
      method: "POST"
    });

    console.log("createArticles:",createArticles);
  })();


