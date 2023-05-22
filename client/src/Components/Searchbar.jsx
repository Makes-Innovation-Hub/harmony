import { Description, Container, SearchBar, Input, SearchIcon, SearchWrapper} from "./SearchStyles";
import Vector from '../assets/vector.png';
import '../components/Header.css'

function Search() {
    return (
      <Container>
      <Description>translate Songs between Hebrew and Arabic </Description>

      <SearchWrapper>
        <SearchBar>
          <Input type="text" placeholder="Search..." />
          <SearchIcon src={Vector} alt="Search" />
        </SearchBar>
      </SearchWrapper>

    </Container>
    );
  }
  
  export default Search;