'use client'

import Link from "next/link";
import styles from '@/app/ui/navbar.module.css'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    interface NavLink {
        id: number
        title: string,
        href: string,
        content: string,
    }

    const links: NavLink[] = [
        {
            id: 1,
            title: "La page d'accueil",
            href: "/",
            content: "Accueil"
        },
        {
            id: 2,
            title: "Mes compétences",
            href: "/skills",
            content: "Compétences"
        },
        {
            id: 3,
            title: "Mes projets personnels",
            href: "/projects",
            content: "Projets"
        },
        {
            id: 4,
            title: "Mon parcours",
            href: "/education",
            content: "Parcours"
        },
    ];
    const pathname = usePathname();

    return (
        <div className={styles.navbar}>
            <ul className={styles.navMenu}>
                {links.map(link =>
                    <li key={link.id}>
                        <Link
                            href={link.href}
                            title={link.title}
                            className={`${styles.link} ${pathname === link.href && styles.active}`}>
                            {link.content}
                        </Link>
                    </li>)}
            </ul>
        </div>
    );
}