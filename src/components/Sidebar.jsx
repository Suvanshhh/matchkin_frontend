import React from "react";

const Sidebar = () => (
  <aside className="sidebar">
    <div className="user-profile">
      <img src="https://i.postimg.cc/TYCs1QXf/neutral.jpg" alt="User" className="avatar" />
      <h3>Welcome to the ChatRoom!</h3>
      {/* <span>User</span> */}
    </div>
    <div className="chat-list">
      <input type="text" className="search" placeholder="Search chats..." />
      {/* Example list */}
      <div className="chat-item active">
        <img src="https://i.postimg.cc/C1hcNgwX/72846bf0-263d-47c7-a838-8c83a1d28913.jpg" alt="A" className="avatar" />
        <div>
          <div className="chat-username">User</div>
          <div className="chat-last">Hey there 👋</div>
        </div>
      </div>
      {/* <div className="chat-item">
        <img src="https://i.postimg.cc/7YZMQ98G/db40c047-22e9-48cc-9f0b-3832ff87e92e.jpg" alt="B" className="avatar" />
        <div>
          <div className="chat-username">User_2</div>
          <div className="chat-last">See you soon!</div>
        </div>
      </div> */}
    </div>
  </aside>
);

export default Sidebar;
