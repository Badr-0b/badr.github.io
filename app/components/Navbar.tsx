'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link href="/">
                        PORTFOLIO <span className="dev-badge">[IN DEV]</span>
                    </Link>
                </div>
                <ul className="navbar-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
