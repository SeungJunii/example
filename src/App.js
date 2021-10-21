import './App.css';
import styled from '@emotion/styled';
import EventPracticeFunction from './EventPracticeFunction';

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
        <EventPracticeFunction />
      </Subframe>
    </Mainframe>
  );
};

export default App;
