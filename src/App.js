import './App.css';
import Counter from './Counter';
import MyComponent from './MyComponent';
import styled from '@emotion/styled';
import Say from './Say';

const Mainframe = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
`;
const Subframe = styled.div`
  display: flex;
  width: 100%;
  margin: 30px;
  justify-content: center;
  > h1,
  h2 {
    text-align: center;
  }
`;

const App = () => {
  return (
    <Mainframe>
      <Subframe>
        <Say />
      </Subframe>
      <Subframe>
        <Counter />
      </Subframe>
      <Subframe>
        <MyComponent name={'this'} favoriteNumber={7}>
          opps!
        </MyComponent>
      </Subframe>
    </Mainframe>
  );
};

export default App;
