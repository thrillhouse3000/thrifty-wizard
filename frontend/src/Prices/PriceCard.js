import "./PriceCard.css"

const PriceCard = ({price}) => {
    return (
        <div className="PriceCard card" style={{height: "fit-content"}}>
            <div className="row g-0 d-flex align-items-center justify-content-around">
                <div className="col-md-4">
                    <img src={price.store_logo} className="img-fluid rounded-start" style={{height: "3rem", width:"auto"}} alt="..." />
                </div>
                {
                    price.discount === '0' ? (
                    <>
                        <div className="col-md-4">
                            <div className="card-body">
                                <p className="PriceCard-basePriceOnly">{price.base_price}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <a href={price.link} className="btn PriceCard-storeBtn text-white">View In Store</a>
                            </div>
                        </div>
                    </> 
                    ) : (
                    <>
                        <div className="col-md-2 d-flex">
                            <div className="card-body">
                                <p className="PriceCard-discount">{price.discount}</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <p className="PriceCard-basePrice">{price.base_price}</p>
                                <p className="PriceCard-discountPrice">{price.discount_price}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <a href={price.link} className="btn PriceCard-storeBtn text-white">View In Store</a>
                            </div>
                        </div> 
                    </>
                    )
                }
            </div>
        </div>
    )
}

export default PriceCard;