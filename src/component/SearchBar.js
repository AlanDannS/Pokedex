import React, {useState} from 'react';

const SearchBar = (props) => {
    const {onSearch} = props;

    const [search, setSearch] = useState('');


    const onChange = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0){
            onSearch(null);
        }
    };


    const onClick = async (e) =>{
        onSearch(search);
    };
    return (
        <div className="search">
            <div className="bar">
                <input placeholder='Buscar Pokemon' onChange={onChange}></input>
            </div>
            <div className="buscar">
                <button onClick={onClick}><i className="fas fa-search"></i></button>
            </div>
        </div>
    )
}

export default SearchBar;