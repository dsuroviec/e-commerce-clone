import React from "react";

interface MenuProps {
  icon: React.ReactNode;
}

export const Menu = async ({ icon }: MenuProps) => {
  return (
    <>
      <button>{icon}</button>
    </>
  );
};
