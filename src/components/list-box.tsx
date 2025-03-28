import { HTMLAttributes, PropsWithChildren } from "react";

export default function ListBox({ children, className }: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex flex-col gap-[0.5rem] ${className}`}>{children}</div>;
}
