import { useState } from "react";
import Wrapped from "./HomeSearchBarStyle.js";
import { useSearchMutation } from "../../api/searchsliceApi.js";

const HomeSearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [searchMutation] = useSearchMutation();

    const inputHandler = (e) => {
        setSearchTerm(e.target.value);
    };

    const sendSearchRequest = () => {
        if (!searchTerm) {
            setErrorMessage("Please insert text in English, Hebrew, or Arabic");
            return;
        }

        searchMutation(searchTerm)
            .then(() => {
                setErrorMessage("");
            })
            .catch((error) => {
                console.error("Search error:", error);
            });
    };

    return (
        <Wrapped>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    onChange={(e) => inputHandler(e)}
                />
                <button className="search-button" onClick={sendSearchRequest}>
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-search"
                    >
                        <path
                            d="M17.5823 16.3361L14.3266 13.1067C15.5904 11.531 16.2024 9.53097 16.0368 7.51787C15.8712 5.50477 14.9406 3.63162 13.4364 2.28358C11.9321 0.935538 9.96853 0.215072 7.94938 0.270323C5.93024 0.325574 4.009 1.15234 2.58072 2.58063C1.15243 4.00891 0.325665 5.93015 0.270414 7.94929C0.215163 9.96844 0.935629 11.932 2.28367 13.4363C3.63171 14.9405 5.50486 15.8711 7.51796 16.0367C9.53106 16.2023 11.5311 15.5903 13.1068 14.3265L16.3362 17.5559C16.4178 17.6382 16.5148 17.7034 16.6218 17.748C16.7287 17.7926 16.8434 17.8155 16.9593 17.8155C17.0751 17.8155 17.1898 17.7926 17.2968 17.748C17.4037 17.7034 17.5007 17.6382 17.5823 17.5559C17.7405 17.3923 17.8289 17.1736 17.8289 16.946C17.8289 16.7184 17.7405 16.4998 17.5823 16.3361ZM8.18376 14.3265C6.96882 14.3265 5.78116 13.9663 4.77097 13.2913C3.76078 12.6163 2.97343 11.6569 2.5085 10.5344C2.04356 9.41197 1.92191 8.17685 2.15893 6.98525C2.39596 5.79366 2.98101 4.6991 3.8401 3.84001C4.6992 2.98092 5.79375 2.39586 6.98535 2.15884C8.17694 1.92182 9.41207 2.04347 10.5345 2.5084C11.657 2.97334 12.6164 3.76069 13.2914 4.77088C13.9663 5.78106 14.3266 6.96872 14.3266 8.18367C14.3266 9.81285 13.6794 11.3753 12.5274 12.5273C11.3754 13.6793 9.81295 14.3265 8.18376 14.3265Z"
                            fill="#333333"
                        />
                    </svg>
                </button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </Wrapped>
    );
};

export default HomeSearchBar;
