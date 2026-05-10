import "./Suite3.css"
import Header from "../../components/header/Header"
import ImageCarousel from "../../components/image_carousel/ImageCarousel"
import Maps from "../../components/maps/maps"
const imageModules = import.meta.glob("../../assets/images/suite_3_images/*.jpg", { eager: true })
const images = Object.values(imageModules).map((module: any) => module.default)


function Suite3() {
    return (
        <>
            <Header />
            <h1>Suite 3</h1>
            <div className="suite-content">
                <ImageCarousel images={images} />
                <Maps />
            </div>

        </>
    )
}

export default Suite3