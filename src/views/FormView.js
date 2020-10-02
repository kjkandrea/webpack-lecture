class FormView {
  render() {
    document.getElementById("search-form").innerHTML = `
      <input type="text" />
      <input type="submit" />
    `;
  }
}

export default new FormView();
