import React from "react";
import InGame from "./components/InGame";
import InResult from "./components/InResult";
import { TodoContext } from "./components/ReactContext";
import RulesModal from "./components/RulesModal";
import ScoreContainer from "./components/ScoreContainer";
function App() {
  const {
    seeResult,
  } = React.useContext(TodoContext)

  return (
    <main className="container-fluid d-flex flex-column p-1 text-white gap-4">
      <ScoreContainer />
      {seeResult ? <InResult /> : <InGame />}
      <RulesModal />

    </main>
  );
}

export default App;
