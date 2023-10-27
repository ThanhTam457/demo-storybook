import Img from '../Img/Img';

interface ListImages {
    default?: boolean;
    rotate?: number;
    src?: '1' | '2' | '3' | '4' | '5' | '6';
    alt: string;
}


const listImages: ListImages[] = [
    {src: "1", alt: "1"},
    {src: "2", alt: "2"},
    {src: "3", alt: "3"},
    {src: "4", alt: "4"},
    {src: "5", alt: "5"},
    {src: "6", alt: "6"},
];

var rotate1 = 0;
var rotate2 = 0;
var rotate3 = 0;
var rotate4 = 0;
var rotate5 = 0;
var rotate6 = 0;

interface Rotatenum {
    name: string;
    value: number;
}

const rotate : Rotatenum[] = [
    {name: "rotate1", value: rotate1},
    {name: "rotate2", value: rotate2},
    {name: "rotate3", value: rotate3},
    {name: "rotate4", value: rotate4},
    {name: "rotate5", value: rotate5},
    {name: "rotate6", value: rotate6},
];


const Gallery = ({
    rotate = [0, 0, 0, 0, 0, 0]
} ) => {
    return (  
        <div className='gallery__content' style={{display: "flex", flexDirection: "row", width: "100vw", border: "1px solid black", margin: "0 50px", overflow: "hidden"}}>
            {listImages.map((item, index) => (
                <Img src={item.src} alt={item.alt} rotate={rotate[index]}/>
                
            ))}
            
        </div>
    );
}
 
export default Gallery;