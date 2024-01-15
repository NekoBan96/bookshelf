'use client'

export default function Button (props) {

    const style = {
        width: props.size ? props.size +"rem" : null,
        height: props.circle ? props.size+"rem" : null,
        borderRadius: props.circle ? "50%" : "0.5rem",
    }
    const className = () => {
        switch (props.variant) {
            case "outline": return " text-th-accent-medium  border-th-accent-medium border-4 "
            case "contain": return " text-white bg-th-accent-dark  transition-all duration-200 hover:bg-th-accent-medium"
            case "hover-outline":
            default: return "text-th-accent-medium border-transparent border-4 hover:border-th-accent-medium hover:transition-border duration-200"
        }
    }


    function handleClick (e) {
        if (props.onClick)
            props.onClick(e)

    }

    return (
        <button onClick={handleClick} className={"p-2 font-semibold " + className() + " " + (props.className || "")} style={style}>
            {props.children}
        </button>
    )
}