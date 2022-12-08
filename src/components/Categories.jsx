import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
const Header = styled.h2`
text-align:center;
padding : 20px;
`

const Categories = () => {
    return (
        <>
            <Header>Categories</Header>
            <Container>
                {categories.map((item) => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </Container>
        </>
    );
};

export default Categories;