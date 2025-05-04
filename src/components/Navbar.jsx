import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: "ChatBot", path: "/Chatbot" },
  ];

  const dropdowns = {
    Products: [
      {
        title: "Chat Bot",
        description: "24/7 automated conversations for your business",
        icon: "💬",
      },
      {
        title: "CRM Billing",
        description: "Streamlined billing and customer management",
        icon: "📊",
      },
      {
        title: "IoT",
        description: "Connect and manage smart devices with ease",
        icon: "📡",
      },
    ],
  };

  return (
    <nav className="bg-[#e0e4eb] top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/assests/images/logo.png" alt="Company Logo" className="h-24 sm:h-28 w-auto" />
          </div>

          {/* Center Navigation - visible on md and up */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[#302350] text-base lg:text-lg font-medium hover:text-[#ec4f45] transition"
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown */}
            {Object.entries(dropdowns).map(([menu, items]) => (
              <div key={menu} className="relative" ref={openDropdown === menu ? dropdownRef : null}>
                <button
                  onClick={() => toggleDropdown(menu)}
                  className="flex items-center text-[#302350] text-base lg:text-lg font-medium hover:text-[#ec4f45] transition"
                >
                  {menu}
                  <FiChevronDown className="h-4 w-4 ml-1" />
                </button>
                {openDropdown === menu && (
                  <div className="absolute top-12 left-0 md:left-1/2 md:-translate-x-1/2 bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 w-[90vw] max-w-[500px] z-50">
                    <h3 className="text-lg font-semibold text-black mb-4">{menu}</h3>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <Link
                          key={item.title}
                          to={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-start space-x-4 hover:bg-gray-50 rounded-xl p-3 transition"
                        >
                          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-xl">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                            <div className="text-sm text-gray-600">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTA Button - visible on md and up */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate("/request-demo")}
              className="bg-[#302350] text-[#ef4948] px-5 py-2 rounded-lg text-sm lg:text-base font-medium hover:bg-[#ef4948] hover:text-[#302350] transition"
            >
              Request a Demo →
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#e0e4eb] px-4 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#302350] font-medium hover:text-[#ec4f45]"
            >
              {item.name}
            </Link>
          ))}

          {Object.entries(dropdowns).map(([menu, items]) => (
            <div key={menu}>
              <button
                onClick={() => toggleDropdown(menu)}
                className="w-full flex justify-between items-center text-gray-800 font-medium py-2"
              >
                {menu}
                <FiChevronDown className="h-4 w-4" />
              </button>
              {openDropdown === menu && (
                <div className="pl-4 space-y-1">
                  {items.map((item) => (
                    <Link
                      key={item.title}
                      to={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-sm text-[#302350] hover:text-[#ef4948]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/request-demo");
            }}
            className="w-full mt-2 bg-[#302350] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#ef4948] transition"
          >
            Request a Demo →
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
