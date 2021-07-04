import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import SignalCellularAltOutlinedIcon from "@material-ui/icons/SignalCellularAltOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-container">
        <br />
        <img
          src="https://material-kit-react.devias.io/static/images/avatars/avatar_6.png"
          alt=""
        />
        <h4 className="profile-title">
          Katarina Smith
        </h4>
        <p>Senior Developer</p>
      </div>
      <hr />
      <br />
      <SidebarRow
        className="icon"
        title="Dashboard"
        Icon={SignalCellularAltOutlinedIcon}
      />
      <SidebarRow
        className="icon"
        title="Customers"
        Icon={PeopleAltOutlinedIcon}
      />
      <SidebarRow
        className="icon"
        title="Products"
        Icon={LocalMallOutlinedIcon}
      />
      <SidebarRow
        className="icon"
        title="Account"
        Icon={PersonOutlineOutlinedIcon}
      />
      <SidebarRow
        className="icon"
        title="Settings"
        Icon={SettingsOutlinedIcon}
      />
      <SidebarRow className="icon" title="Login" Icon={LockOutlinedIcon} />
      <SidebarRow
        className="icon"
        title="Register"
        Icon={PersonAddOutlinedIcon}
      />
      <SidebarRow
        className="icon"
        title="Error"
        Icon={ErrorOutlineOutlinedIcon}
      />
      <div className="need-more">
        <h3>Need More?</h3>
        <p>Upgrade to PRO version and access 20 more screens</p>
        <button className="btn-brand">Go Pro version</button>
      </div>
    </div>
  );
};

export default Sidebar;
