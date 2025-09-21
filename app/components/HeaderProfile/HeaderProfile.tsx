import Image from "next/image";

export default function HeaderProfile() {
    return(
        <div>
            <div className="banner"></div>
            <div className="banner__content flex row pl-20 pb-8">
                <Image
                    width={180}
                    height={180}
                    alt="image-profile"
                    src="/images/img-profile.png"
                    className="banner__content_profile"
                />
                <div className="banner__content_text pl-10">
                    <h1 className="banner__text_name">Diego Garcia Coronado</h1>
                    <p className="banner__text_description">Con ganas de trabajar</p>
                </div>
                
            </div>
            <div className="banner__info pl-20">
                <p>Trabaja en Aloga Software Solution</p>
                <p>Estudió en TecNM Campus Costa Chica</p>
                <p>Vive en CDMX</p>
                <p>De Guerrero</p>
            </div>

        </div>
    );
}