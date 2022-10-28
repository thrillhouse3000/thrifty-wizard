import DealsCard from "./DealsCard";
import "./DealsList.css"

const DealsList = ({dealsN}) => {
    return (
        <div>
            <div className="DealsList-header">
                <a href={dealsN[0].store_url}>
                    <img src={dealsN[0].store_logo} style={{width: "auto", height: "3rem", position: "sticky"}} alt={dealsN[0].store_name}/>
                </a>
            </div>
            <div className="mb-3" style={{maxHeight: "32rem", overflow: "auto", borderRadius: "10px"}}>
            
                <div>
                {
                    dealsN.map(deal => (
                        <DealsCard key={deal.game_name} deal={deal} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default DealsList;