import { init } from "./init";

init();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<amatelas-list list="football|baseball|basketball|golf|tennis"/>
`;
