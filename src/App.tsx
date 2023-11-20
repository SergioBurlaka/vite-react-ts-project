import React, { useState } from "react";
import Heading from "./components/Heading";


// це посилання на урок для якого  цей проект
// https://www.youtube.com/watch?v=gieEQFIfgYc&t=23212s

import { Section } from "./components/Section";

import List from "./components/List";

import Counter from "./components/Counter";
import NextCounter from "./components/lesson13/NextCounter";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Heading title="Head of aplication" />
      <Section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, et!t
      </Section>
      <Section
        title="Different title
      "
      />

      <Counter setCount={setCount}>Counter is {count}</Counter>

      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => (
          <h2 className="border-2 rounded-md p-4 bold">{item}</h2>
        )}
      />
      <NextCounter mainCount= {count} />
    </div>
  );
}

export default App;
