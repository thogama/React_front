import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import Card from "../components/Card";
import CardHelper from "../views/Helper";
import Stats from "../views/Stats";
const FullLayout = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        {/* <aside>
          <Sidebar/>
        </aside> */}
        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          
          <Header style={{position:"fixed",
        top:0,}} />
          {/********Middle Content**********/}
          <Container style={{backgroundColor:"#f2f2f2",marginTop:"4.5rem"}} className="p-4 wrapper" fluid>
            <Outlet />
            <CardHelper/>
            <Stats/>
           

          </Container>
          {/******Footer*******/}
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
