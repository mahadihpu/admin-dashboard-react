import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div style={{padding:'10px'}}>
        <img
          style={{ height: "60px", width: "60px", borderRadius: "50%" ,marginLeft:'75px',marginBottom:'0px'}}
          src="https://material-kit-react.devias.io/static/images/avatars/avatar_6.png"
          alt=""
        />
        <h6 style={{ textAlign: "center",marginBottom:'0px'}}>Katarina Smith</h6>
        <p style={{ textAlign: "center" }}>Senior Developer</p>
      </div>
      <hr />
      <Link style={{ textDecoration: "none" }} to="/">
        <SidebarRow title="Dashboard" Icon={EqualizerOutlinedIcon} />
      </Link>
      <SidebarRow title="Customers" Icon={PeopleAltOutlinedIcon} />
      <SidebarRow title="Products" Icon={LocalMallOutlinedIcon} />
      <SidebarRow title="Account" Icon={AccountBoxOutlinedIcon} />
      <SidebarRow title="Settings" Icon={SettingsOutlinedIcon} />
      <SidebarRow title="Login" Icon={LockOutlinedIcon} />
      <SidebarRow title="Register" Icon={PersonAddOutlinedIcon} />
      <SidebarRow title="Error" Icon={ErrorOutlineOutlinedIcon} />
      <hr />
    </div>
  );
};

export default Sidebar;
