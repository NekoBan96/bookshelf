import {default as LinkNext} from "next/link"

export default function Link(props) {

    return (
        <LinkNext 
        href={props.href || "#"}
        style={props.style}
        className={"text-th-accent-medium font-bold decoration-2 underline-offset-4 underline "
          + (props.className || "") }>
            {props.children}
        </LinkNext>
    )
}