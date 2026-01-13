import { Component } from 'react';
import './search-box.styles.css';

// functional component

const SearchBox = ({ placeholder, className, onChangeHandler }) => (
    <input type='search' placeholder={placeholder} className={`search-box ${className}`} onChange={onChangeHandler} />
);


//class component
// class SearchBox extends Component {
//     render() {
//         return (
//             <input type='search' placeholder={this.props.placeholder} className={`search-box ${this.props.className}`} onChange={this.props.onChangeHandler} />
//         );
//     }
// }

export default SearchBox;