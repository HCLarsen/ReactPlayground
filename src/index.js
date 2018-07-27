import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const UserAvatar = ({ user, size }) => (
  <img
    className={`user-avatar ${size || ""}`}
    alt="user avatar"
    src={user.avatar}
  />
);

const UserStats = ({ user }) => (
  <div className="user-stats">
    <div>
      <UserAvatar user={user} />
      {user.name}
    </div>
    <div className="stats">
      <div>{user.followers} Followers</div>
      <div>Following {user.following}</div>
    </div>
  </div>
);

const Nav = ({ children }) => <div className="nav">{children}</div>;

const Content = () => <div className="content">main content here</div>;

const Sidebar = ({ children }) => <div className="sidebar">{children}</div>;

const Body = ({ sidebar, content }) => (
  <div className="body">
    <Sidebar>{sidebar}</Sidebar>
    {content}
  </div>
);

class App extends React.Component {
  state = {
    user: {
      avatar: "https://avatars0.githubusercontent.com/u/8650607?v=4",
      name: "Chris",
      followers: 1234,
      following: 123
    }
  };

  render() {
    const { user } = this.state;

    return (
      <div className="app">
        <Nav>
          <UserAvatar user={user} size="small" />
        </Nav>
        <Body sidebar={<UserStats user={user} />} content={<Content />} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
