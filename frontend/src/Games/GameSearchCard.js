import "./GameSearchCard.css"

const GameCard = ({game}) => {
    return (
        <div className="GameCard card d-flex align-items-center bg-dark" style={{height: "max-content"}}>
            <a href={`/${game.game_slug}`} className="text-white text-decoration-none">
                <div className="row g-0"  style={{width: "100%"}}>
                    <div className="col-3">
                        <img src={game.img_lg ? game.img_lg : game.img_sm} className="img-fluid rounded-start" style={{height: "100%"}}alt="..." />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <p className="card-title fs-6">{game.game_name}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default GameCard;