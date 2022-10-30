import "./DealsCard.css"

const DealsCard = ({deal}) => {
    return (
        <div className="DealsCard card d-flex align-items-center" style={{height: "max-content"}}>
            <div className="row g-0" style={{width: "100%"}}>
                <div className="col-3">
                    <a href={`/${deal.game_slug}`}>
                        <img src={deal.img_lg ? deal.img_lg : deal.img_sm} className="img-fluid rounded-start" style={{height: "100%"}} alt="..." />
                    </a>
                </div>
                <div className="col-4">
                    <div className="card-body">
                        <p className="card-title fs-6">{deal.game_name}</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card-body">
                        <p className="DealsCard-discount">{deal.discount}</p>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card-body">
                        <p className="DealsCard-basePrice">{deal.base_price}</p>
                        <p className="DealsCard-discountPrice">{deal.discount_price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealsCard;