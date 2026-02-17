import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import TopBar from "./TopBar";
import AnnouncementBar from "./AnnouncementBar";
import MidNavigation from "./MidNavigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = {
    digitalMarketing: [
      { name: "ORM Services", path: "/digital-marketing/orm-services" },
      {
        name: "Social Media Marketing",
        path: "/digital-marketing/social-media",
      },
      { name: "Website SEO", path: "/digital-marketing/website-seo" },
      {
        name: "Google Business Profile & SEO",
        path: "/digital-marketing/google-map-marketing",
      },
      { name: "Meta Ads/ Google Ads/ Paid marketing", path: "/digital-marketing/paid-marketing" },
      {
        name: "Content Marketing",
        path: "/digital-marketing/content-marketing",
      },
    ],
    designDev: [
      { name: "Web Development", path: "/design-development/web-development" },
      {
        name: "WordPress Development",
        path: "/design-development/wordpress-development",
      },
      { name: "App Development", path: "/design-development/app-development" },
      { name: "UI/UX Design", path: "/design-development/ui-ux-design" },
      {
        name: "E-commerce Development",
        path: "/design-development/ecommerce-development",
      },
    ],
    whatsapp: [
      {
        name: "Bulk Broadcasting",
        path: "/whatsapp-marketing/bulk-broadcasting",
      },
      { name: "Custom Chatbot", path: "/whatsapp-marketing/custom-chatbot" },
      {
        name: "Number Verification",
        path: "/whatsapp-marketing/number-verification",
      },
    ],
    packages: [
      {
        name: "Digital Marketing Packages",
        path: "/packages/digital-marketing",
      },
      {
        name: "Website Development Packages",
        path: "/packages/website-development",
      },
      {
        name: "WhatsApp Marketing Packages",
        path: "/packages/whatsapp-marketing",
      },
      {
        name: "Performance Marketing Packages",
        path: "/packages/performance-marketing",
      },
    ],
    ourWork: [
      { name: "Meta Ads Portfolio", path: "/our-work/meta-ads" },
      { name: "Web Development Projects", path: "/our-work/web-development" },
      { name: "Content Work", path: "/our-work/content-work" },
    ],
  };

  return (
    <>
      <TopBar />
      <AnnouncementBar />
      <MidNavigation />
      <div className="sticky top-0 left-0 right-0 bg-white z-50  backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="bg-blue-400/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-6">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="md:hidden flex items-center">
                <img
                  src="/images/logo-full.webp"
                  alt="Socio Bhaarat"
                  className="h-20 sm:h-14 w-auto"
                />
              </Link>
              <div className="hidden xl:flex items-center gap-1">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link
                        to="/"
                        className="px-4 py-2 text-foreground hover:text-accent transition-colors font-medium text-[17px]"
                      >
                        Home
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-[17px]">
                        Digital Marketing
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-auto gap-3 p-4 bg-background">
                          {menuItems.digitalMarketing.map((item) => (
                            <li key={item.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {item.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-[17px]">
                        Design & Development
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-auto gap-3 p-4 bg-background">
                          {menuItems.designDev.map((item) => (
                            <li key={item.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {item.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-[17px]">
                        WhatsApp Marketing
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-auto gap-3 p-4 bg-background">
                          {menuItems.whatsapp.map((item) => (
                            <li key={item.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {item.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link
                        to="/performance-marketing"
                        className="px-4 py-2 text-foreground hover:text-accent transition-colors font-medium text-[17px] inline-flex items-center"
                      >
                        Performance Marketing
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-[17px]">
                        Packages
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-auto gap-3 p-4 bg-background">
                          {menuItems.packages.map((item) => (
                            <li key={item.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {item.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-[17px]">
                        Our Work
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-auto gap-3 p-4 bg-background">
                          {menuItems.ourWork.map((item) => (
                            <li key={item.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {item.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link
                        to="/blog"
                        className="px-4 py-2 text-foreground hover:text-accent transition-colors font-medium text-[17px]"
                      >
                        Blog
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link
                        to="/contact"
                        className="px-4 py-2 text-foreground hover:text-accent transition-colors font-medium text-[17px]"
                      >
                        Contact
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                {/* <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-6 ml-4"
              >
                BOOK A CALL
              </Button> */}
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden text-foreground hover:text-accent transition-colors"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {isOpen && (
              <div className="lg:hidden py-4 pb-2 border-t border-border max-h-[77vh] overflow-y-auto">
                <div className="flex flex-col gap-2">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-accent transition-colors font-medium py-2 px-2"
                  >
                    Home
                  </Link>

                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "digital" ? null : "digital"
                        )
                      }
                      className="flex items-center justify-between w-full text-foreground hover:text-accent transition-colors font-medium py-2 px-2"
                    >
                      Digital Marketing
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === "digital" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === "digital" && (
                      <div className="pl-4 flex flex-col gap-1 mt-1">
                        {menuItems.digitalMarketing.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-muted-foreground hover:text-accent py-2 text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "design" ? null : "design"
                        )
                      }
                      className="flex items-center justify-between w-full text-foreground hover:text-accent transition-colors font-medium py-2 px-2"
                    >
                      Design & Development
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === "design" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === "design" && (
                      <div className="pl-4 flex flex-col gap-1 mt-1">
                        {menuItems.designDev.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-muted-foreground hover:text-accent py-2 text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "whatsapp" ? null : "whatsapp"
                        )
                      }
                      className="flex items-center justify-between w-full text-foreground hover:text-accent transition-colors font-medium py-2 px-2"
                    >
                      WhatsApp Marketing
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === "whatsapp" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === "whatsapp" && (
                      <div className="pl-4 flex flex-col gap-1 mt-1">
                        {menuItems.whatsapp.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-muted-foreground hover:text-accent py-2 text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    to="/performance-marketing"
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-accent transition-colors font-medium py-2 px-2"
                  >
                    Performance Marketing
                  </Link>

                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "packages" ? null : "packages"
                        )
                      }
                      className="flex items-center justify-between w-full text-foreground hover:text-accent transition-colors font-medium py-2 px-2"
                    >
                      Packages
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === "packages" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === "packages" && (
                      <div className="pl-4 flex flex-col gap-1 mt-1">
                        {menuItems.packages.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-muted-foreground hover:text-accent py-2 text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === "work" ? null : "work")
                      }
                      className="flex items-center justify-between w-full text-foreground hover:text-accent transition-colors font-medium py-2 px-2"
                    >
                      Our Work
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === "work" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === "work" && (
                      <div className="pl-4 flex flex-col gap-1 mt-1">
                        {menuItems.ourWork.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-muted-foreground hover:text-accent py-2 text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-accent transition-colors font-medium py-2 px-2"
                  >
                    Contact Us
                  </Link>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded mt-2">
                    BOOK A CALL
                  </Button>
                  <Link to="/hiring" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
                      WORK WITH US
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
