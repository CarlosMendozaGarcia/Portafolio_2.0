import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useEffect, useMemo, useState } from "react";
import { techData as techStack } from "../data/tech.data";
import type { TechInput } from "../lib/layoutTechStack";


export default function TechWall() {
    const [state, setState] = useState("all");
    let tl: GSAPTimeline | null = null;
    const { filtered: layout, total } = useMemo(() => {
        const filtered = state === "all"
            ? techStack
            : techStack.filter((t) => t.type === state);
        const total = filtered.reduce((sum: number, t: TechInput) => sum + t.proficiency, 0)
        return { filtered, total }
    }, [state]);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (tl) tl.kill()

        tl = gsap.timeline({
            ease: "power1.inOut",
        })

        tl.from(".bricks", {
            scrollTrigger: {
                trigger: "#Technologie",
                toggleActions: "play pause resume reset"
            },
            opacity: 0,
            yPercent: -200,
            stagger: {
                from: "end",
                each: 0.02,
            }
        })

    }, [layout])

    return <div id="board_mobile" className="flex flex-col  w-full h-full ">
        <div className="flex  shrink-0 justify-center gap-2 z-10">
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
        <div className="w-full h-full grid ">
            {layout.map((t) => (
                <div key={t.name}className="relative grid grid-flow-col ">
                    {Array.from({ length: Math.floor(t.proficiency * 100 / total) }, (v, i) => i).map((i) => (
                        <div key={`${t.name}_${i}`} className="bricks  bg-secondary/30 border-2 border-primary/60" />
                    ))}
                    <p className="absolute bricks place-self-center bg-primary px-1  rounded-sm text-body-sm font-body text-background">{t.name}</p>
                </div>
            ))}
        </div>
    </div>
}