import { useState, useRef } from "react"
import "./HomePageCarousel.css"


interface ImageCarouselProps {
    images: string[]
}

function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const touchStartX = useRef<number | null>(null)


    const move = (dir: number) => {
        setCurrentImageIndex((prev) => (prev + dir + images.length) % images.length)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) move(diff < 0 ? 1 : -1)
        touchStartX.current = null
    }

    return (
        <div className="image-carousel">
            <div className="carousel-track"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <img className="carousel-image" src={images[currentImageIndex]} alt="carousel" />
                <button className="carousel-button left" onClick={() => move(1)}>{">"}</button>
                <button className="carousel-button right" onClick={() => move(-1)}>{"<"}</button>
                <span className="carousel-counter">{currentImageIndex + 1} / {images.length}</span>
            </div>
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`carousel-dot ${index === currentImageIndex ? "active" : ""}`}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>
            <div className="carousel-gallery">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`thumbnail ${index + 1}`}
                        className={`gallery-thumbnail ${index === currentImageIndex ? "active" : ""}`}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel