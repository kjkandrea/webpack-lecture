class FormView {
  constructor() {
    this.formEl = document.createElement("form");
  }

  render() {
    this.formEl.innerHTML = `
      <input type="text" />
      <input type="submit" />
    `;
    this.domContentRender();
  }

  domContentRender() {
    document.body.append(this.formEl);
  }
}

export default new FormView();
