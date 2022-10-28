import { useState,  } from "react";

const AutosearchForm = ({passSearch}) => {
   const [formData, setFormData] = useState('');

    const handleChange = (evt) => {
        setFormData(evt.target.value)
        passSearch(formData)
    }

    return (
        // <div>
        //     <form onChange={handleChange}>
        //         <div className="row g-3 align-items-center">
        //             <div className="col-auto">
        //                 <label htmlFor="search" className="d-inline text-white">Search:</label>
        //             </div>
        //             <div className="col-auto">
        //                 <input
        //                     className="form-control text-center"
        //                     type="text"
        //                     id="search" 
        //                     name="search" 
        //                     onChange={handleChange}/>
        //             </div>
        //         </div>           
        //     </form>
        // </div>
        <div className="SearchForm">
            <div className="col-auto">
                <label htmlFor="search" className="d-inline text-white">Search:</label>
            </div>
            <div className="col-auto">
                <input 
                    value={formData} 
                    onChange={handleChange} 
                />  
            </div>
        </div>
    )
}

export default AutosearchForm;