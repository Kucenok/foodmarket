import '../styles/chief.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

interface ChiefPageProps {}

interface Chief {
    name: string;
    recipesCount: string;
    cuisine: string;
    img: string;
}

export default function ChiefPage(props: ChiefPageProps) {
    const chief: Chief = {
        name: 'Ragha Luis',
        recipesCount: '2',
        cuisine: 'Georgian',
        img: '/img/top-chiefs/img_3.jpg'
    };

    return (
        <div className="chief-card">
            <img src={chief.img} alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
                <p className="cheif-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
    );
}
