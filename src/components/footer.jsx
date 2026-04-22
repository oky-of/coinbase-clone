import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import GlobalPreferencesModal from "./ui/GlobalPreferencesModal";

/* ── Data ── */
const COLUMNS = [
  {
    id: "col1",
    sections: [
      {
        title: "Company",
        links: [
          { label: "About" },
          { label: "Careers"},
          { label: "Affiliates"},
          { label: "Blog"},
          { label: "Press"},
          { label: "Security"},
          { label: "Investors"},
          {
            label: "Vendors",
          },
          { label: "Legal & privacy"},
          {
            label: "Cookie policy",
          },
          { label: "Cookie preferences"},
          {
            label: "Digital Asset Disclosures",
          },
        ],
      },
      {
        title: "Learn",
        links: [
          { label: "Explore"},
          {
            label: "Market statistics",
          },
          {
            label: "Market newsletter",
          },
          {
            label: "Crypto basics",
          },
          {
            label: "Tips & tutorials",
          },
          {
            label: "Crypto glossary",
          },
          {
            label: "Market updates",
          },
          {
            label: "What is Bitcoin?",
          },
          {
            label: "What is crypto?",
          },
          {
            label: "What is a blockchain?",
          },
          {
            label: "How to set up a crypto wallet?",
          },
          {
            label: "How to send crypto?",
          },
          {
            label: "Taxes",
          },
        ],
      },
    ],
  },
  {
    id: "col2",
    sections: [
      {
        title: "Individuals",
        links: [
          { label: "Buy & sell" },
          {
            label: "Earn free crypto",
          },
          { label: "Base App" },
          { label: "Nexus Plus" },
          { label: "Debit Card" },
        ],
      },
      {
        title: "Businesses",
        links: [
          {
            label: "Asset Listings",
          },
          {
            label: "Business accounts",
          },
          { label: "Payments" },
          { label: "Commerce" },
          {
            label: "Token Manager",
          },
        ],
      },
      {
        title: "Institutions",
        links: [
          { label: "Prime" },
          { label: "Staking" },
          { label: "Exchange" },
          {
            label: "International Exchange",
          },
          {
            label: "Derivatives Exchange",
          },
          {
            label: "Verified Pools",
          },
        ],
      },  
    ],
  },
  {
    id: "col3",
    sections: [
      {
        title: "Developers",
        links: [
          {
            label: "Developer Platform",
          },
          { label: "Base" },
          {
            label: "Server Wallets",
          },
          {
            label: "Embedded Wallets",
          },
          {
            label: "Base Accounts (Smart Wallets)",
          },
          {
            label: "Onramp & Offramp",
          },
          { label: "x402" },
          {
            label: "Trade API",
          },
          {
            label: "Paymaster",
          },
          {
            label: "OnchainKit",
          },
          {
            label: "Data API",
          },
          {
            label: "Verifications",
          },
          {
            label: "Node",
          },
          {
            label: "AgentKit",
          },
          {
            label: "Staking",
          },
          {
            label: "Faucet",
          },
          {
            label: "Exchange API",
          },
          {
            label: "International Exchange API",
          },
          {
            label: "Prime API",
          },
          {
            label: "Derivatives API",
          },
        ],
      },
    ],
  },
  {
    id: "col4",
    sections: [
      {
        title: "Support",
        links: [
          { label: "Help center" },
          {
            label: "Contact us",
          },
          {
            label: "Create account",
          },
          {
            label: "ID verification",
          },
          {
            label: "Account information",
          },
          {
            label: "Payment methods",
          },
          {
            label: "Account access",
          },
          {
            label: "Supported crypto",
          },
          { label: "Status" },
        ],
      },
      {
        title: "Asset prices",
        links: [
          {
            label: "Bitcoin price",
          },
          {
            label: "Ethereum price",
          },
          {
            label: "Solana price",
          },
          { label: "XRP price" },
        ],
      },
      {
        title: "Stock prices",
        links: [
          {
            label: "NVIDIA price",
          },
          { label: "Apple price"},
          {
            label: "Microsoft price",
          },
          {
            label: "Amazon price",
          },
        ],
      },
    ],
  },
];

