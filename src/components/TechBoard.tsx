import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
gsap.registerPlugin(Draggable, ScrollTrigger, InertiaPlugin);

import { useState, useMemo, useEffect } from "react";

import TechStack from "./TechStack";
import layoutTechStack, { type TechLayout } from "../lib/layoutTechStack";
import { techData as techStack } from "../data/tech.data";


export default function TechBoard() {

    const [state, setState] = useState("all")
    let techBoardTl: GSAPTimeline | null = null;
    const layout = useMemo(() => {
        const filtered = state === "all"
            ? techStack
            : techStack.filter((t) => t.type === state);
        return layoutTechStack(filtered);
    }, [state]);

    useEffect(() => {

        if (techBoardTl) techBoardTl.kill()

        techBoardTl = gsap.timeline({
            ease: "power1.inOut"
        })

        techBoardTl.from(".tech-stack", {
            opacity: 0,
            scale: 0,
            stagger: {
                each: 0.05,
                from: "random"
            },
            scrollTrigger: {
                trigger: "#Technologie"
            }
        })

        const cards = document.querySelectorAll(".tech-stack");

        cards.forEach((c) => {
            let cDrag = Draggable.create(c, {
                type: "x,y",
                bounds: `#board_desktop`,
                inertia: true,
                onDrag: () => {
                    gsap.to(c, {
                        boxShadow: "0px 0px 16px 4px var(--primary)",
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
            Draggable.zIndex = 10
        })
    }, [layout])

    return <div className="flex flex-col w-full h-full  ">
        <div
            id={`board_desktop`}
            className="relative w-full h-full border-3 border-dashed border-primary rounded-xl"
        >
            <div
                className="absolute h-full w-full grid grid-cols-20 grid-rows-10 gap-2 p-2 -z-10  "
            >
                {
                    Array.from({ length: 200 }, (v, i) => i).map((e) => (
                        <div key={e} className=" bg-secondary/20 rounded-lg border-4 border-secondary/30" />
                    ))
                }
            </div>
            <div
                className="h-full w-full grid grid-cols-20 grid-rows-10 gap-2 p-2"
            >
                {
                    layout.map((t: TechLayout) => (
                        <TechStack key={t.name} name={t.name} type={t.type} colStart={t.colStart} colSpan={t.colSpan} rowStart={t.rowStart} rowSpan={t.rowSpan} />
                    ))
                }
            </div>
        </div>
        <div className="flex  shrink-0 justify-center gap-2">

            <button type="button" onClick={() => setState("all")} className={`${state == "all" ? "button-secondary-active" : "button-secondary"} text-body-sm font-headings transition-colors duration-150`}>
                Todos</button>
            <button type="button" onClick={() => setState("FrontEnd")} className={`${state == "FrontEnd" ? "button-secondary-active" : "button-secondary"} text-body-sm font-headings transition-colors duration-150`}>
                FrontEnd</button>
            <button type="button" onClick={() => setState("BackEnd")} className={`${state == "BackEnd" ? "button-secondary-active" : "button-secondary"} text-body-sm font-headings transition-colors duration-150`}>
                BackEnd</button>
            <button type="button" onClick={() => setState("Infrastructure")} className={`${state == "Infrastructure" ? "button-secondary-active" : "button-secondary"} text-body-sm font-headings transition-colors duration-150`}>
                Infraestructura</button>
            <button type="button" onClick={() => setState("Others")} className={`${state == "Others" ? "button-secondary-active" : "button-secondary"} whitespace-normal text-body-sm font-headings transition-colors duration-150`}
            >Librerias</button>
        </div>
    </div>
}