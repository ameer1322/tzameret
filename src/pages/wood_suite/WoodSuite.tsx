import "./WoodSuite.css"
import Header from "../../components/header/Header"
import ImageCarousel from "../../components/image_carousel/ImageCarousel"
import Maps from "../../components/maps/maps"

const imageModules = import.meta.glob("../../assets/images/wood_suite_images/*.jpg", { eager: true })
const images = Object.values(imageModules).map((module: any) => module.default)

function WoodSuite() {
    return (
        <>
            <Header />
            <h1>Wood Suite</h1>
            <div className="suite-content">
                <ImageCarousel images={images} />
                <Maps />
            </div>

        </>
    )
}

export default WoodSuite