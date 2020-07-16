import React from 'react';

class Search extends React.Component {
    state = {
        value: 'good restaurant',
        alertVal: 'Search text:'
        }

    handleChange = e => {
        this.setState({value: e.target.value})
    }
     search = e => {
        e.preventDefault()
        alert(`${this.state.alertVal} ${this.state.value}`)
     }

    render() {
        return (
            <>
                <form className="search" onSubmit={this.search}>
                    <input type="text"
                        onChange={this.handleChange}
                        value={this.state.value}
                        className="search__input" />
                    <button className="search__button" type='submit'>Search</button>
                </form>
            </>
        );
    }
}
export default Search;