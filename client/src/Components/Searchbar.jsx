import { Description, Container, SearchBar, Input, SearchIcon} from "./SearchStyles";
import Ellipse2 from '../assets/Ellipse2.png';
import Vector from '../assets/Vector.png';

function Search({ topweight, bottomweight }) {
    return (
      <Container>
          <Description>Translate songs between Hebrew and Arabic</Description>
          <SearchBar>
            <Input type="text" placeholder="Search..." />
            <SearchIcon src={Vector} alt="Search icon" />
          </SearchBar>
      </Container>
    );
  }
  
  export default Search;