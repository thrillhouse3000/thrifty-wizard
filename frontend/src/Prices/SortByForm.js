import { useState } from "react";
import "./SortByForm.css"

const SortByForm = ({passSort}) => {
    const INITIAL_STATE = {
        sortBy: 'recent-deals'
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        passSort({...formData})
    }

    return (
        <div className="d-flex justify-content-center mb-1">
            <form onSubmit={handleSubmit}>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="sortBy" className="d-inline text-white">Sort By:</label>
                    </div>
                    <div className="col-auto">
                        <select
                            className="form-select text-center"
                            type="text"
                            id="sortBy" 
                            name="sortBy" 
                            value={formData.sortBy} 
                            onChange={handleChange}>
                                <option value={'recent-deals'}>Recent Deals</option>
                                <option value={'largest-discounts'}>Largest Discount</option>
                                <option value={'lowest-prices'}>Lowest Price</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn SortByForm-btn">Sort</button>
                    </div>
                </div>           
            </form>
        </div>
    )
}

export default SortByForm;