import React, { useState } from "react";
import { Link } from "react-router-dom";
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
} from "reactstrap";
import realLogo from "../assets2/logo-limpa.png"
import user1 from "../assets/images/users/user1.jpg";
import { TextField } from "../components/TextField";
import { Formik, Form } from "formik";
import { selectCards } from "../services/api";
import Card from "../components/Card";
import Sidebar from "./Sidebar";
const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);




  const [cards, setCards] = useState([])



  async function handlePesquisa(param) {
    const cards = await selectCards(param)

    setCards(cards.data)

    console.log(cards.data)
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


      <Navbar style={{}} color="primary" dark expand="md">
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }} className="headerRoot">
          <NavbarBrand style={{ marginRight: "0" }} className="d-lg-none">
            <img onClick={() => showMobilemenu()} style={{ maxHeight: "54px" }} src={realLogo} />
          </NavbarBrand>


          <div className="hstack gap-2">
            <Button
              color="success"
              size="lg"
              style={{ padding: "1px", height: "48px", border: "0", backgroundColor: "#214ecc" }}
              onClick={Handletoggle}
            >
              {isOpen ? (
                <i className="bi bi-x"></i>
              ) : (
                <i className="bi bi-three-dots-vertical"></i>
              )}
            </Button>
          </div>
          <div style={{ width: "100%" }}>
            <Formik
              initialValues={{}}
              onSubmit={() => { }}
            >
              {({ errors, values }) => (

                <Form onSubmit={(e) => {
                  e.preventDefault()

                  handlePesquisa(values.pesquisa)

                }}  >

                  <TextField errorsOn={false} placeHolder={"Ache um atendimento"} type="text" name="pesquisa" label={""} />

                </Form>
              )}

            </Formik>
          </div>




        </div>




        <Collapse navbar isOpen={isOpen}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/starter" className="nav-link">
                Starter
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                DD Menu
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>

          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle color="primary">
              <img
                src={user1}
                alt="profile"
                className="rounded-circle"
                width="30"
              ></img>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Info</DropdownItem>
              <DropdownItem>My Account</DropdownItem>
              <DropdownItem>Edit Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>My Balance</DropdownItem>
              <DropdownItem>Inbox</DropdownItem>
              <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Collapse>
      </Navbar>
      <div  style={{ display: "flex", padding: "20px", flexDirection: "column" }}>
        
          {cards.map(e => {
            const { nome, cnpj, logomarca, } = e

            return <Card name={nome} cnpj={cnpj} image={logomarca} />

          })}
      </div>
    </>
  );

};

export default Header;