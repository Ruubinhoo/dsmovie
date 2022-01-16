import axios from "axios";
import { useState } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination"
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    // FORMA ERRADA
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(responde => {
            console.log(responde.data)
        }); 

    return (
        <>
        <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div><div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div><div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div><div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>

        </>
    );
}
export default Listing;