"use client";

import { useState } from "react";
import { poppins } from "@/Fonts/Fonts";

import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import PointerLight from "@/components/PointerLight";

export default function Home() {
    const [pointer, setPointer] = useState({ x: -100, y: 0 });
    const { x, y } = pointer;

    function pointerOut() {
        setPointer({ x: -100, y: 0 });
    }

    function updatePointer(e) {
        setPointer({ x: e.clientX, y: e.clientY });
    }

    return (
        <body
            onMouseMove={updatePointer}
            onMouseLeave={pointerOut}
            className={poppins.className + " overflow_hidden"}
        >
            <PointerLight x={x} y={y} />
            <main>
                <section>
                    <Header />
                </section>
                <aside>
                    <Projects />
                    <About />
                </aside>
            </main>
        </body>
    );
}
