import React, { ReactNode } from "react";

type ListProps<T> = {
  items: T[];
  render: (item: T) => ReactNode;
};

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul className="my-10">
      {items.map((item, index) => {
        return <li key={index}>{render(item)}</li>;
      })}
    </ul>
  );
};

export default List;
