import React from "react";
import Card from "../Card";

// you can pass a title to be displayed in the header or
// you can pass a component that will be displayed in the header.
// for example, you can pass a DropDownList component

export default function CardWithHeader(props:{title: string | React.ReactNode, children: React.ReactNode}){
    const heading = typeof props.title === 'string' ? <h3>{props.title}</h3> : props.title;
        
    return (
        <section>
            <header>
                { heading }
            </header>
            <main>
            <Card>
                {props.children}
            </Card>
            </main>
        </section>
    )
}