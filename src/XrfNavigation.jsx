import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CaretDown,
  CaretRight,
  List,
  MagnifyingGlass,
  ShoppingBag,
  UserCircle,
  X,
} from "@phosphor-icons/react";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const HOME_PAGE_URL = "https://yonge6.github.io/onelaser-homepage-v3/";
const MACHINES_PAGE_URL = `${HOME_PAGE_URL}collections/`;
const ACCESSORIES_PAGE_URL = `${HOME_PAGE_URL}accessories/`;
const MATERIALS_PAGE_URL = "https://www.1laser.com/collections/materials-for-laser-engraving-cutting";

const announcementItems = [
  ["Subscribe & Get $50 OFF Your First Purchase!", "https://www.1laser.com/pages/onelaser-rewards"],
  ["$0 Down Financing for Small Businesses", "https://www.1laser.com/pages/financing"],
  ["30-Day Easy Returns", "https://www.1laser.com/pages/refund-policy"],
];

const machineMenuSeries = {
  x: {
    label: "X Series",
    products: [
      {
        name: "XRF™",
        copy: "Performance Desktop Laser Engraver (38W RF)",
        href: "https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine",
        image: "https://www.1laser.com/cdn/shop/files/XRF_360cdcd1-c129-44be-a750-7da43a587a00.png?v=1782463970&width=400",
      },
    ],
  },
  cobra: {
    label: "Cobra Series",
    products: [
      { name: "Cobra™ 8", copy: "Workshop Essential Laser Engraver/Cutter (90W Glass)", href: "https://www.1laser.com/products/cobra-8-90w-co2-laser-engraver-cutter", image: "https://www.1laser.com/cdn/shop/files/Cobra_8.png?v=1782460144&width=400" },
      { name: "Cobra™ 10", copy: "Workshop Essential Laser Engraver/Cutter (100W Glass)", href: "https://www.1laser.com/products/cobra-10-100w-co2-laser-engraver-cutter", image: "https://www.1laser.com/cdn/shop/files/Cobra_10.png?v=1782460375&width=400" },
      { name: "Cobra™ 14", copy: "Workshop Essential Laser Engraver/Cutter (130W Glass)", href: "https://www.1laser.com/products/cobra-14-130w-co2-laser-engraver-cutter", image: "https://www.1laser.com/cdn/shop/files/Cobra_14.png?v=1782460438&width=400" },
    ],
  },
  hydra: {
    label: "Hydra Series",
    products: [
      { name: "Hydra™ 7 Gen2", copy: "Industrial RF Laser Engraver (70W RF)", href: "https://www.1laser.com/products/hydra-7-gen-2-70w-rf-co2-dual-laser-machine", image: "https://www.1laser.com/cdn/shop/files/Hydra_7Gen2.png?v=1782813665&width=400" },
      { name: "Hydra™ 9 Gen2", copy: "CO₂ Glass/RF Industrial Hybrid Laser Engraver", href: "https://www.1laser.com/products/hydra-9-gen-2-70w-rf-co2-dual-laser-machine", image: "https://www.1laser.com/cdn/shop/files/Hydra_9Gen2.png?v=1782813672&width=400" },
      { name: "Hydra™ 13 Gen2", copy: "CO₂ Glass/RF Industrial Hybrid Laser Engraver", href: "https://www.1laser.com/products/hydra-13-gen-2-70w-rf-co2-dual-laser-machine", image: "https://www.1laser.com/cdn/shop/files/Hydra_13Gen2.png?v=1782813672&width=400" },
      { name: "Hydra™ 16 Gen2", copy: "CO₂ Glass/RF Industrial Hybrid Laser Engraver", href: "https://www.1laser.com/products/hydra-16-gen-2-70w-rf-co2-dual-laser-machine", image: "https://www.1laser.com/cdn/shop/files/Hydra_16Gen2.png?v=1782813672&width=400" },
    ],
  },
  vertigo: {
    label: "VertiGo",
    products: [
      {
        name: "VertiGo™",
        copy: "Performance Rotary Laser for Drinkware (38W RF)",
        href: "https://www.1laser.com/products/vertigo-vertical-laser-engraver",
        image: "https://www.1laser.com/cdn/shop/files/VertiGo_3c806291-bd5f-4153-9ca8-d54e3fd1cd0b.png?v=1782698357&width=400",
      },
    ],
  },
};

