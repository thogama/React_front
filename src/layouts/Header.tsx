import React, { useState, useContext, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { RiArrowDropDownLine } from "react-icons/ri"
import { AiOutlineSearch } from "react-icons/ai"
import SearchContext from "../contexts/pesquisa";
import dummy from "../assets/images/dummy.png"
import { AuthContext } from "../contexts/auth";
import * as bootstrap from "bootstrap"

const Header = () => {
  var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
  var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
  })

  const { setSearchValue } = useContext(SearchContext)

  const [searchValuesFromThis, setSearchValuesFromThis] = useState(null)
  const { logout, user, all } = useContext(AuthContext)
  const handleLogout = () => {
    logout()
  }


  useEffect(() => {
    console.log("info do user", all)
  }, [all])


  function handleSearch(e: any) {
    e.preventDefault()
    const input = document.getElementById("search_box")

    setSearchValue(input.getAttribute("value"))
  }


  return (
    <>
      <div style={{
        boxShadow: "0 0 4px rgb(0 0 0 / 28%)",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-between",
        lineHeight: "1",
        padding: "0 30px",
        height: "72px",
        top: 0,
        width: "100%",
        position: "fixed",
        zIndex: 10,
        color: "#333333",

      }}>
        <div>
          <GiHamburgerMenu color="#2962ff " style={{ fontSize: "20px" }} />

        </div>
        <div id="input_on_header" style={{ display: "flex", position: "relative", left: 15, width: "100%" }}>
          <AiOutlineSearch color="grey" size={20} />
          <form onSubmit={(e) => handleSearch(e)}>
            <input value={searchValuesFromThis} onChange={(e) => { setSearchValuesFromThis(e.target.value) }} id="search_box" placeholder="Busque atendimento" style={{ border: "0", outline: "none", backgroundColor: "#f5f5f5", width: "100%" }}
              className="ant-input border-0" />
          </form>
        </div>
        <div style={{ alignItems: "center" }} className="d-flex ">

          <div className="dropdown">
            <RiArrowDropDownLine id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              className=" dropdown-toggle" color="#2962ff"
              size={50} style={{ cursor: "pointer", fontSize: "35px", marginLeft: "0.5rem" }} />

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><div onClick={handleLogout} className="dropdown-item">
                Logout
              </div></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          <img style={{
            display: "block", objectFit: "cover",
            width: "2.5rem", borderRadius: "100%", border: "1px solid #2962ff ",
            padding: "1px"
          }} src={localStorage.getItem("foto") || dummy} />


        </div>




      </div>


    </>
  );

};

export default Header;