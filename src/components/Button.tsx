import "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
	return (
		<button type="button" className="dcui-px-4 dcui-py-2">
			{children}
		</button>
	);
};
