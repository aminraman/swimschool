// components/SwimAssetsFullWidthUncroppedSection.jsx
import Image from "next/image";

export default function SwimAssetsFullWidthUncroppedSection() {
    const desktopImage = "/images/swim-assets-hero.png"; 
    const mobileImage = "/images/mobile-assets.png"; 

    return (
        <section className="py-0 w-full bg-white" id="swim-assets-full-width-uncropped">

            <div className="w-full h-full">

                {/* Desktop (landscape) */}
                <div className="relative w-full h-auto overflow-hidden hidden sm:block">
                    <Image
                        src={desktopImage}
                        alt="Swim assets full-width"
                        width={2000}
                        height={1000}
                        priority
                        className="w-full h-auto"
                    />
                </div>

                {/* Mobile (vertical image) */}
                <div className="relative w-full overflow-hidden sm:hidden">
                    <Image
                        src={mobileImage}
                        alt="Swim assets mobile vertical"
                        width={1000}
                        height={1500}
                        priority
                        className="w-full h-auto" // shows full vertical image without forcing crop
                    />
                </div>

            </div>
        </section>
    );
}
