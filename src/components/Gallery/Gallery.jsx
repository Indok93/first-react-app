import image1 from "../../assets/images/pexels-artem-saranin-1547813.jpg"
import image2 from "../../assets/images/pexels-gianluca-grisenti-4215102.jpg"
import image3 from "../../assets/images/pexels-iam-hogir-7919366.jpg"
import image4 from "../../assets/images/pexels-ilya-lisauskas-8584607.jpg"
import image5 from "../../assets/images/pexels-julia-volk-7292745.jpg"
import image6 from "../../assets/images/pexels-kasia-palitava-10163188.jpg"
import image7 from "../../assets/images/pexels-lukas-rodriguez-5618463(1).jpg"
import image8 from "../../assets/images/pexels-mathias-reding-4394104.jpg"
import image9 from "../../assets/images/pexels-michael-block-3225517.jpg"
import image10 from "../../assets/images/pexels-ruvim-10042038.jpg"
import styles from "./Gallery.module.scss"

export const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
            <img src={image3} alt="image3" />
            <img src={image4} alt="image4" />
            <img src={image5} alt="image5" />
            <img src={image6} alt="image6" />
            <img src={image7} alt="image7" />
            <img src={image8} alt="image8" />
            <img src={image9} alt="image9" />
            <img src={image10} alt="image10" />
        </div>
    )
}