import React from 'react'
import styled from 'styled-components'

const RecipeList = ({ recipes, onClick }) => {
    if (recipes && Array.isArray(recipes)) {
        return recipes.map((recipe,index) => <StyledRecipeListItem className={`recipeItem-${index}`} key={recipe.replace(" ","")} onClick={() => onClick(index)}>{recipe}</StyledRecipeListItem>);
    }
}

const List = styled.ul`
  width: 400px;
  height: 95vh;
  padding: 20px;
  margin-top: 0;
  background: ${props => props.theme.primaryLight};
  color: ${props => props.theme.textColor};
  flex-grow: 1;
  overflow-y: scroll;
`;
const StyledRecipeListItem = styled.li`
  font-size: 20px;
  list-style: none;
  padding: 5px;
  border-bottom: 1px solid ${props => props.theme.textColor};
  max-height: 100vh;
`;

const RecipeNavigator = (props) => {
    return (
        <List>
            <RecipeList recipes={props.recipes} onClick={props.onClick}/>
        </List>
    )
}





export default RecipeNavigator;

