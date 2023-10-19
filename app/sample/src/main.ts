import { init } from "@okmtyuta/amatelas-web-components-experimental";

init();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <amatelas-list/>
  <div>ddd<div>
`;
