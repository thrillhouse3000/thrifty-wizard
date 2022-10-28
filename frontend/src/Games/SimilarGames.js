const SimilarGames = ({games}) => {
    return (
        <>
            <div>
                <h3 className="text-white">SIMILAR GAMES:</h3>
            </div>
            <div className="row d-flex justify-content-center" style={{marginLeft: "-2rem"}}>
                {
                    games.map(game => (
                        <div className="col-md-2">
                            <a href={`/${game.game_slug}`}>
                                <img src={game.img_lg ? game.img_lg : game.img_sm}  alt={game.game_name} style={{width: "13rem", height: "100%", borderRadius: "10px"}} className="mx-2" />
                            </a>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default SimilarGames;