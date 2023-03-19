import React, { useState } from 'react'
import '../styles/SearchBar.css'

function SearchBar () {
    const [searchText, setSearchText] = useState('');

    function searchCards(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        setSearchText(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //Add search cards algoritm
    }
    return (
        <div className='search__container'>
        <p className='search__header'>Site Search</p>
        <form onSubmit={handleSubmit} className='search__form'>
            <input
                className='search__input'
                type='text'
                value={searchText}
                placeholder={'Search cards...'}
                onChange={searchCards}
            />
            <button type="submit" className='search__button'>SEARCH</button>
        </form>
        </div>

    )
}

export default SearchBar