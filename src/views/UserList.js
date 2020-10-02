import axios from "axios";

class UserList {
  constructor() {
    this.users = [];
  }

  async render() {
    const { data } = await axios.get("/api/users");
    this.users = data;
    this.domContentRender();
  }

  domContentRender() {
    const template = document.createElement("ul");
    template.innerHTML = this.users
      .map((user) => {
        return `<li><strong>${user.id}</strong> : ${user.name}</li>`;
      })
      .join("");

    document.body.append(template);
  }
}

export default new UserList();
