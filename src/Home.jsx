import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CaretLeft,
  CaretDown,
  CaretRight,
  CaretUp,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  List,
  MagnifyingGlass,
  MapPin,
  Phone,
  Play,
  ShoppingBag,
  TiktokLogo,
  UserCircle,
  X,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import {
  economicsAssumptions,
  economicsDisclaimer,
  economicsExamples,
  products,
} from "./data/commercialCapabilities.js";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const XRF_PAGE_URL = `${import.meta.env.BASE_URL}?page=xrf`;
const wholeCurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const announcementItems = [
  ["Subscribe & Get $50 OFF Your First Purchase!", "https://www.1laser.com/pages/onelaser-rewards"],
  ["$0 Down Financing for Small Businesses", "https://www.1laser.com/pages/financing"],
  ["30-Day Easy Returns", "https://www.1laser.com/pages/refund-policy"],
];

const recommendedMachines = {
  xrf: {
    name: "XRF",
    href: "https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine",
    copy: "Precision RF desktop laser for detailed flat engraving and repeatable personalization.",
    image: "home-product-xrf.png",
  },
  cobra: {
    name: "Cobra Series",
    href: "https://www.1laser.com/products/cobra-10-100w-co2-laser-engraver-cutter",
    copy: "Dual-laser cutting and engraving for acrylic, wood, signage, and mixed-material production.",
    image: "home-product-cobra.png",
    modalImage: "home-product-cobra-modal.webp",
  },
  hydra: {
    name: "Hydra Gen2",
    href: "https://www.1laser.com/products/hydra-9-gen-2-70w-rf-co2-dual-laser-machine",
    copy: "High-throughput RF production for large-format detail, repeat orders, and demanding batch work.",
    image: "home-product-hydra-gen2.png",
    modalImage: "home-product-hydra-gen2-modal.webp",
  },
  vertigo: {
    name: "VertiGo",
    href: "https://www.1laser.com/products/vertigo-vertical-laser-engraver",
    copy: "Purpose-built vertical rotary laser for tumblers, bottles, glassware, and other cylindrical goods.",
    image: "home-product-vertigo.png",
  },
};

const heroSlides = [
  {
    desktopImage: "home-banner-education-desktop.webp",
    mobileImage: "home-banner-education-mobile.webp",
    alt: "OneLaser Hydra Gen2 in a bright STEM classroom with students and an instructor",
    href: "https://www.1laser.com/products/hydra-9-gen-2-70w-rf-co2-dual-laser-machine",
    label: "Explore OneLaser for Education",
  },
  {
    desktopImage: "home-banner-maker-desktop.webp",
    mobileImage: "home-banner-maker-mobile.webp",
    alt: "A small business maker presenting engraved products beside a OneLaser XRF",
    href: "https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine",
    label: "Shop OneLaser XRF",
  },
  {
    desktopImage: "home-banner-xrf-desktop.webp",
    mobileImage: "home-banner-xrf-mobile.webp",
    alt: "OneLaser XRF desktop RF laser on a dramatic red and black stage",
    href: "https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine",
    label: "Discover OneLaser XRF",
  },
];
const loopedHeroSlides = [heroSlides.at(-1), ...heroSlides, heroSlides[0]];

