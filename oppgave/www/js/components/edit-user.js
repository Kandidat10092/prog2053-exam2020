import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  constructor() {
    super();
    this.user = {
      uname: '',
      firstName: '',
      lastName: '',
      oldPwd: '',
      pwd: ''
    };
  }


  static get styles() {
    return css`
      div { cursor: pointer; font-size: 20px; margin-bottom: 10px; }
    `;
  }

  // For some reason I can't load the page if I have anything else in the username placeholder (even if I delete it, weird bug?)
  render() {
    return html`
      <ul>
      <div>
        <label for="uname">Username</label>
        <input type="text" placeholder="${this.uname}" name="uname">
      </div>
      <div>
        <label for="firstName">First Name</label>
        <input type="text" placeholder="${this.firstName}" name="firstName">
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input type="text" placeholder="${this.lastName}" name="lastName">
      </div>
      <div>
        <label for="oldPwd">Old Password</label>
        <input type="password" placeholder="" name="oldPwd">
      </div>
      <div>
        <label for="pwd">New Password</label>
        <input type="password" placeholder="" name="uname">
      </div>
      </ul>
    `;
  }

}
customElements.define('edit-user', EditUser);
