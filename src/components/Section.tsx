import React, { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children?: ReactNode;
};

export const Section = ({
  children,
  title = "My Subheading",
}: SectionProps) => {
  return (
    <section className="my-6 border-2 rounded-tl-xl">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};
