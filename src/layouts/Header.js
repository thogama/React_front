import React, { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { RiArrowDropDownLine } from "react-icons/ri"
import { AiOutlineSearch } from "react-icons/ai"

import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
  Table,
} from "reactstrap";
import realLogo from "../assets2/logo-nome-lateral-white-circle.png"
import user1 from "../assets/images/users/user1.jpg";
import { TextField } from "../components/TextField";
import { Formik, Form } from "formik";
import { selectCards } from "../services/api";
import Card from "../components/Card";
import { AuthContext } from "../contexts/auth";
import { BsSearch } from "react-icons/bs"
import ProjectTables from "../components/dashboard/ProjectTable";
import CardHelper from "../views/Helper";
const Header = (props) => {


  const { logout, user } = useContext(AuthContext)
  const handleLogout = () => {
    logout()
  }
  console.log(user)
  user.image = user1
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);




  const [cards, setCards] = useState([])
  const [renderCards, setrenderCards] = useState(true)


  async function handlePesquisa(param) {
    const cards = await selectCards(param)

    setCards(cards.data)
    setrenderCards(false)
    console.log(cards)



  }




  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <>
      <div style={{
        boxShadow: "0 0 4px rgb(0 0 0 / 28%)",
        backgroundColor:"#f5f5f5",
        
        display: "flex",
        flexDirection: "row",
        flexWrap: "no-wrap",
        alignItems: "center",
        justifyContent: "space-between",
        lineHeight: "1",
        padding: "0 30px",
        height: "72px",
        top:0,
        width:"100%",
        position: "fixed",
        zIndex: 10,
        color: "#333333",
        padding: "0 20px"
      }}>
        <div>
          <GiHamburgerMenu color="#2962ff " style={{ fontSize: "20px" }} />

        </div>
        <div id="input_on_header" style={{display:"flex",position:"relative",left:15,width:"100%"}}>
        <AiOutlineSearch color="grey"  size={20}  />

          <input id="search_box"  placeholder="Busque atendimento" style={{border:"0",outline:"none",backgroundColor:"#f5f5f5",width:"100%"}}
           className="border-0"/>
            
        </div>
      
      <RiArrowDropDownLine color="#2962ff" size={50} style={{ fontSize: "35px",marginLeft:"0.5rem" }} />

      <img style={{ display: "block", objectFit: "cover", width: "2.5rem", borderRadius: "100%",border:"1px solid #2962ff ",padding:"1px" }} src={user.image} />





    </div>


    </>
  );

};

export default Header;