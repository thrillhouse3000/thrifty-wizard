import DealsList from "./DealsList";

const DealsContainer = ({deals}) => {
    return (
        <div className="container h-100">
            <div className="row">
                <div className="col-md">
                    <DealsList dealsN={deals[0]} />
                </div>
                <div className="col-md">
                    <DealsList dealsN={deals[1]} />
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <DealsList dealsN={deals[2]} />
                </div>
                <div className="col-md">
                    <DealsList dealsN={deals[3]} />
                </div>
            </div>
        </div>
    )
}

export default DealsContainer;