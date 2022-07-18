import React, { useEffect, useState } from "react"
import SearchContext from "./contexts/pesquisa";
import AppRoutes from "./routes/Router";


function App() {

  const [searchValue, setSearchValue] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <AppRoutes />
        </SearchContext.Provider>
      </header>
    </div>
  );
}

export default App;