const SOCIALS = [
  {
    label: "X",
  
    icon: "https://static-assets.coinbase.com/marketing/cdx/x-light.svg",
  },
  {
    label: "LinkedIn",
    icon: "https://static-assets.coinbase.com/marketing/cdx/linkedin-light.svg",
  },
  {
    label: "Instagram",
    icon: "https://static-assets.coinbase.com/marketing/cdx/instagram-light.svg",
  },
  {
    label: "TikTok",
    icon: "https://static-assets.coinbase.com/marketing/cdx/tiktok-light.svg",
  },
];

/* ── Sub-components ── */
const FooterSection = ({ title, links }) => (
  <div className="flex flex-col gap-3">
    <span className="text-[16px] leading-5 font-bold text-[#OAoBOD]">
      {title}
    </span>
    <div className="flex flex-col gap-2">
      {links.map((link) => (
        <a
          key={link.label}
          className="text-[16px] leading-5 text-gray-60 font-medium hover:text-gray-100 transition-colors duration-150">
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

const FooterLogo = ({ height = 60 }) => (
  <img
    src="/src/assets/coinbashLogoNavigation-4.svg"
    alt="Coinbash"
    height={height}
    style={{ height: `${height}px`, width: "auto", display: "block" }}
  />
);

/* ── Footer ── */
const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [country, setCountry] = useState("Global");
  const [language, setLanguage] = useState("English");

  return (
    <footer className="flex flex-col items-center bg-gray-10 w-full">
      <div className="w-full max-w-400 pt-6 pb-8 px-4 md:pt-16 md:max-w-307 lg:px-12 lg:pt-20 lg:max-w-400">
        {/* Logo — mobile only */}
        <div className="mb-8 lg:hidden">
          <FooterLogo />
        </div>

        
        <div className="flex flex-col lg:flex-row gap-10">
         
          <div className="hidden lg:flex flex-col items-start shrink-0 w-[20%] pt-0.5">
            <FooterLogo />
          </div>

         
          {COLUMNS.map((col) => (
            <div key={col.id} className="flex lg:flex-col lg:gap-10 gap-5 lg:flex-1">
              {col.sections.map((section) => (
                <FooterSection
                  key={section.title}
                  title={section.title}
                  links={section.links}
                />
              ))}
            </div>
          ))}
        </div>

       
        <div className="flex flex-col gap-4 mt-12">
         
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Crypto Nexus ${s.label} page`}
                className="opacity-100 hover:opacity-70 transition-opacity duration-150">
                <img
                  src={s.icon}
                  alt={`${s.label} logo`}
                  width={16}
                  height={16}
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          {/* Divider */}
          <hr className="w-full border-0 border-t border-gray-15 my-2" />

          {/* Copyright + legal + locale row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Left: copyright + legal links */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <p className="text-[0.8125rem] leading-5 text-gray-100 m-0">
                © {new Date().getFullYear()} Crypto Nexus
              </p>
              <span className="text-gray-40 text-[0.8125rem]">•</span>
              <a
                className="text-[0.8125rem] leading-5 text-gray-60 hover:text-gray-100 transition-colors">
                Privacy
              </a>
              <span className="text-gray-40 text-[0.8125rem]">•</span>
              <a
                className="text-[0.8125rem] leading-5 text-gray-60 hover:text-gray-100 transition-colors">
                Terms &amp; Conditions
              </a>
              <a 
              className="text-red-600  font-medium text-[0.90rem]">Disclaimer: This is a demo application built for educational purposes only and is not affiliated with Coinbase or any financial institution.</a>
            </div>

            {/* Right: locale selector button */}
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-60">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span className="text-[0.8125rem] leading-5 text-gray-60">
                {country}
              </span>
              <span className="text-gray-40 text-[0.8125rem]">•</span>
              <span className="text-[0.8125rem] leading-5 text-gray-60">
                {language}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Global Preferences Modal */}
      <AnimatePresence>
        {modalOpen && (
          <GlobalPreferencesModal
            onClose={() => setModalOpen(false)}
            country={country}
            language={language}
            onCountryChange={setCountry}
            onLanguageChange={setLanguage}
          />
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
