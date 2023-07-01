import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="bg-gradient-to-b from-slate-300 to-slate-900 p-6 opacity-80 sticky top-0 z-50" >
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-3xl">
            Loc Bui
            </Link>
            <ul className="flex space-x-4">
            <li>
                <Link to="/" className="text-white hover:text-gray-200">
                Home
                </Link>
            </li>
            <li>
                <Link to="/more-info" className="text-white hover:text-gray-200">
                About
                </Link>
            </li>

            </ul>
        </div>
        </nav>
    );
};