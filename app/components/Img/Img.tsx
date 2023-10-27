
interface Props {
    default?: boolean;
    rotate?: number;
    src?: '1' | '2' | '3' | '4' | '5' | '6';
    alt: string;
}

const Img = ({
    default: isDefault = false,
    rotate = 0,
    src,
    alt,
    ...props
}: Props) => {
    return (  
        <>
        <img src={`/images/${src}.png`} alt={alt} style={{
            transform: isDefault ? "rotate(0deg)" : `rotate(${rotate}deg)`,
            width: "300px",
            height: "200px",
            objectFit: "cover",
            marginLeft: "-30px"
        }} {...props} >
        </img>
        </>
    );
}
 
export default Img;