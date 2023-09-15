export default function Accordion(props){
    return (
        <div className={`accordion ${props.className}`} id={props.id}>
            {props.children}
        </div>
    )
}