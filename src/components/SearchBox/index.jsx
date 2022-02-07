import React, { useState } from 'react';
import { useFetchSearchData } from '../../hooks/useFetchData';
import './SearchBox.css'

const SearchBox = ({ placeholder }) => {
    
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const onChangeSearch = async (e) => {
        e.preventDefault();
        setSearch(e.target.value)
        if (e.target.value.length > 0) {
            const {drinks}=await useFetchSearchData(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value}`)
            setData(drinks)
        } else {
            setSearch("")
            setData([])
        }
    }
    return <>
        <div className="search">
            <form className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={onChangeSearch} />
                <ion-icon
                    className="searchIcon"
                    name="search"></ion-icon>
            </form>
            {search.length > 0 &&
                <div className="dataResult">
                    {data?.map((e, i) =>
                        <a href={`/search?s=${e.idDrink}`} className="dataItem" key={i}>
                            <div className="resultImg">
                                <img src={e.strDrinkThumb} alt="drink" />
                            </div>
                            <div className="resultName">
                                <p>{e.strDrink}  <span>- {e.strCategory}</span> </p>
                            </div>
                        </a>
                    )}
                </div>
            }
        </div>
    </>;
};

export default SearchBox;
