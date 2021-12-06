import "./navigation-link.css"

export const NavigationLink = (props) =>{
    const{text, type, destination} = props;
    return(
        <div>
            <a className={type}>{text}</a>
        </div>
    )
}