const supportMenu = {
  featured: [
    {
      label: "Get a Quote",
      href: "https://www.1laser.com/products/sales-consultation-call",
      image: "https://www.1laser.com/cdn/shop/files/Consultation_Call_Session_f357d165-c36d-445e-8589-cd76cb193639.png?v=1764916744&width=600",
    },
    {
      label: "1-on-1 Training",
      href: "https://www.1laser.com/products/engineer-1-on-1-training-support",
      image: "https://www.1laser.com/cdn/shop/files/1-on-1_training.png?v=1764920272&width=600",
    },
  ],
  links: [
    ["Submit a Ticket", "https://zohodesk.1laser.com/portal/en/newticket"],
    ["Financing", "https://www.1laser.com/pages/financing"],
    ["Policy", "https://www.1laser.com/policies/shipping-policy"],
    ["Blogs", "https://www.1laser.com/blogs/topic"],
    ["Product Knowledge Base", "https://wiki.1laser.com/"],
  ],
};

const accessoriesMenu = {
  featured: [
    {
      label: "Laser Accessories",
      href: ACCESSORIES_PAGE_URL,
      image: "navigation/accessories-menu.jpg",
    },
    {
      label: "Materials",
      href: MATERIALS_PAGE_URL,
      image: "navigation/materials-menu.jpg",
      external: true,
    },
  ],
};

