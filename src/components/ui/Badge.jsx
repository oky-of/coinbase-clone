const Badge = ({ children, className = '' }) => {
	return (
		<span
			className={`
        inline-flex items-center gap-1.5
        px-3 py-2
        rounded-md
        border border-gray-15 
        text-[16px] text-gray-60
        bg-white
        ${className}
      `}
		>
			{children}
		</span>
	);
};

export default Badge;
