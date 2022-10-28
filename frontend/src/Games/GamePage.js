import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../API/api";
import PriceCard from "../Prices/PriceCard";
import SimilarGames from "./SimilarGames";

const GamePage = () => {
    const {game_slug} = useParams()
    const [prices, setPrices] = useState([])
    const [games, setGames] = useState([])

    useEffect(() => {
        const fetchPrices = async () => {
            let prices = await Api.getAllPrices(game_slug)
            setPrices(prices)
        }
        const fetchGames = async () => {
            let games = await Api.getSimilarGames(game_slug)
            setGames(games)
        }
        fetchPrices();
        fetchGames(); 
    }, [game_slug])

    return (
        <div className="bg-dark" style={{minHeight: "100vh"}}>
            <div className="container">
                {
                    prices.length ?  
                (<>
                    <div className="GamePage-header">
                        <h2 className="text-white">{prices[0].game_name}</h2>
                        <img src={prices[0].img_lg ? prices[0].img_lg : prices[0].img_sm} style={{height: "100%", borderRadius: "10px"}} alt={prices[0].game_name} className="mb-2"/>
                    </div>
                    <div className="mb-2 bg-dark">
                        <div>
                            {
                                prices.map(price => (
                                    <PriceCard key={price.game_name} price={price} />
                                ))
                            }      
                        </div>
                    </div>
                </>) : (<h3>...Loading</h3>)
                }
                {
                games.length ? (
                    <div>
                        <SimilarGames games={games} />
                    </div>
                ) : (<h3>...Loading</h3>)
                }    
            </div>
        </div>
    )
}

export default GamePage;