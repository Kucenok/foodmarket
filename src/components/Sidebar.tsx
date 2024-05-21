import React from 'react';
import '../styles/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link, useLocation } from "react-router-dom";

interface LinkItem {
    path: string;
    name: string;
    icon: IconProp;
}

interface SidebarProps {
    links: LinkItem[];
    close: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ links, close }) => {
    const location = useLocation();

    return (
        <div className="sidebar" onClick={close}>
            {links.map((link) => (
                <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
