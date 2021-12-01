import "./callToAction.css"

export const CallToAction = (props) =>{
    const{text, type} = props;
    return(
        <div>
            <button className={type}>{text}</button>
        </div>
    )
}