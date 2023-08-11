import { useState } from "react";
import questions from "./data";
import Questions from "./Questions";
const App = () => {
  const [data, setData] = useState(questions);

  const [buttonId, setButtonId] = useState(null); // this gets given to every child component
  // since its null it can be a falsey

  const setActive = (id) => {
    id !== buttonId ? setButtonId(id) : setButtonId(null);
  };

  return (
    <main>
      <Questions quests={data} buttonId={buttonId} setActive={setActive} />
    </main>
  );
};
export default App;
