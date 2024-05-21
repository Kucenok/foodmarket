import '../styles/skills.css'
export default function Skills(){
    const list = [
        "Learn new flavors",
        "Experiment with food",
        "Write your own menu",
        "Know nutrition facts",
        "Get eating tips",
        "Get ranked"
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Try out new flavors</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
            </div>
        </div>
    )
}