import "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
	return (
		<button type="button" className="px-4 py-2">
			{children}
		</button>
	);
};