const communityMenu = {
  featured: [
    {
      label: "Become an Affiliate",
      href: "https://www.1laser.com/pages/laser-engraving-community",
      image: "https://www.1laser.com/cdn/shop/files/3_154dd9e8-536b-43e4-9e64-5e1532331fdd.png?v=1782712883&width=600",
    },
    {
      label: "Purchase Rewards",
      href: "https://www.1laser.com/pages/onelaser-rewards",
      image: "https://www.1laser.com/cdn/shop/files/OneLaser_Forum_4979b167-4ed1-476c-a24f-bd1b496f235a.png?v=1782714101&width=600",
    },
  ],
  links: [
    ["Join the Community", "https://www.1laser.com/pages/laser-engraving-community"],
    ["Testimonials", "https://www.1laser.com/pages/testimonials"],
    ["Demo Room", "https://www.1laser.com/pages/demoroom"],
  ],
};
function ProductName({ name }) {
  const [beforeTrademark, afterTrademark] = name.split("™");
  return <>{beforeTrademark}<sup>™</sup>{afterTrademark}</>;
}
export function XrfNavigation({ megaMenuActivation = "hover" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeMachineSeries, setActiveMachineSeries] = useState("x");
  const suppressMegaFocusRef = useRef(false);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const clickActivatedMegaMenus = megaMenuActivation === "click";
  const activeResourceMenu = activeMegaMenu === "support" ? supportMenu : communityMenu;

  useEffect(() => {
    if (!activeMegaMenu) return undefined;
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      const trigger = document.querySelector(`[data-mega-trigger="${activeMegaMenu}"]`);
      suppressMegaFocusRef.current = true;
      setActiveMegaMenu(null);
      window.requestAnimationFrame(() => {
        trigger?.focus();
        window.setTimeout(() => { suppressMegaFocusRef.current = false; }, 0);
      });
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeMegaMenu]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    setActiveMegaMenu(null);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const updatePosition = () => {
      if (window.innerWidth > 820) { setMenuOpen(false); return; }
      headerRef.current?.style.setProperty("--mobile-nav-top", `${headerRef.current.getBoundingClientRect().bottom}px`);
    };
    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    observer.observe(headerRef.current);
    window.addEventListener("resize", updatePosition);
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab") {
        const controls = [...headerRef.current.querySelectorAll("a, button, summary")].filter(el => el.getClientRects().length > 0 && !el.closest("details:not([open]) > div"));
        const first = controls[0];
        const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      observer.disconnect();
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, announcementVisible]);

  const enterMegaMenu = (menu) => (event) => {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    setActiveMegaMenu(menu);
    window.requestAnimationFrame(() => {
      document.querySelector(`#home-mega-${menu} button, #home-mega-${menu} a`)?.focus();
    });
  };

  const openMegaMenuOnHover = (menu) => clickActivatedMegaMenus ? undefined : () => setActiveMegaMenu(menu);
  const openMegaMenuOnFocus = (menu) => clickActivatedMegaMenus ? undefined : () => {
    if (!suppressMegaFocusRef.current) setActiveMegaMenu(menu);
  };
  const toggleMegaMenuOnClick = (menu) => clickActivatedMegaMenus ? (event) => {
    event.preventDefault();
    setActiveMegaMenu((current) => current === menu ? null : menu);
  } : undefined;
  const closeMegaMenuOnHover = clickActivatedMegaMenus ? undefined : () => setActiveMegaMenu(null);

  return (
    <>
      {announcementVisible && (
        <div className="home-announcement" aria-label="OneLaser offers and service updates">
          <div className="home-announcement__viewport">
            <div className="home-announcement__track">
              {[false, true].map((duplicate) => (
                <div className="home-announcement__group" aria-hidden={duplicate ? "true" : undefined} key={duplicate ? "duplicate" : "primary"}>
                  {announcementItems.map(([label, href]) => (
                    <a href={href} target="_blank" rel="noreferrer" tabIndex={duplicate ? -1 : undefined} key={label}>{label}</a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button className="home-announcement__close" type="button" onClick={() => setAnnouncementVisible(false)} aria-label="Close announcements"><X size={15} weight="bold" /></button>
        </div>
      )}
      <header
        ref={headerRef}
        className="home-header"
        onMouseLeave={closeMegaMenuOnHover}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setActiveMegaMenu(null);
        }}
      >
        <a className="home-brand" href={HOME_PAGE_URL} aria-label="OneLaser home">
          <img src={asset("onelaser-logo.png")} alt="OneLaser" />
        </a>
        <button
          ref={menuButtonRef}
          className="home-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="home-mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={21} weight="bold" /> : <List size={22} weight="bold" />}
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        </button>
        <nav id="home-navigation" className={menuOpen ? "home-nav is-open" : "home-nav"} aria-label="Main navigation">
          <div className="home-nav__item">
            <a href={MACHINES_PAGE_URL} aria-haspopup="true" aria-controls="home-mega-machines" aria-expanded={activeMegaMenu === "machines"} data-mega-trigger="machines" onMouseEnter={openMegaMenuOnHover("machines")} onFocus={openMegaMenuOnFocus("machines")} onClick={toggleMegaMenuOnClick("machines")} onKeyDown={enterMegaMenu("machines")}>Laser Machines <CaretDown size={13} weight="bold" /></a>
          </div>
          <div className="home-nav__item">
            <a href={ACCESSORIES_PAGE_URL} aria-haspopup="true" aria-controls="home-mega-accessories" aria-expanded={activeMegaMenu === "accessories"} data-mega-trigger="accessories" onMouseEnter={openMegaMenuOnHover("accessories")} onFocus={openMegaMenuOnFocus("accessories")} onClick={toggleMegaMenuOnClick("accessories")} onKeyDown={enterMegaMenu("accessories")}>Accessories <CaretDown size={13} weight="bold" /></a>
          </div>
          <a href="https://www.1laser.com/collections/limited-offers" target="_blank" rel="noreferrer" onMouseEnter={closeMegaMenuOnHover} onFocus={closeMegaMenuOnHover}>Clearance</a>
          <div className="home-nav__item">
            <a href="https://www.1laser.com/pages/sales-consultation" target="_blank" rel="noreferrer" aria-haspopup="true" aria-controls="home-mega-support" aria-expanded={activeMegaMenu === "support"} data-mega-trigger="support" onMouseEnter={openMegaMenuOnHover("support")} onFocus={openMegaMenuOnFocus("support")} onClick={toggleMegaMenuOnClick("support")} onKeyDown={enterMegaMenu("support")}>Support <CaretDown size={13} weight="bold" /></a>
          </div>
          <div className="home-nav__item">
            <a href="https://www.1laser.com/pages/laser-engraving-community" target="_blank" rel="noreferrer" aria-haspopup="true" aria-controls="home-mega-community" aria-expanded={activeMegaMenu === "community"} data-mega-trigger="community" onMouseEnter={openMegaMenuOnHover("community")} onFocus={openMegaMenuOnFocus("community")} onClick={toggleMegaMenuOnClick("community")} onKeyDown={enterMegaMenu("community")}>Community <CaretDown size={13} weight="bold" /></a>
          </div>
          <a href="https://www.1laser.com/pages/contact-us" target="_blank" rel="noreferrer" onMouseEnter={closeMegaMenuOnHover} onFocus={closeMegaMenuOnHover}>Contact</a>
        </nav>
        {menuOpen && (
          <nav id="home-mobile-navigation" className="home-mobile-nav" aria-label="Mobile main navigation" onClick={(event) => {
            if (event.target.closest("a")) { setMenuOpen(false); menuButtonRef.current?.focus(); }
          }}>
            <details className="home-mobile-nav__group" name="mobile-navigation">
              <summary>Laser Machines<CaretDown size={18} /></summary>
              <div className="home-mobile-nav__panel">
                <a className="home-mobile-nav__all" href={MACHINES_PAGE_URL}>Explore all machines<ArrowUpRight size={16} /></a>
                {Object.entries(machineMenuSeries).map(([id, series]) => (
                  <details className="home-mobile-nav__series" name="mobile-machine-series" key={id}>
                    <summary>{series.label}<CaretDown size={16} /></summary>
                    <div className="home-mobile-nav__products">
                      {series.products.map(product => (
                        <a href={product.href} target="_blank" rel="noreferrer" key={product.name}>
                          <span><ProductName name={product.name} /></span>
                          <small>{product.copy}</small>
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </details>
            <details className="home-mobile-nav__group" name="mobile-navigation">
              <summary>Accessories<CaretDown size={18} /></summary>
              <div className="home-mobile-nav__panel home-mobile-nav__links">
                {accessoriesMenu.featured.map((item) => (
                  <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} key={item.label}>{item.label}<ArrowUpRight size={15} /></a>
                ))}
              </div>
            </details>
            <a className="home-mobile-nav__direct" href="https://www.1laser.com/collections/limited-offers" target="_blank" rel="noreferrer">Clearance<ArrowUpRight size={16} /></a>
            {[["Support", supportMenu], ["Community", communityMenu]].map(([label, menu]) => (
              <details className="home-mobile-nav__group" name="mobile-navigation" key={label}>
                <summary>{label}<CaretDown size={18} /></summary>
                <div className="home-mobile-nav__panel home-mobile-nav__links">
                  {[...menu.featured.map(item => [item.label, item.href]), ...menu.links].map(([title, href]) => (
                    <a href={href} target="_blank" rel="noreferrer" key={title}>{title}<ArrowUpRight size={15} /></a>
                  ))}
                </div>
              </details>
            ))}
            <a className="home-mobile-nav__direct" href="https://www.1laser.com/pages/contact-us" target="_blank" rel="noreferrer">Contact<ArrowUpRight size={16} /></a>
            <div className="home-mobile-nav__utilities">
              <a href="https://www.1laser.com/search" target="_blank" rel="noreferrer"><MagnifyingGlass size={18} />Search</a>
              <a href="https://www.1laser.com/account/login" target="_blank" rel="noreferrer"><UserCircle size={18} />Log in</a>
            </div>
          </nav>
        )}
        <div className="home-header__actions" aria-label="OneLaser account and shopping">
          <a href="https://www.1laser.com/search" target="_blank" rel="noreferrer" aria-label="Search OneLaser"><MagnifyingGlass size={20} /></a>
          <a href="https://www.1laser.com/cart" target="_blank" rel="noreferrer" aria-label="View cart"><ShoppingBag size={20} /></a>
          <a href="https://www.1laser.com/account/login" target="_blank" rel="noreferrer" aria-label="Log in"><UserCircle size={21} /></a>
        </div>

        {activeMegaMenu === "machines" && (
          <div id="home-mega-machines" className="home-mega home-mega--machines" aria-label="Laser Machines menu">
            <div className="home-mega__inner">
              <aside className="home-mega__series" aria-label="Machine series">
                {Object.entries(machineMenuSeries).map(([id, series]) => (
                  <button key={id} className={activeMachineSeries === id ? "is-active" : ""} type="button" aria-pressed={activeMachineSeries === id} onMouseEnter={() => setActiveMachineSeries(id)} onFocus={() => setActiveMachineSeries(id)} onClick={() => setActiveMachineSeries(id)}>
                    {series.label}<CaretRight size={15} weight="bold" />
                  </button>
                ))}
              </aside>
              <div className="home-mega__products">
                {machineMenuSeries[activeMachineSeries].products.map((product) => (
                  <a className="home-mega-product" href={product.href} target="_blank" rel="noreferrer" key={product.name}>
                    <span className={`home-mega-product__media home-mega-product__media--${activeMachineSeries}`}><img src={product.image} alt={product.name} /></span>
                    <div><h3><ProductName name={product.name} /></h3><p>{product.copy}</p></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeMegaMenu === "accessories" && (
          <div id="home-mega-accessories" className="home-mega home-mega--accessories" aria-label="Accessories menu">
            <div className="home-mega__inner home-mega__inner--accessories">
              {accessoriesMenu.featured.map((item) => (
                <a className="home-mega-resource-card" href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} key={item.label}>
                  <img src={asset(item.image)} alt="" />
                  <span>{item.label}<CaretRight size={20} weight="bold" /></span>
                </a>
              ))}
            </div>
          </div>
        )}

        {(activeMegaMenu === "support" || activeMegaMenu === "community") && (
          <div id={`home-mega-${activeMegaMenu}`} className={`home-mega home-mega--${activeMegaMenu}`} aria-label={`${activeMegaMenu} menu`}>
            <div className="home-mega__inner home-mega__inner--resources">
              {activeResourceMenu.featured.map((item) => (
                <a className="home-mega-resource-card" href={item.href} target="_blank" rel="noreferrer" key={item.label}>
                  <img src={item.image} alt="" />
                  <span>{item.label}<CaretRight size={18} weight="bold" /></span>
                </a>
              ))}
              <nav className="home-mega-resource-links" aria-label={`${activeMegaMenu} links`}>
                {activeResourceMenu.links.map(([label, href]) => (
                  <a href={href} target="_blank" rel="noreferrer" key={label}>{label}<CaretRight size={15} weight="bold" /></a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {activeMegaMenu && <button className={`home-mega-backdrop${announcementVisible ? " has-announcement" : ""}`} type="button" onClick={() => setActiveMegaMenu(null)} aria-label="Close expanded navigation" />}
    </>
  );
}
