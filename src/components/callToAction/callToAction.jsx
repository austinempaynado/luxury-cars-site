import "./callToAction.css"

export const CallToAction = (props) =>{
    const{text, type, destination} = props;
    return(
        <div>
            <button className={type}>{text}</button>
        </div>
    )
}