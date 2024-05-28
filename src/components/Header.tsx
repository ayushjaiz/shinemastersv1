import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const navItems: string[] = ["Home", "Pricing", "Services", "About", "Contact Us"];

    return (
        <div className="bg-star flex items-center justify-between py-3 px-8 sticky z-50">
            <h3 className="font-bold text-3xl">ShineMasters</h3>

            <nav>
                <ul className="flex flex-row gap-3">
                    {navItems.map((item) => {
                        return (
                            <li className="list-none" key={item}>
                                <Link
                                    to="#"
                                    className="mx-4 font-medium text-gray-800 leading-6 
                                    active:border-b-2 active:border-black 
                                    hover:border-b-2 hover:border-black"
                                >
                                    {item}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <Link to="/signup">
                <div className="uppercase bg-danger text-white text-center min-w-32 py-2 px-4 font-medium leading-6 rounded hover:cursor-pointer">
                    LogIn
                </div>
            </Link>
        </div>
    )
}

export default Header;