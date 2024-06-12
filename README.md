
## Accordion Component Guide

### Figma Design
You can find the design specs for the Accordion component on Figma:
[View Design](https://www.figma.com/file/TAwJ3kWOqkw0o8UVtAMOHO/Accordion?node-id=0%3A1&t=1YEti8xBykw69tBH-1)

### Implementation Steps

#### 1. Import Data
Begin by reviewing the `data.js` file which contains an array named `questions`. Each object within this array holds the details for each question and its associated answer. Import this array into your main application file.

Example:
```javascript
import questions from "./data";
```

#### 2. Set Up State
Use the `useState` hook from React to manage the questions data. This state will allow you to dynamically modify and render the questions based on user interactions.

Example:
```javascript
const [data, setData] = useState(questions);
```

#### 3. Render Questions
Map over the `data` array to render a `SingleQuestion` component for each question. Pass necessary props to manage the visibility of the answer text.

Example:
```javascript
<Questions quests={data} buttonId={buttonId} setActive={setActive} />
```

#### 4. Toggle Visibility
In the `SingleQuestion` component, manage the visibility of the answer text using a boolean flag that toggles when the question header is clicked.

Example:
```javascript
const isActive = id === buttonId;
<button onClick={() => setActive(id)}>
  {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
</button>
<p>{isActive ? info : ""}</p>
```

#### 5. Manage Active Question
Implement functionality to ensure that only one answer can be expanded at a time. This involves managing which question's button is active through a unique identifier.

Example:
```javascript
const setActive = (id) => {
  id !== buttonId ? setButtonId(id) : setButtonId(null);
};
```

### Extra Challenge
Enhance the component by adding animations for expanding and collapsing the answers, or by saving the open state to local storage so it persists across page reloads.

### Code Overview

#### App Component
This is the main component where the state for the active button ID is managed and the `Questions` component is rendered.

```javascript
import { useState } from "react";
import questions from "./data";
import Questions from "./Questions";

const App = () => {
  const [buttonId, setButtonId] = useState(null);

  const setActive = (id) => {
    id !== buttonId ? setButtonId(id) : setButtonId(null);
  };

  return (
    <main>
      <Questions quests={questions} buttonId={buttonId} setActive={setActive} />
    </main>
  );
};

export default App;
```

#### Questions Component
This component is responsible for rendering each `SingleQuestion` component.

```javascript
import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ quests, buttonId, setActive }) => {
  return (
    <div className="container">
      {quests.map((single) => (
        <SingleQuestion
          key={single.id}
          {...single}
          buttonId={buttonId}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

export default Questions;
```

#### SingleQuestion Component
Each question is rendered with a toggle button to show or hide its answer.

```javascript
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, buttonId, setActive }) => {
  const isActive = id === buttonId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="question-btn"
          onClick={() => setActive(id)}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{isActive ? info : ""}</p>
    </article>
  );
};

export default SingleQuestion;
```

---
