export default class UserInfo {
  constructor({ profileName, profileDescription }) {
    this._profileName = document.querySelector(profileName);
    this._profileDescription = document.querySelector(profileDescription);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  getUserInfo() {
    const result = {
      'profile-name': this._profileName.textContent,
      'profile-description': this._profileDescription.textContent
    }

    return result;
  }

  setUserInfo(data) {
    this._profileName.textContent = data['profile-name'];
    this._profileDescription.textContent = data['profile-description'];
  }
}
