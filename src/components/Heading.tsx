import React from "react";

// rafce + tab      - ES7 snippet

type HeadingProps = {
  title: string;
};

const Heading = ({ title }: HeadingProps) => {
  return <div>{title}</div>;
};

export default Heading;
