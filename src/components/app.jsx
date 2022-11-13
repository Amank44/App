import React, { useState, useEffect } from "react";

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter,
  Icon,
  Row,
  Col,
  Badge,
} from "framework7-react";

// import AttendancePage from "../pages/attendance";
import routes from "../js/routes";
import store from "../js/store";
import "../assets/list-view.css";

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Framework7 Parameters
  const f7params = {
    name: "Bhakti Sadhana", // App name
    theme: "auto", // Automatic theme detection

    // App store
    store: store,
    // App routes
    routes: routes,
    // Register service worker (only on production build)
    serviceWorker:
      process.env.NODE_ENV === "production"
        ? {
            path: "/service-worker.js",
          }
        : {},
  };
  const alertLoginData = () => {
    f7.dialog.alert(
      "Username: " + username + "<br>Password: " + password,
      () => {
        f7.loginScreen.close();
      }
    );
  };
  f7ready(() => {
    // Call F7 APIs here
  });

  return (
    <App {...f7params}>
      {/* Left panel with cover effect*/}
      <Panel left cover reveal dark>
        <View tabs className="view-subnav">
          <Page>
            <div data-page="panel-leftmenu" className="page pagepanel">
              <div className="page-content">
                <nav className="main_nav_underline">
                  <ul>
                    <li>
                      <a href="" className="close-panel" data-view=".view-main">
                        <img
                          src="assets/image/icons/white/home.png"
                          alt=""
                          title=""
                        />
                       <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/tasks/"
                        className="close-panel"
                        data-view=".view-main"
                      >
                        <img
                          src="assets/image/icons/white/features.png"
                          alt=""
                          title=""
                        />
                        <span>Tasks</span>
                      </a>
                    </li>

                    <li><a href="#" data-popup=".popup-login" className="open-popup close-panel"><img
                      src="assets/image/icons/white/lock.png" alt="" title="" /><span>Login</span></a></li>
                    <li><a href="team.html" className="close-panel" data-view=".view-main"><img
                      src="assets/image/icons/white/users.png" alt="" title="" /><span>Team</span></a></li>
                    <li><a href="blog.html" className="close-panel" data-view=".view-main"><img
                      src="assets/image/icons/white/blog.png" alt="" title="" /><span>Blog</span></a></li>

                    <li><a href="photos.html" className="close-panel" data-view=".view-main"><img
                      src="assets/image/icons/white/photos.png" alt="" title="" /><span>Photos</span></a></li>
                    <li><a href="videos.html" className="close-panel" data-view=".view-main"><img
                      src="assets/image/icons/white/video.png" alt="" title="" /><span>Videos</span></a></li>
                    <li><a href="music.html" className="close-panel" data-view=".view-main"><img
                      src="assets/image/icons/white/music.png" alt="" title="" /><span>Music</span></a></li>

                    <li><a href="shop.html" className="close-panel" data-view=".view-main"><img
                      src="assets/image/icons/white/shop.png" alt="" title="" /><span>Shop</span></a></li>
                    <li className="subnav"><a href="categories.html"><img src="assets/image/icons/white/categories.png" alt=""
                      title="" /><span>Sub level menu</span></a></li>
                    <li><a href="cart.html" className="close-panel" data-view=".view-main"><img
                      src="assets/image/icons/white/cart.png" alt="" title="" /><span>Cart</span></a></li>

                    <li><a href="tables.html" className="close-panel" data-view=".view-main"><img
                      src="assets/image/icons/white/tables.png" alt="" title="" /><span>Tables</span></a></li>
                    <li><a href="chat.html" className="close-panel" data-view=".view-main"><img
                      src="assets/image/icons/white/message.png" alt="" title="" /><span>Chat messages</span></a></li>
                    <li><a href="form.html" className="close-panel" data-view=".view-main"><img
                      src="assets/image/icons/white/form.png" alt="" title="" /><span>Custom Form</span></a></li>


                    <li><a href="tel:012345678" className="close-panel external" data-view=".view-main"><img
                      src="assets/image/icons/white/phone.png" alt="" title="" /><span>Call now!</span></a></li>
                    <li><a href="contact.html" className="close-panel" data-view=".view-main"><img
                      src="assets/image/icons/white/contact.png" alt="" title="" /><span>Contact</span></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </Page>
        </View>
      </Panel>

      {/* Right panel with reveal effect*/}
      <div className="page-panel">
        <Panel right light reveal>
          <View>
            <Page>
              <div className="user_login_info">
                <div className="user_thumb">
                  <img src="assets/image/page_photo.jpg" alt="" title="" />
                  <div className="user_details">
                    <p>
                      Welcome, <span>Aman</span>
                    </p>
                  </div>
                  <div className="user_avatar">
                    <img src="assets/image/avatar.jpg" alt="" title="" />
                  </div>
                </div>
                <nav className="user-nav">
                  <ul>
                    <li>
                      <a href="account_setting.html" className="close-panel">
                        <img
                          src="assets/image/icons/blue/settings.png"
                          alt=""
                          title=""
                        />
                        <span>Account Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/account/" className="close-panel">
                        <img
                          src="assets/image/icons/blue/briefcase.png"
                          alt=""
                          title=""
                        />
                        <span> My Account</span>
                      </a>
                    </li>
                    <li>
                      <a href="chat.html" className="close-panel">
                        <img
                          src="assets/image/icons/blue/message.png"
                          alt=""
                          title=""
                        />
                        <span>Messages</span>
                        <strong>12</strong>
                      </a>
                    </li>
                    <li>
                      <a href="features.html" className="close-panel">
                        <img
                          src="assets/image/icons/blue/love.png"
                          alt=""
                          title=""
                        />
                        <span>Favorites</span>
                        <strong>5</strong>
                      </a>
                    </li>
                    <li>
                      <a href="index.php" className="close-panel">
                        <img
                          src="assets/image/icons/blue/lock.png"
                          alt=""
                          title=""
                        />
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </Page>
          </View>
        </Panel>
      </div>

      {/* Views/Tabs container */}
      <Views tabs className="safe-areas">
        {/* Tabbar for switching views-tabs */}
        <Toolbar tabbar labels bottom dark className="toolbarcolor">
          <Link
            tabLink="#view-home"
            tabLinkActive
            iconIos="f7:house_fill"
            iconAurora="f7:house_fill"
            iconMd="material:home"
            text="Home"
          />
          <Link
            tabLink="#view-attendance"
            iconIos="f7:calendar"
            iconAurora="f7:calendar"
            iconMd="material:calendar_today"
            text="Attendance"
          />
          <Link tabLink="#view-tasks">
            <Icon f7="layers_alt_fill">
              <Badge color="red">5</Badge>
            </Icon>
            <span>Tasks</span>
          </Link>
          <Link
            tabLink="#view-settings"
            iconIos="f7:gear"
            iconAurora="f7:gear"
            iconMd="material:settings"
            text="Settings"
          ></Link>
        </Toolbar>

        {/* Your main view/tab, should have "view-main" className. It also has "tabActive" prop */}
        <View id="view-home" main tab tabActive url="/" />

        {/* Catalog View */}
        <View id="view-attendance" name="attendance" tab url="/attendance/" />

        {/* Settings View */}
        <View id="view-settings" name="settings" tab url="/settings/" />

        {/* Tasks View */}
        <View id="view-tasks" name="tasks" tab url="/tasks/" />
      </Views>
      <View id="view-account" name="account" tab url="/account/" />
    </App>
  );
};
export default MyApp;
