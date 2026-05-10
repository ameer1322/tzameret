import Header from "../../components/header/Header"
import ImageCarousel from "../../components/image_carousel/ImageCarousel"
import Maps from "../../components/maps/maps"
import "./Suite1_2.css"
const imageModules = import.meta.glob("../../assets/images/suite_1+2_images/*.jpg", { eager: true })
const images = Object.values(imageModules).map((module: any) => module.default)


function Suite1_2() {
    return (
        <>
            <Header />
            <h1>Suite 1+2</h1>
            <div className="suite-content">
                <ImageCarousel images={images} />
                <Maps />
            </div>
        </>
    )
}

export default Suite1_2