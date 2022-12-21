import styled from "styled-components";
import Navigation from "../components/Navigation";
import Anouncement from "../components/Anouncement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState({});

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value,
        })
    }
    const handleSort = (e) => {
        setSort(
            e.target.value,
            
        )
        console.log(e.target.value);
    }

    return (
        <Container>
            <Anouncement />
            <Navigation />
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters} >
                        <Option disabled >
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled >
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select name="sort" onChange={handleSort}>
                        <Option value="new" >Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="des">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={category} filters={filters} sort={sort} />
            <Footer />
        </Container>
    );
};

export default ProductList;