import React from "react";

export default function FullScreen({ children, className, ...props }) {
	return (
		<>
			<div
				className={`h-screen min-h-screen w-screen ${className}`}
				{...props}
			>
				{children}
			</div>
		</>
	);
}
