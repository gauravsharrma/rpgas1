import React from 'react';

const iconProps = {
  className: "w-6 h-6",
  strokeWidth: "1.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
};

export const ArrowLeftIcon: React.FC = () => (
    <svg {...iconProps} className="w-5 h-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
);
export const PoolIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg>
);
export const GymIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h13.5M5.25 12h13.5m-13.5 3.75h13.5M3.75 3.75h16.5v16.5H3.75V3.75z" /></svg>
);
export const ParkIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.816H7.923a3.375 3.375 0 00-3.285 2.816l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" /></svg>
);
export const ParkingIcon: React.FC = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M18.75 18.75l-6-6m0 0l-6-6m6 6l6-6m-6 6l-6 6" /></svg>
);
export const RetailIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5m-6 0V21M3 3h18v18H3V3z" /></svg>
);
export const BedIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
);
export const VillaIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3.75l-1.5.545m0 6.205l3 1m-3-1l-3-1m-3.75 6.75V4.5m-3.75 6.75l3-1.091m0 0l3 1.091m-3-1.091V7.5" /></svg>
);
export const BuildingOfficeIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375M9 12h6.375M9 17.25h6.375" /></svg>
);
export const MapPinIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
);
export const CalendarDaysIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008zm-3 0h.008v.008H9v-.008zm6 0h.008v.008h-.008v-.008zm-3 3h.008v.008H9v-.008zm3 0h.008v.008h-.008v-.008z" /></svg>
);
export const BanknotesIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504-1.125-1.125-1.125h-.375m1.5-3.75v3.75m-16.5-3V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v3m-18 0h18" /></svg>
);
export const SparklesIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.924-2.924l-1.178-.398 1.178-.398a3.375 3.375 0 002.924-2.924l.398-1.178.398 1.178a3.375 3.375 0 002.924 2.924l1.178.398-1.178.398a3.375 3.375 0 00-2.924 2.924z" /></svg>
);
export const EyeIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.25-7.5a1.012 1.012 0 011.736 0l4.25 7.5c.245.433.245.96 0 1.393l-4.25 7.5a1.012 1.012 0 01-1.736 0l-4.25-7.5zM12 15a3 3 0 100-6 3 3 0 000 6z" /></svg>
);
export const TagIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" /></svg>
);
export const ChevronDownIcon: React.FC = () => (
    <svg {...iconProps} className="w-5 h-5 ml-2 -mr-1 text-gray-400"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
);

// Elegant, solid PhoneIcon to prevent clipping issues
export const PhoneIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-1.262 2.331l-2.257.828a1.5 1.5 0 00-1.09 1.828l.94 3.762a1.5 1.5 0 001.828 1.09l2.257-.828a1.875 1.875 0 012.331 1.262l4.423 1.105c.834.209 1.42.959 1.42 1.82v1.372a3 3 0 01-3 3h-1.372c-8.158 0-14.803-6.645-14.803-14.803V4.5z"
        clipRule="evenodd"
        />
    </svg>
);

// Shared Icons from other components
export const LocationSolidIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-5.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className={className}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.219.354-.925 3.375 3.414-.894.342-.089z" />
    </svg>
);

// Added Icons
export const BrochureIcon: React.FC = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-5.25-11.494v11.494M17.25 6.253v11.494M3.75 6.253v11.494M20.25 12H3.75" /></svg>
);
export const FactsheetIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);
export const TrifoldIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h4v16H4zM10 4h4v16h-4zM16 4h4v16h-4z" /></svg>
);
export const FloorPlanIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 018.25 20.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
);
export const MasterPlanIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
);

export const SwimmingPoolIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg>
);
export const GardenIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.816H7.923a3.375 3.375 0 00-3.285 2.816l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" /></svg>
);
export const BBQIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.622a8.981 8.981 0 003-1.849 8.25 8.25 0 013.362-2.559z" /></svg>
);
export const KidsPlayIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
);
export const ChessIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 21v-1.5a4.5 4.5 0 014.5-4.5h6a4.5 4.5 0 014.5 4.5V21" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm0 0a3.75 3.75 0 107.5 0 3.75 3.75 0 00-7.5 0z" /></svg>
);
export const SeatingIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 19.5h16.5v-1.5H3.75v1.5zM3.75 12h16.5m-16.5-1.5V6a2.25 2.25 0 012.25-2.25h12A2.25 2.25 0 0120.25 6v4.5m-16.5 0h16.5" /></svg>
);
export const MosqueIcon: React.FC = () => (
    <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M4 10a8 8 0 0116 0v1H4v-1zm6 1v8h4v-8zM2 19h20" /></svg>
);
