import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };

    // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    // this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange = (e) =>{
    this.setState({
      filterText: e.target.value,
    });
  }
  
  handleInStockChange = (e) => {
    this.setState({
      inStockOnly: e.target.checked,
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          handleFilterTextChange={this.handleFilterTextChange}
          handleInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  };
};


export default FilterableProductTable;