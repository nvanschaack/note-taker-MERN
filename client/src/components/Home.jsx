import React from "react";
import Navigation from "./Navigation";

export default function Home() {
//consists of noteform on left side, selected note in middle, and noteList on right side

    return (
        <>
        <Navigation />
            <div>
                <h1>Note Taker</h1>
            </div>
            <div>
                <a href="/Notes" role="button">Make New Note</a>
            </div>
        </>

    )
}