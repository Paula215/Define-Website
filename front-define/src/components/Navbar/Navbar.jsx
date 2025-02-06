import { useState, useEffect } from 'react';
import { FaBars, FaCaretDown, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo-sinfondo.png';

const NavLinks = [
    { id: 1, title: "Inicio", link: "/#" },
    {
        id: 2,
        title: "Servicios",
        link: "/#",
        submenu: [
            { id: 'service-1', title: "Cejas, Pestañas y Micropigmentación", link: "/#" },
            { id: 'service-2', title: "Peelings y Limpiezas Faciales", link: "/#" },
            { id: 'service-3', title: "Rejuvenecimiento", link: "/#" },
            { id: 'service-4', title: "Depilación", link: "/#" },
            { id: 'service-5', title: "Tratamientos Reductores y Estéticos", link: "/#" },
            { id: 'service-6', title: "Aplicaciones Intravenosas", link: "/#" },
        ]
    },
    { id: 3, title: "Quien soy", link: "/#" },
    { id: 4, 
        title: "Cursos Define", 
        link: "/#",
        submenu: [
            { id: 'curso-1', title: "Básico: Micropigmentación cejas, labios, ojos", link: "/#" },
            { id: 'curso-2', title: "Intermedio: Micropigmentación labios", link: "/#" },
            { id: 'curso-3', title: "Intermedio: Micropigmentación ojos", link: "/#" },
        ] 
    },
    { id: 5, title: "Contacto", link: "/#" }
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const checkWindowSize = () => {
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    const toggleDropdown = (id) => {
        if (activeDropdown === id) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(id);
        }
    };

    return (
        <nav className="bg-white shadow-md relative z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src={logo || "/placeholder.svg"} alt="Logo" className="w-24" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {NavLinks.map((item) => (
                            <div key={item.id} className="relative group">
                                <button
                                    className="flex items-center text-plomo hover:text-morado px-11 text-xl font-medium"
                                    onClick={() => toggleDropdown(item.id)}
                                >
                                    {item.title}
                                    {item.submenu && (
                                        <FaCaretDown className="ml-1" />
                                    )}
                                </button>
                                
                                {item.submenu && activeDropdown === item.id && (
                                    <div className="absolute left-0 mt-3 w-64 rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu">
                                            {item.submenu.map((subItem) => (
                                                <a
                                                    key={subItem.id}
                                                    href={subItem.link}
                                                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-lila hover:morado"
                                                    role="menuitem"
                                                >
                                                    {subItem.title}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden text-gray-700 hover:text-morado"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {NavLinks.map((item) => (
                            <div key={item.id}>
                                <button
                                    className="w-full flex items-center justify-between text-gray-700 hover:text-morado px-3 py-2 text-base font-medium"
                                    onClick={() => toggleDropdown(item.id)}
                                >
                                    {item.title}
                                    {item.submenu && (
                                        <FaCaretDown className={`ml-1 transform transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                                    )}
                                </button>
                                
                                {item.submenu && activeDropdown === item.id && (
                                    <div className="pl-4">
                                        {item.submenu.map((subItem) => (
                                            <a
                                                key={subItem.id}
                                                href={subItem.link}
                                                className="block px-3 py-2 text-base text-gray-600 hover:text-morado"
                                            >
                                                {subItem.title}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;