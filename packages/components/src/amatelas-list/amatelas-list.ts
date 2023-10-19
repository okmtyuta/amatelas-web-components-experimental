import styles from "./amatelas-list.module.scss";

export class AmatelasList extends HTMLElement {
  list: string[] | undefined;

  connectedCallback() {
    this.list = this.getAttribute("list")?.split("|") || [];
    this.render();
  }

  render() {
    if (this.list) {
      const li = `${this.list
        .map((item) => {
          return `<li class=${styles["list-item"]}>${item}</li>`;
        })
        .join("")}`;

      this.innerHTML = `
        <ul class=${styles["list"]}>
        ${li}
        </ul>
      `;
    }
  }
}
