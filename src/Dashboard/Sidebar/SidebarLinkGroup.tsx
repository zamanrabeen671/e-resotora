import React, { useState } from "react";

type TProps = {
  children(handleClick: () => void, open: boolean): JSX.Element;
  activecondition: boolean;
};

function SidebarLinkGroup({ children, activecondition }: TProps) {
  const [open, setOpen] = useState<boolean>(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        activecondition && "bg-slate-900"
      }`}
    >
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;
