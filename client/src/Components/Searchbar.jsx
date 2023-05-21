import { Description, Container, SearchBar, Input, SearchIcon, SearchWrapper} from "./SearchStyles";
import Ellipse2 from '../assets/Ellipse2.png';
import Vector from '../assets/Vector.png';
import '../components/Header.css'

function Search({ topweight, bottomweight }) {
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