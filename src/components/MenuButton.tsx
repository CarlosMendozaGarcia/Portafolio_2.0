import gsap from "gsap";
import { useState, useEffect } from "react";

export default function MenuButton({ children }: { children: React.ReactNode }) {
    const [toogle, setToggle] = useState(false);
    let tl: GSAPTimeline | null  = null;

    useEffect(() => {
        if(tl) tl.kill();

        tl=gsap.timeline({
            duration:0.1,
            ease:"power1.inOut"
        })

        if (toogle){
            tl.to("#Menu",{
                maxHeight:200,
                maxWidth:200,
                opacity:1
            }).to(".links-menu",{
                opacity:1,
                xPercent:100
            })
        }else{
            tl.to(".links-menu",{
                opacity:0,
                xPercent:100
            }).to("#Menu",{
                maxHeight:0,
                maxWidth:0,
                opacity:0
            })
        }
    }, [toogle])

    const onClick = () => {
        setToggle(!toogle);
        
    }

    return <div className="h-full w-auto aspect-square text-background ">
        <button type="button" onClick={onClick} className="w-full h-full ">
            {children}
        </button>
        <div id="Menu" className="absolute right-0 top-full+1 border-2 max-w-0 max-h-0 opacity-0 p-4  bg-secondary/50 backdrop-blur-sm  border-primary">
            <ul className="flex flex-col justify-between gap-2 font-headings opacity-0">
                <a className="links-menu" href="#Home">Home</a>
                <a className="links-menu" href="#Experience">Experiencia</a>
                <a className="links-menu" href="#Technologie">Tech Stack</a>
                <a className="links-menu" href="#Projects">Proyectos</a>
                <a className="links-menu" href="">Mi C.V. </a>
            </ul>
        </div>
    </div>
}