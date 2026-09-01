import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
gsap.registerPlugin(Draggable, ScrollTrigger, InertiaPlugin);

import { useState, useMemo, useEffect } from "react";

import TechStack from "./TechStack";
import layoutTechStack, { type TechLayout } from "../lib/layoutTechStack";

const techStack = [
    { name: "HTML5", proficiency: 70, type: "FrontEnd" },
    { name: "CSS3", proficiency: 70, type: "FrontEnd" },
    { name: "Javascript", proficiency: 60, type: "FrontEnd" },
    { name: "Typescript", proficiency: 60, type: "FrontEnd" },
    { name: "React", proficiency: 70, type: "FrontEnd" },
    { name: "Next.Js", proficiency: 70, type: "FrontEnd" },
    { name: "Astro.Js", proficiency: 40, type: "FrontEnd" },
    { name: "Tailwind CSS", proficiency: 70, type: "FrontEnd" },
    { name: "Node.js", proficiency: 30, type: "BackEnd" },
    { name: "Express.js", proficiency: 30, type: "BackEnd" },
    { name: "Python", proficiency: 30, type: "BackEnd" },
    { name: "Java", proficiency: 30, type: "BackEnd" },
    { name: "MongoDB", proficiency: 30, type: "Infrastructure" },
    { name: "SQL", proficiency: 30, type: "Infrastructure" },
    { name: "Firebase", proficiency: 20, type: "Infrastructure" },
    { name: "Vercel", proficiency: 40, type: "Infrastructure" },
    { name: "Netlify", proficiency: 40, type: "Infrastructure" },
    { name: "Coolify", proficiency: 50, type: "Infrastructure" },
    { name: "GSAP", proficiency: 20, type: "Others" },
    { name: "ZuStand", proficiency: 30, type: "Others" },
    { name: "Next-Intl", proficiency: 10, type: "Others" },
    { name: "Next-Auth", proficiency: 10, type: "Others" },
    { name: "Swiper.Js", proficiency: 30, type: "Others" },
];

export default function TechBoard() {
    const [state, setState] = useState("all");

    const layout = useMemo(() => {
        const filtered = state === "all"
            ? techStack
            : techStack.filter((t) => t.type === state);
        return layoutTechStack(filtered);
    }, [state]);

    useEffect(() => {
        gsap.from(".tech-stack", {
            opacity: 0,
            scale: 0,
            stagger: {
                each: 0.05,
                from: "random"
            }
        })
        const cards = document.querySelectorAll(".tech-stack");

        cards.forEach((c) => {
            Draggable.create(c, {
                bounds: "#Container",
                inertia: true,
                onDrag: () => {
                    gsap.to(c, {
                        boxShadow: "0px 0px 16px 4px rgba(0, 0, 0, 0.5)",
                    });
                },
                onRelease: () => {
                    gsap.to(c, {
                        duration: 1,
                        x: 0,
                        y: 0,
                        boxShadow: "none",
                        ease: "elastic.out(.30)",
                    });
                },
            })
        })
    }, [layout])

    return <div className="flex flex-col w-full h-full px-4 pb-4 pt-[9dvh] gap-2 ">
        <div
            id="Container"
            className="relative h-full w-full border-2 border-dashed rounded-xl"
        >
            <div
                className="absolute h-full w-full grid grid-cols-20 grid-rows-10 grid-flow-dense gap-2 p-2 -z-10  "
            >
                {
                    Array.from({ length: 200 }, (v, i) => i).map((e) => (
                        <div key={e} className="w-full h-full bg-secondary/20 col-span-1 row-span-1 rounded-lg border-4 border-secondary/30" />
                    ))
                }
            </div>
            <div
                className="bg-transparent h-full w-full grid grid-cols-20 grid-rows-10 grid-flow-dense gap-2 p-2"
            >
                {
                    layout.map((t: TechLayout) => (
                        <TechStack key={t.name} name={t.name} type={t.type} colStart={t.colStart} colSpan={t.colSpan} rowStart={t.rowStart} rowSpan={t.rowSpan} />
                    ))
                }
            </div>
        </div>
        <div className="shrink-0 flex justify-center gap-2">
            <button type="button" onClick={() => setState("all")} className="font-headings button-secondary">
                Todos</button>
            <button type="button" onClick={() => setState("FrontEnd")} className="font-headings button-secondary">
                FrontEnd</button>
            <button type="button" onClick={() => setState("BackEnd")} className="font-headings button-secondary">
                BackEnd</button>
            <button type="button" onClick={() => setState("Infrastructure")} className="font-headings button-secondary">
                Infraestructura</button>
            <button type="button" onClick={() => setState("Others")} className="font-headings button-secondary"
            >Librerias y Plugins</button>
        </div>
    </div>
}