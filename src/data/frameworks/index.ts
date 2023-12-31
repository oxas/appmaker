import Express from "./express";
import React from "./react";
import Next from "./next";
import kleur from "kleur";
import ReactNative from "./react-native";
import Electron from "./electron";
import Framework from "../../types/framework";
import { AppTypeKeys } from "../../types/keys";

const Frameworks: { [key in AppTypeKeys]: Framework[] } = {
	web: [
		Next,
		// {	id: "a", prompts: [], intro: "Creating [*] app",hint: "",label: `Fullstack: Nuxt`,},
		// { id: "b", prompts: [], intro: "Creating [*] app", hint: "", label: "Fullstack: SvelteKit" },
		// { id: "c", prompts: [], intro: "Creating [*] app", hint: "", label: "Fullstack: SolidStart" },
		// { id: "d", prompts: [], intro: "Creating [*] app", hint: "", label: "Fullstack: Qwik" },
		React,
		// { id: "d", prompts: [], intro: "Creating [*] app", hint: "", label: "Frontend:  Solid" },
		// { id: "d", prompts: [], intro: "Creating [*] app", hint: "", label: "Frontend:  Vue" },
		Express,
		// { id: "d", prompts: [], intro: "Creating [*] app", hint: "", label: "Backend:   Fastify" },
		// { id: "d", prompts: [], intro: "Creating [*] app", hint: "", label: "Backend:   Hapi" },
		// { id: "d", prompts: [], intro: "Creating [*] app", hint: "", label: "Backend:   Koa" },
	],
	mobile: [ReactNative],
	desktop: [Electron],
	cli: [Electron],
};

export default Frameworks;
