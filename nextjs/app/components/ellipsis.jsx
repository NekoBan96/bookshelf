


export default function Ellipsis (props) {

    let newText = ""
    for(let word of props.text.split(' ')) {
        if ((newText + " " + word).length < props.length)
            newText += " " + word
        else{
            newText += "..."
            break
        }
    }

    return (
        <span className=" break-words">
            {newText}
        </span>
    )
}