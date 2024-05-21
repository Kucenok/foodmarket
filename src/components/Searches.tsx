import React, { useState } from 'react';
import '../styles/searches.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


interface SearchesProps {
    onSearch: (search: string) => void;
}

const Searches: React.FC<SearchesProps> = ({ onSearch }) => {
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'];
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (search: string) => {
        onSearch(search);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleButtonClick = () => {
        onSearch(searchTerm);
    };

    const handleAllButtonClick = () => {
        onSearch('all');
    };

    return (
        <div className="previous-searches section">
            <h2>Search your dish</h2>
            <div className="previous-searches-container">
                {searches.map((search, index) => (
                    <button key={index} style={{ animationDelay: `${index * 0.1}s` }} className="search-item" onClick={() => handleSearch(search)}>
                        {search}
                    </button>
                ))}
                <button className="search-item" onClick={handleAllButtonClick}>
                    All
                </button>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search ..." value={searchTerm} onChange={handleInputChange} />
                <button className="btn" onClick={handleButtonClick}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
};

export default Searches;
