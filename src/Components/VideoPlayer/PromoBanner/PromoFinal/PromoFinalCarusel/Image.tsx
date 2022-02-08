type Props = {
    src:string
}

export const Image:React.FC<Props> = ({src}) => {
    let imgStyle = {
        width: 100+"%",
        height: "auto"
    }
    return(
        <img src={src} alt="carusel-img" style={imgStyle}/>
    )
}