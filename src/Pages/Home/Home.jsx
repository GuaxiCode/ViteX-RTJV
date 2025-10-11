import React, { useState } from "react";

import reactLogo from "./Images/react.svg";
import tailwindcssLogo from "./Images/tailwindcss.svg";
import javascriptLogo from "./Images/javascript.svg";
import viteLogo from "./Images/vite.svg";

export default function Home() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex min-h-screen items-center justify-center bg-sky-50">
				<div className="flex w-full max-w-xl flex-col items-center justify-center gap-6 rounded-lg p-6 backdrop-blur-sm">
					<header className="mb-4 flex w-full flex-col items-center">
						<div className="mb-4 flex flex-wrap justify-center gap-8">
							<a
								href="https://react.dev"
								target="_blank"
								rel="noopener noreferrer"
								className="transform transition-transform hover:scale-110"
							>
								<img
									src={reactLogo}
									alt="React Logo"
									className="h-12 w-12"
								/>
							</a>

							<a
								href="https://tailwindcss.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="transform transition-transform hover:scale-110"
							>
								<img
									src={tailwindcssLogo}
									alt="TailwindCSS Logo"
									className="h-12 w-12"
								/>
							</a>

							<a
								href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
								target="_blank"
								rel="noopener noreferrer"
								className="transform transition-transform hover:scale-110"
							>
								<img
									src={javascriptLogo}
									alt="Javascript Logo"
									className="h-12 w-12"
								/>
							</a>

							<a
								href="https://vite.dev"
								target="_blank"
								rel="noopener noreferrer"
								className="transform transition-transform hover:scale-110"
							>
								<img
									src={viteLogo}
									alt="Vite Logo"
									className="h-12 w-12"
								/>
							</a>
						</div>

						<h1 className="text-center text-2xl font-extrabold text-sky-900 sm:text-4xl">
							RTJV Template
						</h1>
					</header>

					<main className="flex w-full flex-col items-center gap-6 px-4">
						<section className="flex w-full flex-col items-center gap-6 rounded-2xl border-[1px] border-sky-400 bg-sky-100/60 p-6 shadow-sm transition-all duration-300">
							<button
								onClick={() => setCount((c) => c + 1)}
								className="w-full max-w-[375px] cursor-pointer rounded-lg bg-sky-400 px-4 py-2 font-semibold text-white shadow transition-colors duration-300 hover:bg-sky-500"
							>
								Count is {count}
							</button>

							<p className="text-center text-sm text-sky-800/80 sm:text-base">
								Edit{" "}
								<code className="rounded bg-sky-200/40 p-1">
									src/Pages/Home/Home.jsx
								</code>{" "}
								and save to test HMR.
							</p>
						</section>
					</main>

					<footer className="mt-4 w-full text-center text-sm text-sky-600">
						Click on the React, Tailwind, Javascript and Vite logos
						to learn more.
					</footer>
				</div>
			</div>
		</>
	);
}