const productCards = [
  {
    id: "cobra",
    name: "Cobra™ Series",
    label: "Workshop Essential",
    copy: "Performance CO₂+IR Dual-Laser System",
    features: ["Up to 130W Glass+3/5W IR", "Master 300+ Materials", "1,200 mm/s Speed", "1,000 DPI Max Resolution"],
    image: "home-product-cobra.png",
    scene: "home-product-cobra-scene.webp",
    href: "https://www.1laser.com/products/cobra-10-100w-co2-laser-engraver-cutter",
  },
  {
    id: "xrf",
    name: "XRF™",
    label: "Performance Desktop Laser",
    copy: "World’s Best-Performing RF Desktop Laser",
    features: ["38W RF Power", "1,200 mm/s Speed", "3G Acceleration", "Conveyor Feeder Available"],
    image: "home-product-xrf.png",
    scene: "home-product-xrf-scene.webp",
    href: "https://www.1laser.com/products/onelaser-xrf-desktop-laser-machine",
  },
  {
    id: "hydra",
    name: "Hydra™ Gen2",
    label: "Industrial Laser System",
    copy: "RF Laser Beast: Brutal Speed Meets Insane Detail.",
    features: ["Ultra-Fast 2,000 mm/s", "4G Acceleration", "Up to 150W Glass/70W RF Power", "Smart Dual Air-Assist"],
    image: "home-product-hydra-gen2.png",
    scene: "home-product-hydra-gen2-scene.webp",
    href: "https://www.1laser.com/products/hydra-9-gen-2-70w-rf-co2-dual-laser-machine",
  },
  {
    id: "vertigo",
    name: "VertiGo™",
    label: "Performance Rotary Laser",
    copy: "World’s First Vertical Laser — Tumblers & Cups Engraved Like Never Before",
    features: ["Cylindrical Engraving", "38W RF Power", "Built with an Integrated PiBurn Grip", "Smart Autofocus"],
    image: "home-product-vertigo.png",
    scene: "home-product-vertigo-scene.webp",
    href: "https://www.1laser.com/products/vertigo-vertical-laser-engraver",
  },
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
      label: "1-on-1 Support",
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

const communityMenu = {
  featured: [
    {
      label: "Become Affiliate",
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
    ["Join Community", "https://www.1laser.com/pages/laser-engraving-community"],
    ["Testimonials", "https://www.1laser.com/pages/testimonials"],
    ["Demo Room", "https://www.1laser.com/pages/demoroom"],
  ],
};

const whyAdvantages = [
  {
    title: "Long-Life RF Precision",
    body: [
      "Sealed Metal RF Tube, Stable Beam & 20,000–50,000-Hour Lifespan",
      "Sharper Details, Less Downtime, Better Long-Term ROI",
    ],
  },
  {
    title: "The RF Laser Leader",
    body: [
      "Industrial #1 RF Brand for Desktop",
      "Industrial First Auto-Switch RF Hybrid System",
    ],
  },
  {
    title: "Print & Cut with Full Vision Intelligence",
    body: [
      "Camera-Guided Alignment, Auto Edge & Mark Detection",
      "Every Cut Lands Exactly Where It Should",
    ],
  },
  {
    title: "Unmatched Speed",
    body: [
      "Up to 2,000 mm/s with True 4G Acceleration",
      "Finish 3× More Orders Per Day",
    ],
  },
  {
    title: "Engineered & Supported in the USA",
    body: [
      "US-Based Engineering, Service & Parts",
      "Real Answers from Real Technicians, Fast",
    ],
  },
  {
    title: "Rock-Solid Build",
    body: [
      "Aircraft-Grade Aluminum Frame, Reinforced Industrial Construction",
      "Built for Long-Term Rigidity, Precision & Stability",
    ],
  },
];

const projectShowcase = [
  { image: "product-walnut-serving-board.webp", title: "Personalized Serving Board", material: "Wood", materials: ["Wood"], productId: "walnut-serving-board", machineId: "xrf" },
  { image: "product-photo-wall-panel.webp", title: "Family Photo Panel", material: "Wood", materials: ["Wood"], productId: "photo-wall-panel", machineId: "xrf" },
  { image: "home-project-large-acrylic-sign.webp", title: "Layered Acrylic Wall Sign", material: "Acrylic", materials: ["Acrylic"], productId: "large-acrylic-wall-sign", machineId: "cobra" },
  { image: "home-project-walnut-mountain-wall.webp", title: "Mountain Feature Wall", material: "Walnut", materials: ["Wood"], productId: "walnut-mountain-wall", machineId: "hydra" },
  { image: "product-wine-bottle.webp", title: "Adventure Bottle", material: "Coated Metal", materials: ["Metal"], productId: "wine-bottle", machineId: "vertigo" },
  { image: "product-custom-tumbler.webp", title: "Custom Tumbler", material: "Coated Metal", materials: ["Metal"], productId: "custom-tumbler", machineId: "vertigo" },
  { image: "product-acrylic-counter-sign.webp", title: "Counter Sign", material: "Acrylic", materials: ["Acrylic"], productId: "acrylic-counter-sign", machineId: "cobra" },
  { image: "product-rocks-glass.webp", title: "Whiskey Glass Set", material: "Glass", materials: ["Glass"], productId: "rocks-glass", machineId: "xrf" },
  { image: "product-leather-patch-cap.webp", title: "Leather Patch Cap", material: "Leather", materials: ["Leather"], productId: "leather-patch-cap", machineId: "cobra" },
  { image: "product-engraved-jewelry-box.webp", title: "Keepsake Jewelry Box", material: "Wood", materials: ["Wood"], productId: "engraved-jewelry-box", machineId: "xrf" },
  { image: "home-project-batch-leather-gifts.webp", title: "Batch Leather Gift Set", material: "Leather", materials: ["Leather"], productId: "batch-leather-gift-set", machineId: "hydra" },
  { image: "home-project-layered-city-map.webp", title: "Layered City Map", material: "Wood", materials: ["Wood"], productId: "layered-city-map", machineId: "hydra" },
  { image: "product-leather-wallet.webp", title: "Monogram Wallet", material: "Leather", materials: ["Leather"], productId: "leather-wallet", machineId: "xrf" },
  { image: "product-outdoor-estate-sign.webp", title: "Outdoor Estate Sign", material: "Wood", materials: ["Wood"], productId: "house-number-sign", machineId: "hydra" },
  { image: "product-coated-metal-tags.webp", title: "Branded Metal Tags", material: "Coated Metal", materials: ["Metal"], productId: "coated-metal-tags", machineId: "hydra" },
  { image: "product-custom-keychains.webp", title: "Custom Keychains", material: "Leather", materials: ["Leather"], productId: "custom-keychains", machineId: "cobra" },
  { image: "product-house-number-sign.webp", title: "Modern House Number", material: "Wood", materials: ["Wood"], productId: "house-number-sign", machineId: "hydra" },
  { image: "power-38w-result.webp", title: "Portrait & Botanical Collection", material: "Wood, Acrylic & Leather", materials: ["Wood", "Acrylic", "Leather"], productId: "portrait-botanical-collection", machineId: "xrf", representative: true },
  { image: "power-70w-result.webp", title: "Wildlife Art Collection", material: "Wood, Acrylic & Coated Metal", materials: ["Wood", "Acrylic", "Metal"], productId: "wildlife-art-collection", machineId: "hydra", representative: true },
  { image: "material-wood.webp", title: "Wood Maker Collection", material: "Wood", materials: ["Wood"], productId: "wood-maker-collection", machineId: "xrf", representative: true },
  { image: "material-acrylic.webp", title: "Acrylic Design Collection", material: "Acrylic", materials: ["Acrylic"], productId: "acrylic-design-collection", machineId: "cobra", representative: true },
  { image: "material-glass-stone.webp", title: "Glass & Stone Collection", material: "Glass & Stone", materials: ["Glass"], productId: "glass-stone-collection", machineId: "xrf", representative: true },
  { image: "material-leather.webp", title: "Personalized Leather Goods", material: "Leather", materials: ["Leather"], productId: "personalized-leather-goods", machineId: "xrf", representative: true },
  { image: "home-project-etsy-wedding-welcome-suite.webp", title: "Wedding Welcome Suite", material: "Acrylic, Coated Metal & Glass", materials: ["Acrylic", "Metal", "Glass"], productId: "wedding-welcome-suite", machineId: "xrf" },
  { image: "home-project-etsy-whiskey-decanter-gift-set.webp", title: "Whiskey Decanter Gift Set", material: "Wood, Leather, Coated Metal & Glass", materials: ["Wood", "Leather", "Metal", "Glass"], productId: "whiskey-decanter-gift-set", machineId: "xrf" },
  { image: "home-project-etsy-pet-memorial-keepsake.webp", title: "Pet Memorial Keepsake", material: "Acrylic & Leather", materials: ["Acrylic", "Leather"], productId: "pet-memorial-keepsake", machineId: "xrf" },
  { image: "home-project-etsy-corporate-logo-barware-set.webp", title: "Corporate Barware Set", material: "Leather, Coated Metal & Glass", materials: ["Leather", "Metal", "Glass"], productId: "corporate-logo-barware-set", machineId: "xrf" },
  { image: "home-project-etsy-bridesmaid-table-setting.webp", title: "Bridesmaid Table Setting", material: "Acrylic, Leather, Coated Metal & Glass", materials: ["Acrylic", "Leather", "Metal", "Glass"], productId: "bridesmaid-table-setting", machineId: "xrf" },
  { image: "home-project-etsy-city-map-home-bar-set.webp", title: "City Map Home Bar Set", material: "Wood, Leather, Coated Metal & Glass", materials: ["Wood", "Leather", "Metal", "Glass"], productId: "city-map-home-bar-set", machineId: "xrf" },
  { image: "home-project-etsy-personalized-coffee-station.webp", title: "Personalized Coffee Station", material: "Acrylic, Leather, Coated Metal & Glass", materials: ["Acrylic", "Leather", "Metal", "Glass"], productId: "personalized-coffee-station", machineId: "xrf" },
  { image: "home-project-etsy-family-recipe-display.webp", title: "Family Recipe Display", material: "Acrylic, Leather & Coated Metal", materials: ["Acrylic", "Leather", "Metal"], productId: "family-recipe-display", machineId: "xrf" },
  { image: "home-project-etsy-wedding-vow-keepsake-box.webp", title: "Wedding Vow Keepsake Box", material: "Wood, Acrylic, Leather & Coated Metal", materials: ["Wood", "Acrylic", "Leather", "Metal"], productId: "wedding-vow-keepsake-box", machineId: "xrf" },
  { image: "home-project-etsy-groomsmen-bar-set.webp", title: "Groomsmen Bar Set", material: "Wood, Leather, Coated Metal & Glass", materials: ["Wood", "Leather", "Metal", "Glass"], productId: "groomsmen-bar-set", machineId: "xrf" },
  { image: "home-project-etsy-baby-name-nursery-keepsake.webp", title: "Baby Name Nursery Keepsake", material: "Acrylic & Leather", materials: ["Acrylic", "Leather"], productId: "baby-name-nursery-keepsake", machineId: "xrf" },
  { image: "home-project-etsy-realtor-closing-gift-set.webp", title: "Realtor Closing Gift Set", material: "Wood, Acrylic, Leather, Coated Metal & Glass", materials: ["Wood", "Acrylic", "Leather", "Metal", "Glass"], productId: "realtor-closing-gift-set", machineId: "xrf" },
  { image: "home-project-etsy-holiday-ornament-collection.webp", title: "Holiday Ornament Collection", material: "Wood, Acrylic, Leather & Glass", materials: ["Wood", "Acrylic", "Leather", "Glass"], productId: "holiday-ornament-collection", machineId: "xrf" },
  { image: "home-project-vertigo-wildflower-handled-tumbler.webp", title: "Wildflower Handled Tumbler", material: "Powder-Coated Metal", materials: ["Metal"], productId: "wildflower-handled-tumbler", machineId: "vertigo" },
  { image: "home-project-vertigo-mountain-rambler.webp", title: "Mountain Rambler Tumbler", material: "Powder-Coated Metal", materials: ["Metal"], productId: "mountain-rambler-tumbler", machineId: "vertigo" },
  { image: "home-project-vertigo-coastal-wide-mouth-bottle.webp", title: "Coastal Wide-Mouth Bottle", material: "Powder-Coated Metal", materials: ["Metal"], productId: "coastal-wide-mouth-bottle", machineId: "vertigo" },
  { image: "home-project-vertigo-celestial-flip-sip-bottle.webp", title: "Celestial Flip-Sip Bottle", material: "Powder-Coated Metal", materials: ["Metal"], productId: "celestial-flip-sip-bottle", machineId: "vertigo" },
  { image: "home-project-vertigo-corporate-tumbler-batch.webp", title: "Corporate Tumbler Batch", material: "Powder-Coated Metal", materials: ["Metal"], productId: "corporate-tumbler-batch", machineId: "vertigo" },
  { image: "home-project-vertigo-event-tumbler-batch.webp", title: "Event Tumbler Batch", material: "Powder-Coated Metal", materials: ["Metal"], productId: "event-tumbler-batch", machineId: "vertigo" },
];

const projectFilters = ["All", "Wood", "Acrylic", "Leather", "Metal", "Glass"];

function projectMatchesFilter(project, filter) {
  if (filter === "All") return true;
  return project.materials.includes(filter);
}

function ProductName({ name }) {
  const [beforeTrademark, afterTrademark] = name.split("™");
  return <>{beforeTrademark}<sup>™</sup>{afterTrademark}</>;
}

export function HomeNavigation({ megaMenuActivation = "hover" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeMachineSeries, setActiveMachineSeries] = useState("x");
  const suppressMegaFocusRef = useRef(false);
  const activatesOnClick = megaMenuActivation === "click";
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

  const enterMegaMenu = (menu) => (event) => {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    setActiveMegaMenu(menu);
    window.requestAnimationFrame(() => {
      document.querySelector(`#home-mega-${menu} button, #home-mega-${menu} a`)?.focus();
    });
  };

  const toggleMegaMenu = (menu) => (event) => {
    if (!activatesOnClick) return;
    event.preventDefault();
    setActiveMegaMenu((activeMenu) => activeMenu === menu ? null : menu);
  };

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
        className="home-header"
        onMouseLeave={activatesOnClick ? undefined : () => setActiveMegaMenu(null)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setActiveMegaMenu(null);
        }}
      >
        <a className="home-brand" href={import.meta.env.BASE_URL} aria-label="OneLaser home">
          <img src={asset("onelaser-logo.png")} alt="OneLaser" />
        </a>
        <button
          className="home-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="home-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={21} weight="bold" /> : <List size={22} weight="bold" />}
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        </button>
        <nav id="home-navigation" className={menuOpen ? "home-nav is-open" : "home-nav"} aria-label="Main navigation">
          <div className="home-nav__item">
            <a href="https://www.1laser.com/collections/laser-engraving-cutting-marking-machines" target="_blank" rel="noreferrer" aria-haspopup="true" aria-controls="home-mega-machines" aria-expanded={activeMegaMenu === "machines"} data-mega-trigger="machines" onClick={toggleMegaMenu("machines")} onMouseEnter={activatesOnClick ? undefined : () => setActiveMegaMenu("machines")} onFocus={activatesOnClick ? undefined : () => { if (!suppressMegaFocusRef.current) setActiveMegaMenu("machines"); }} onKeyDown={enterMegaMenu("machines")}>Laser Machines <CaretDown size={13} weight="bold" /></a>
          </div>
          <a href="https://www.1laser.com/collections/laser-accessories" target="_blank" rel="noreferrer" onMouseEnter={activatesOnClick ? undefined : () => setActiveMegaMenu(null)} onFocus={() => setActiveMegaMenu(null)}>Accessories</a>
          <a href="https://www.1laser.com/collections/limited-offers" target="_blank" rel="noreferrer" onMouseEnter={activatesOnClick ? undefined : () => setActiveMegaMenu(null)} onFocus={() => setActiveMegaMenu(null)}>Clearance</a>
          <div className="home-nav__item">
            <a href="https://www.1laser.com/pages/sales-consultation" target="_blank" rel="noreferrer" aria-haspopup="true" aria-controls="home-mega-support" aria-expanded={activeMegaMenu === "support"} data-mega-trigger="support" onClick={toggleMegaMenu("support")} onMouseEnter={activatesOnClick ? undefined : () => setActiveMegaMenu("support")} onFocus={activatesOnClick ? undefined : () => { if (!suppressMegaFocusRef.current) setActiveMegaMenu("support"); }} onKeyDown={enterMegaMenu("support")}>Support <CaretDown size={13} weight="bold" /></a>
          </div>
          <div className="home-nav__item">
            <a href="https://www.1laser.com/pages/laser-engraving-community" target="_blank" rel="noreferrer" aria-haspopup="true" aria-controls="home-mega-community" aria-expanded={activeMegaMenu === "community"} data-mega-trigger="community" onClick={toggleMegaMenu("community")} onMouseEnter={activatesOnClick ? undefined : () => setActiveMegaMenu("community")} onFocus={activatesOnClick ? undefined : () => { if (!suppressMegaFocusRef.current) setActiveMegaMenu("community"); }} onKeyDown={enterMegaMenu("community")}>Community <CaretDown size={13} weight="bold" /></a>
          </div>
          <a href="https://www.1laser.com/pages/contact-us" target="_blank" rel="noreferrer" onMouseEnter={activatesOnClick ? undefined : () => setActiveMegaMenu(null)} onFocus={() => setActiveMegaMenu(null)}>Contact</a>
        </nav>
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

export function HomeFooter() {
  return (
    <footer className="home-footer">
      <div className="home-footer__lead">
        <section>
          <h2>Talk to a Rep</h2>
          <p>Have questions or need help?</p>
          <a href="https://www.1laser.com/products/sales-consultation-call" target="_blank" rel="noreferrer">Book A Free Call</a>
        </section>
        <section>
          <h2>Unlock Exclusive Updates &amp; Savings!</h2>
          <p>Receive tips, promotions, and project inspiration.</p>
          <form action="https://www.1laser.com/contact#ContactFooter" method="post" target="_blank">
            <input type="hidden" name="form_type" value="customer" />
            <input type="hidden" name="utf8" value="✓" />
            <label className="sr-only" htmlFor="home-footer-email">Email address</label>
            <input id="home-footer-email" name="contact[email]" type="email" autoComplete="email" placeholder="Email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
      <div className="home-footer__main">
        <div className="home-footer__links">
          <div><strong>Community</strong><a href="https://www.1laser.com/pages/onelaser-rewards">Purchase Rewards</a><a href="https://af.uppromote.com/OneLaser/register">Become Affiliate</a><a href="https://www.1laser.com/pages/laser-engraving-community">Join Community</a><a href="https://www.1laser.com/pages/testimonials">Testimonials</a><a href="https://www.1laser.com/pages/demoroom">Demo Room</a></div>
          <div><strong>Machines</strong><a href="https://www.1laser.com/collections/laser-engraving-cutting-marking-machines">OneLaser Machines</a><a href="https://www.1laser.com/collections/x-series">X Series</a><a href="https://www.1laser.com/collections/cobra-series">Cobra Series</a><a href="https://www.1laser.com/collections/hydra-gen-2-rf-laser-engravers-cutters">Hydra Gen2 Series</a><a href="https://www.1laser.com/collections/hydra-series">Hydra Series</a><a href="https://www.1laser.com/products/vertigo-vertical-laser-engraver">VertiGo</a><a href="https://www.1laser.com/collections/laser-accessories">Laser Accessories</a></div>
          <div><strong>Support</strong><a href="https://www.1laser.com/pages/about-us">About Us</a><a href="https://www.1laser.com/pages/contact-us">Contact Us</a><a href="https://www.1laser.com/pages/financing">Financing</a><a href="https://www.1laser.com/blogs/topic">Blog Center</a><a href="https://www.1laser.com/pages/payment-methods">Payment Methods</a><a href="https://www.1laser.com/pages/faq">Common FAQ</a><a href="https://www.1laser.com/pages/laser-cutter-engraving-settings-for-different-materials">Laser Engraving &amp; Cutting Chart</a><a href="https://www.1laser.com/pages/find-demo-host">Schedule a Demo</a><a href="https://www.1laser.com/pages/demoroom">Become a Demo Host</a></div>
          <div><strong>Policy</strong><a href="https://www.1laser.com/pages/shipping-policy">Shipping Policy</a><a href="https://www.1laser.com/pages/privacy-policy">Privacy Policy</a><a href="https://www.1laser.com/pages/refund-policy">Refund Policy</a><a href="https://www.1laser.com/pages/terms-of-service">Terms of Service</a><a href="https://www.1laser.com/pages/warranty-policy">Warranty Policy</a><a href="https://www.1laser.com/pages/pre-order-backorder-policy">Pre &amp; Backorder Policy</a><a href="https://www.1laser.com/pages/onelaser-giveaway-general-terms-conditions">Giveaway General Terms &amp; Conditions</a></div>
        </div>
        <div className="home-footer__contact">
          <strong>Contact Us</strong>
          <a href="tel:+16268004130"><Phone size={16} />Phone: 626-800-4130</a>
          <a href="mailto:ts@1laser.com"><EnvelopeSimple size={16} />Tech Support: ts@1laser.com</a>
          <a href="mailto:cs@1laser.com"><EnvelopeSimple size={16} />Customer Support: cs@1laser.com</a>
          <a href="mailto:sales@1laser.com"><EnvelopeSimple size={16} />Sales Consultation: sales@1laser.com</a>
          <p><MapPin size={16} />Headquarters: 20472 Crescent Bay Dr, STE 104, Lake Forest, CA 92630</p>
          <nav className="home-footer__socials" aria-label="OneLaser social media">
            <a href="https://www.facebook.com/onelaser.official" target="_blank" rel="noreferrer" aria-label="OneLaser on Facebook"><FacebookLogo size={18} weight="fill" /></a>
            <a href="https://www.youtube.com/@OneLaser.Official" target="_blank" rel="noreferrer" aria-label="OneLaser on YouTube"><YoutubeLogo size={19} weight="fill" /></a>
            <a href="https://www.instagram.com/onelaser.official/" target="_blank" rel="noreferrer" aria-label="OneLaser on Instagram"><InstagramLogo size={18} weight="bold" /></a>
            <a href="https://x.com/OneLaserHQ" target="_blank" rel="noreferrer" aria-label="OneLaser on X"><XLogo size={17} weight="bold" /></a>
            <a href="https://www.tiktok.com/@onelaser.official" target="_blank" rel="noreferrer" aria-label="OneLaser on TikTok"><TiktokLogo size={18} weight="fill" /></a>
          </nav>
        </div>
      </div>
      <div className="home-footer__bottom"><span>© {new Date().getFullYear()} OneLaser. All rights reserved.</span><div><a href="https://www.1laser.com/pages/privacy-policy">Privacy Policy</a><a href="https://www.1laser.com/pages/terms-of-service">Terms of Service</a><a href="#top">Back to top <ArrowUpRight size={13} /></a></div></div>
    </footer>
  );
}

const videos = [
  {
    id: "_dv0xXmHSiA",
    title: "Engineered in the USA",
    copy: "What makes OneLaser different.",
    image: "home-video-engineered-usa.jpg",
    featured: true,
  },
  {
    id: "tSroh4OUkX4",
    title: "Inside OneLaser’s Production Facility",
    copy: "A look at how OneLaser machines are built.",
    image: "home-video-production-facility.jpg",
  },
  {
    id: "87PrP4Vigzo",
    title: "OneLaser XRF Full Overview",
    copy: "Features, performance, and real-world results.",
    image: "home-video-xrf-overview.jpg",
  },
  {
    id: "RxgWwJg5kAk",
    title: "Behind The Maker Ep.001",
    copy: "Stories from the makers who inspire us.",
    image: "home-video-behind-maker.jpg",
  },
];

export function HomePage() {
  const [activeHero, setActiveHero] = useState(0);
  const [heroPosition, setHeroPosition] = useState(1);
  const [heroTransitioning, setHeroTransitioning] = useState(true);
  const [heroPaused, setHeroPaused] = useState(false);
  const [heroCycle, setHeroCycle] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState("All");
  const [topButtonState, setTopButtonState] = useState("hidden");
  const touchStart = useRef(null);
  const projectTouchStart = useRef(null);
  const projectPanelRef = useRef(null);
  const showcaseRailRef = useRef(null);
  const videoRailRef = useRef(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    document.title = "OneLaser — Make More";
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = "Discover OneLaser professional laser systems for makers, businesses, education, and production.";
    }
  }, []);

  useEffect(() => {
    const palettes = [
      ["#e7ded5", "#d8c9bc", "#f3ece5"],
      ["#dfe5df", "#cbd8cf", "#edf2ed"],
      ["#dde4e8", "#c7d4db", "#edf2f4"],
      ["#e8dfdf", "#d9c8ca", "#f4ebeb"],
      ["#e5e0e9", "#d3cadb", "#f1edf4"],
      ["#e1e6e3", "#cbd7d2", "#eff3f1"],
      ["#e8e2d7", "#d8cdbb", "#f4efe6"],
    ];
    const prepareImage = (image) => {
      if (!(image instanceof HTMLImageElement)) return;
      const seed = `${image.currentSrc || image.getAttribute("src") || ""}|${image.alt || ""}`;
      const hash = [...seed].reduce((value, character) => (((value << 5) - value + character.charCodeAt(0)) | 0), 0);
      const [base, low, high] = palettes[Math.abs(hash) % palettes.length];
      image.style.setProperty("--image-placeholder-base", base);
      image.style.setProperty("--image-placeholder-low", low);
      image.style.setProperty("--image-placeholder-high", high);
      image.classList.toggle("is-image-ready", image.complete && image.naturalWidth > 0);
      image.classList.toggle("is-image-error", image.complete && image.naturalWidth === 0);
    };
    const markReady = (event) => {
      if (!(event.target instanceof HTMLImageElement)) return;
      event.target.classList.add("is-image-ready");
      event.target.classList.remove("is-image-error");
    };
    const markError = (event) => {
      if (!(event.target instanceof HTMLImageElement)) return;
      event.target.classList.add("is-image-error");
      event.target.classList.remove("is-image-ready");
    };
    const observer = new MutationObserver((records) => records.forEach((record) => {
      if (record.type === "attributes") prepareImage(record.target);
      record.addedNodes.forEach((node) => {
        if (node instanceof HTMLImageElement) prepareImage(node);
        if (node instanceof Element) node.querySelectorAll("img").forEach(prepareImage);
      });
    }));
    document.querySelectorAll(".home-shell img").forEach(prepareImage);
    document.addEventListener("load", markReady, true);
    document.addEventListener("error", markError, true);
    observer.observe(document.body, { attributes: true, attributeFilter: ["src", "srcset"], childList: true, subtree: true });
    return () => {
      document.removeEventListener("load", markReady, true);
      document.removeEventListener("error", markError, true);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (heroPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      moveHero(1);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [heroCycle, heroPaused]);

  useEffect(() => {
    if (!activeVideo && !activeProject) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
        setActiveProject(null);
      }
      if (activeProject && event.key === "ArrowLeft") moveProject(-1);
      if (activeProject && event.key === "ArrowRight") moveProject(1);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject, activeVideo]);

  useEffect(() => {
    if (!activeProject) return undefined;
    const frame = window.requestAnimationFrame(() => projectPanelRef.current?.scrollTo({ top: 0 }));
    return () => window.cancelAnimationFrame(frame);
  }, [activeProject]);

  useEffect(() => {
    let frame = 0;
    const updateTopButton = () => {
      frame = 0;
      const currentScrollY = window.scrollY;
      if (currentScrollY < 480) {
        setTopButtonState("hidden");
      } else if (currentScrollY < lastScrollYRef.current - 4) {
        setTopButtonState("visible");
      } else if (currentScrollY > lastScrollYRef.current + 4) {
        setTopButtonState("muted");
      }
      lastScrollYRef.current = currentScrollY;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateTopButton);
    };
    updateTopButton();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function moveHero(direction) {
    setActiveHero((current) => (current + direction + heroSlides.length) % heroSlides.length);
    setHeroPosition((current) => current + direction);
    setHeroCycle((current) => current + 1);
  }

  function chooseHero(index) {
    setActiveHero(index);
    setHeroPosition(index + 1);
    setHeroCycle((current) => current + 1);
  }

  function handleHeroTransitionEnd() {
    if (heroPosition !== 0 && heroPosition !== heroSlides.length + 1) return;
    setHeroTransitioning(false);
    setHeroPosition(heroPosition === 0 ? heroSlides.length : 1);
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => setHeroTransitioning(true)));
  }

  function handleHeroTouchEnd(event) {
    if (touchStart.current == null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) moveHero(distance > 0 ? -1 : 1);
    touchStart.current = null;
  }

  function handleProjectTouchStart(event) {
    if (event.touches.length !== 1) {
      projectTouchStart.current = null;
      return;
    }
    projectTouchStart.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  }

  function handleProjectTouchEnd(event) {
    const start = projectTouchStart.current;
    projectTouchStart.current = null;
    if (!start || event.changedTouches.length !== 1) return;
    const distanceX = event.changedTouches[0].clientX - start.x;
    const distanceY = event.changedTouches[0].clientY - start.y;
    if (Math.abs(distanceX) > 56 && Math.abs(distanceX) > Math.abs(distanceY) * 1.2) {
      moveProject(distanceX > 0 ? -1 : 1);
    }
  }

  function scrollVideos(direction) {
    videoRailRef.current?.scrollBy({ left: direction * 460, behavior: "smooth" });
  }

  function scrollShowcase(direction) {
    showcaseRailRef.current?.scrollBy({ left: direction * 520, behavior: "smooth" });
  }

  function chooseProjectFilter(filter) {
    setProjectFilter(filter);
    showcaseRailRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }

  const filteredProjects = projectShowcase.filter((project) => projectMatchesFilter(project, projectFilter));

  function moveProject(direction) {
    setActiveProject((current) => {
      const availableProjects = filteredProjects.length ? filteredProjects : projectShowcase;
      const index = availableProjects.findIndex((project) => project.image === current?.image);
      return availableProjects[(index + direction + availableProjects.length) % availableProjects.length];
    });
  }

  const activeProjectProduct = activeProject ? products[activeProject.productId] : null;
  const activeProjectEconomics = activeProjectProduct ? economicsExamples[activeProjectProduct.economicsId] : null;
  const activeProjectMachine = activeProject ? recommendedMachines[activeProject.machineId] : null;
  const activeProjectMonthlySales = activeProjectEconomics?.monthlySales ?? economicsAssumptions.monthlySales;
  const activeProjectMonthlyProfit = activeProjectEconomics
    ? activeProjectEconomics.unitPrice * (Number.parseInt(activeProjectEconomics.margin, 10) / 100) * activeProjectMonthlySales
    : 0;
  return (
    <div className="home-shell" id="top">
      <a className="home-skip" href="#home-main">Skip to content</a>
      <HomeNavigation />

      <main id="home-main">
        <section
          className={heroPaused ? "home-hero is-paused" : "home-hero"}
          aria-roledescription="carousel"
          aria-label="Featured OneLaser stories"
          onMouseEnter={() => setHeroPaused(true)}
          onMouseLeave={() => setHeroPaused(false)}
          onFocus={() => setHeroPaused(true)}
          onBlur={() => setHeroPaused(false)}
          onTouchStart={(event) => {
            touchStart.current = event.touches[0].clientX;
            setHeroPaused(true);
          }}
          onTouchEnd={handleHeroTouchEnd}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") moveHero(-1);
            if (event.key === "ArrowRight") moveHero(1);
          }}
          tabIndex={0}
        >
          <div
            className={`home-hero__track${heroTransitioning ? "" : " is-jumping"}`}
            style={{ transform: `translate3d(-${heroPosition * 100}%, 0, 0)` }}
            onTransitionEnd={handleHeroTransitionEnd}
          >
            {loopedHeroSlides.map((slide, trackIndex) => {
              const index = (trackIndex - 1 + heroSlides.length) % heroSlides.length;
              return (
              <article className="home-hero__slide" aria-hidden={activeHero !== index || trackIndex !== heroPosition} key={`${slide.desktopImage}-${trackIndex}`}>
                <picture>
                  <source media="(max-width: 560px)" srcSet={asset(slide.mobileImage)} />
                  <img src={asset(slide.desktopImage)} alt={slide.alt} draggable="false" />
                </picture>
                <a className="home-hero__link" href={slide.href} aria-label={slide.label} tabIndex={activeHero === index && trackIndex === heroPosition ? 0 : -1} />
              </article>
              );
            })}
          </div>
          <button className="home-hero__arrow home-hero__arrow--left" type="button" onClick={() => moveHero(-1)} aria-label="Previous banner"><CaretLeft size={22} weight="bold" /></button>
          <button className="home-hero__arrow home-hero__arrow--right" type="button" onClick={() => moveHero(1)} aria-label="Next banner"><CaretRight size={22} weight="bold" /></button>
          <div className="home-hero__dots" aria-label="Choose banner">
            {heroSlides.map((slide, index) => (
              <button
                className={index === activeHero ? "is-active" : ""}
                type="button"
                onClick={() => chooseHero(index)}
                aria-label={`Show banner ${index + 1}`}
                aria-current={index === activeHero ? "true" : undefined}
                key={slide.desktopImage}
              ><span /></button>
            ))}
          </div>
        </section>

        <section className="home-products" id="machines" aria-labelledby="home-products-title">
          <header className="home-products__header">
            <h2 id="home-products-title">Engrave the Future</h2>
            <p>Browse our high-performance machines engineered for elite creators</p>
          </header>
          <div className="home-products__grid">
            {productCards.map((product) => (
              <a className={`home-product-card home-product-card--${product.id}`} href={product.href} key={product.name}>
                <img className="home-product-card__scene" src={asset(product.scene)} alt="" loading="lazy" />
                <div className="home-product-card__copy">
                  <span className="home-product-card__eyebrow">{product.label}</span>
                  <h2><ProductName name={product.name} /></h2>
                  <p>{product.copy}</p>
                  <div className="home-product-card__features">
                    {product.features.map((feature) => <span key={feature}>{feature}</span>)}
                  </div>
                </div>
                <div className="home-product-card__media">
                  <img src={asset(product.image)} alt={`${product.name} laser system`} loading="lazy" />
                </div>
                <strong className="home-product-card__cta">Explore {product.name.replace("™ Series", "").replace("™", "")} <ArrowUpRight size={16} weight="bold" /></strong>
              </a>
            ))}
          </div>
        </section>

        <section className="home-why" id="why-onelaser" aria-labelledby="why-onelaser-title">
          <div className="home-why__inner">
            <header className="home-why__header">
              <span>WHY ONELASER</span>
              <h2 id="why-onelaser-title">OneLaser means high performance, reinvented.</h2>
              <p>Buy Once. Run Longer. Make More.</p>
            </header>
            <div className="home-why__story">
              <figure className="home-why__visual">
                <img src={asset("why-onelaser-rf-precision.webp")} alt="Exploded-view RF laser engineering and detailed wood engraving result" loading="lazy" />
                <figcaption><span>RF ENGINEERING</span><strong>Performance built from the inside out.</strong></figcaption>
              </figure>
              <div className="home-why__advantages" aria-label="Why choose OneLaser">
                {whyAdvantages.map((advantage, index) => (
                  <article className="home-why-advantage" key={advantage.title}>
                    <span className="home-why-advantage__index">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{advantage.title}</h3>
                    <p>{advantage.body.map((line) => <span key={line}>{line}</span>)}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="home-showcase" id="inspiration" aria-labelledby="home-showcase-title">
          <header className="home-showcase__header">
            <div className="home-showcase__heading">
              <span>ENDLESS POSSIBILITIES</span>
              <h2 id="home-showcase-title">One Machine. Endless Possibilities.</h2>
              <p>Your work is only as good as your laser. That’s why the best work runs on OneLaser.</p>
            </div>
            <div className="home-showcase__controls" aria-label="Browse finished OneLaser projects">
              <button type="button" onClick={() => scrollShowcase(-1)} aria-label="Show previous finished projects"><CaretLeft size={22} /></button>
              <button type="button" onClick={() => scrollShowcase(1)} aria-label="Show more finished projects"><CaretRight size={22} /></button>
            </div>
          </header>
          <nav className="home-showcase__filters" aria-label="Filter finished projects by material">
            <div>
              {projectFilters.map((filter) => (
                <button
                  type="button"
                  className={projectFilter === filter ? "is-active" : ""}
                  aria-pressed={projectFilter === filter}
                  onClick={() => chooseProjectFilter(filter)}
                  key={filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </nav>
          <div className="home-showcase__grid" ref={showcaseRailRef} aria-label="Finished projects made with OneLaser">
            {filteredProjects.map((project) => (
              <button type="button" className="home-showcase-card" onClick={() => setActiveProject(project)} aria-label={`Enlarge ${project.title}`} key={project.image}>
                <img src={asset(project.image)} alt={project.title} />
                <span className="home-showcase-card__shade" />
                <span className="home-showcase-card__copy"><small>{project.material}</small><strong>{project.title}</strong></span>
              </button>
            ))}
          </div>
        </section>

        <section className="home-industries" id="industries" aria-labelledby="home-industries-title">
          <header className="home-industries__header">
            <h2 id="home-industries-title">Inspiring Makers, Builders, and Innovators Everywhere</h2>
            <p>From first projects to production floors and classrooms, OneLaser gives every idea room to grow.</p>
          </header>
          <div className="home-industries__grid">
            <article className="home-industry home-industry--makers">
              <img src={asset("home-industry-makers-v2.jpg")} alt="A maker presenting a collection of finished engraved creations" loading="lazy" />
              <span className="home-industry__shade" />
              <div><h2>For Makers & Creators</h2><p>From your first project to your next big idea, OneLaser is with you every step of the way.</p></div>
            </article>
            <article className="home-industry home-industry--business">
              <img src={asset("home-industry-business-v2.jpg")} alt="A small business owner preparing finished personalized products for customers" loading="lazy" />
              <span className="home-industry__shade" />
              <div><h2>For Business</h2><p>Increase throughput, broaden your catalog, and build repeatable production.</p></div>
            </article>
            <article className="home-industry home-industry--education">
              <img src={asset("home-industry-education-v2.jpg")} alt="Students collaborating on hands-on STEM projects in a classroom" loading="lazy" />
              <span className="home-industry__shade" />
              <div><h2>For Education</h2><p>Bring hands-on STEM learning into classrooms, labs, and maker spaces.</p></div>
            </article>
          </div>
          <a className="home-industries__cta" href="https://www.1laser.com/pages/contact-us" target="_blank" rel="noreferrer">
            Let’s Talk with Our Experts! <ArrowUpRight size={17} weight="bold" />
          </a>
        </section>

        <section className="home-brand-pillars" id="support" aria-labelledby="brand-pillars-title">
          <header>
            <span>THE ONELASER STANDARD</span>
            <h2 id="brand-pillars-title">Built around your success.</h2>
          </header>
          <div className="home-brand-pillars__grid">
            <article>
              <span>01</span>
              <h3>U.S. Machine Company</h3>
              <p>A machine partner built for the U.S. market, with accountable delivery, local support, spare parts, users, community, and service you can rely on.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Innovation-Driven Performance</h3>
              <p>We turn innovation into real productivity: faster workflows, steadier output, and less manual work.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Outcome Guarantee</h3>
              <p>We stand behind the results you need, from setup and first successful jobs to reliable, measurable production over time.</p>
            </article>
          </div>
        </section>

        <section className="home-videos" id="videos">
          <header className="home-videos__header">
            <div className="home-section-heading">
              <h2>At OneLaser, Performance Drives Innovation</h2>
              <p>Our promise is clear: deliver innovative products built with integrity, empower users with lasting support, and strengthen our community through shared growth. These values guide everything we do and define the future we are creating together.</p>
              <a href="https://www.1laser.com/pages/about-us" target="_blank" rel="noreferrer">Read Our Story <ArrowUpRight size={17} weight="bold" /></a>
            </div>
            <div className="home-videos__controls" aria-label="Browse OneLaser videos">
              <button type="button" onClick={() => scrollVideos(-1)} aria-label="Show previous OneLaser video"><CaretLeft size={22} /></button>
              <button type="button" onClick={() => scrollVideos(1)} aria-label="Show more OneLaser videos"><CaretRight size={22} /></button>
            </div>
          </header>
          <div className="home-videos__rail" ref={videoRailRef} aria-label="OneLaser videos">
            {videos.map((video) => (
              <article className="home-video-card" key={video.id}>
                <button className="home-video-card__cover" type="button" onClick={() => setActiveVideo(video)} aria-label={`Play ${video.title}`}>
                  <img src={asset(video.image)} alt="" />
                  <span className="home-video-card__play"><Play size={24} weight="fill" /></span>
                </button>
                <h3>{video.title}</h3>
                <p>{video.copy}</p>
              </article>
            ))}
          </div>
        </section>

      </main>

      <HomeFooter />

      <button
        type="button"
        className={`home-back-to-top home-back-to-top--${topButtonState}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        })}
      >
        <CaretUp size={17} weight="bold" aria-hidden="true" />
        <span>TOP</span>
      </button>

      {activeVideo && (
        <div className="home-video-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveVideo(null); }}>
          <div className="home-video-modal__panel">
            <button className="home-video-modal__close" type="button" onClick={() => setActiveVideo(null)} aria-label="Close video"><X size={22} weight="bold" /></button>
            <div className="home-video-modal__frame">
              <iframe src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`} title={activeVideo.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      )}

      {activeProject && (
        <div className="home-project-modal" role="dialog" aria-modal="true" aria-label={activeProject.title} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProject(null); }}>
          <div
            className="home-project-modal__panel"
            ref={projectPanelRef}
            onTouchStart={handleProjectTouchStart}
            onTouchEnd={handleProjectTouchEnd}
            onTouchCancel={() => { projectTouchStart.current = null; }}
          >
            <button className="home-project-modal__close" type="button" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={22} weight="bold" /></button>
            <figure className="home-project-modal__media">
              <img src={asset(activeProject.image)} alt={activeProject.title} />
              <button className="home-project-modal__arrow home-project-modal__arrow--left" type="button" onClick={() => moveProject(-1)} aria-label="Show previous project"><CaretLeft size={26} /></button>
              <button className="home-project-modal__arrow home-project-modal__arrow--right" type="button" onClick={() => moveProject(1)} aria-label="Show next project"><CaretRight size={26} /></button>
            </figure>
            <aside className={`home-project-modal__details${activeProjectEconomics ? "" : " home-project-modal__details--no-economics"}`}>
              <header>
                <span>{activeProject.representative ? "REPRESENTATIVE OPPORTUNITY" : activeProject.material}</span>
                <h2>{activeProject.title}</h2>
                <p>{activeProjectProduct?.description}</p>
              </header>

              {activeProjectProduct && (
                <section className="home-project-modal__product-info" aria-label="Project specifications">
                  <dl className="home-project-modal__facts">
                    <div><dt>Material</dt><dd>{activeProjectProduct.material}</dd></div>
                    <div><dt>Process</dt><dd>{activeProjectProduct.process}</dd></div>
                  </dl>
                  <div className="home-project-modal__tags">
                    {activeProjectProduct.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <p className="home-project-modal__setup"><strong>Setup guidance</strong><span>{activeProjectProduct.setupNote}</span></p>
                </section>
              )}

              {activeProjectEconomics && (
                <section className="home-project-modal__economics">
                  <header>
                    <div><span>ILLUSTRATIVE EARNINGS</span><strong>Estimated monthly profit</strong></div>
                    <b>{wholeCurrencyFormatter.format(activeProjectMonthlyProfit)}<small>/mo.</small></b>
                  </header>
                  <dl>
                    <div><dt>Selling price</dt><dd>{activeProjectEconomics.sellingPrice}</dd></div>
                    <div><dt>Net margin</dt><dd>{activeProjectEconomics.margin}</dd></div>
                    <div><dt>Hourly output</dt><dd>{activeProjectEconomics.hourlyOutput}</dd></div>
                  </dl>
                  <p>{activeProjectMonthlySales} products/mo. × {activeProjectEconomics.sellingPrice} selling price × {activeProjectEconomics.margin} net margin.</p>
                  <small>{economicsDisclaimer}</small>
                </section>
              )}

              {activeProjectMachine && (
                <section className="home-project-modal__machine">
                  <div className="home-project-modal__machine-copy">
                    <span>RECOMMENDED MACHINE</span>
                    <h3>{activeProjectMachine.name}</h3>
                    <p>{activeProjectMachine.copy}</p>
                  </div>
                  <img className={`home-project-modal__machine-image--${activeProject.machineId}`} src={asset(activeProjectMachine.modalImage || activeProjectMachine.image)} alt={`${activeProjectMachine.name} laser machine`} />
                  <a href={activeProjectMachine.href}>Explore {activeProjectMachine.name} <ArrowUpRight size={16} weight="bold" /></a>
                </section>
              )}
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}
