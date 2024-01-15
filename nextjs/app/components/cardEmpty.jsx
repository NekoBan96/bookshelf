

export default function CardEmpty(props) {

    const style = {
        backgroundImage: `url(/long.jpg)`
    }

    return (
        <div className={` aspect-card rounded bg-center bg-cover ${props.className}`} style={style}>
            {props.children}
        </div>
    )
}