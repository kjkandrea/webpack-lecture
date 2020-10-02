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
    const template = document.getElementById("user-list");
    template.innerHTML = this.users
      .map((user) => {
        return `<li><strong>${user.id} : ${user.name}</li>`;
      })
      .join("");
  }
}

export default new UserList();
