import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Header = styled.h2`
text-align:center;
padding : 20px;
margin-top: 10px
`

const Products = () => {
    return (
        <>
            <Header>Our Products</Header>
            <Container>
                {popularProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </Container>
        </>
    );
};

export default Products;