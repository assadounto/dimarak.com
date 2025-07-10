'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const navLinks = [
  { label: "Home", link: "/" },
  { label: "Projects", link: "/projects" },
  { label: "About", link: "/about" },
];

interface NavLinksProps {
    onClick?: () => void;
    isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick, isMobile = false }) => {
    const currentPath = usePathname();

    return (
        <ul className={`flex ${isMobile ? 'flex-col space-y-8 mt-20' : 'items-center space-x-8'}`}>
            {navLinks.map((navlink, id) => (
                <li key={id}>
                    <Link href={navlink.link} passHref>
                        <span
                            onClick={onClick}
                            className={`font-medium cursor-pointer ${currentPath === navlink.link
                                ? 'text-primary dark:text-white'
                                    : 'text-body  dark:text-primary'
                                } hover:text-primary dark:hover:text-voilet`}
                        >
                            {navlink.label}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
