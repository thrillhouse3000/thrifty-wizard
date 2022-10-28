import { useState, useEffect } from "react";
import Api from "./API/api";
import DealsContainer from "./Prices/DealsContainer";
import "./Home.css"

const Home = () => {
    const [deals, setDeals] = useState([]);
    const [sortBy, setSortBy] = useState('recent-deals');

    useEffect(() => {
        const fetchDeals = async () => {
            setDeals([])
            if (sortBy === 'recent-deals') {
                let deals = await Api.getRecentDeals();
                setDeals(deals)
            } else if (sortBy === 'largest-discounts') {
                let deals = await Api.getLargestDiscounts();
                setDeals(deals)
            } else if (sortBy === "lowest-prices") {
                let deals = await Api.getLowestPrices();
                setDeals(deals)
            }
        }
        fetchDeals(); 
    }, [sortBy])

    return (
        <div className="bg-dark" style={{minHeight: "100vh"}}>
            <div className="row d-flex align-items-center justify-content-center me-0 mb-2">
                <div className="col-auto">
                    <label htmlFor="sortBy" className="d-inline text-white">SORT BY:</label>
                </div>
                <div className="col-auto">
                    <select
                        className="form-select text-center"
                        type="text"
                        id="sortBy" 
                        name="sortBy" 
                        value={sortBy} 
                        onChange={evt => setSortBy(evt.target.value)}>
                            <option value={'recent-deals'}>Recent Deals</option>
                            <option value={'largest-discounts'}>Largest Discount</option>
                            <option value={'lowest-prices'}>Lowest Price</option>
                    </select>
                </div>
            </div>           
            {
                deals.length ? (
                    <DealsContainer deals={deals} />
                ) : (
                    <>
                        <div className="lds-dual-ring"></div>
                        <h3 className="text-white mt-3">...Loading</h3>
                    </>
                )
            }
        </div>
    )
}

export default Home;