import React from "react";

interface NavDropdownProps {
    title?: string;
    className?: string;
    icon?: React.ReactNode;
    dropdownContent: React.ReactNode;
}

export const NavDropdown = ({
    title,
    icon,
    dropdownContent,
    className,
}: NavDropdownProps) => {
    return (
        <>
            <button className={`flex items-center ml-1 ${className}`}>
                {title}
                {icon}
                {dropdownContent}
            </button>
        </>
    );
};
