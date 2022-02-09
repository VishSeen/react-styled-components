import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {



  /**
   * USING STYLED COMPONENTS
   * Styled components are just basic css that you can use directly to create a component.
   */


  // Simple title with an H1 component
  const Title = styled.h1`
    color: white;
    font-size: 4rem;
  `;



  // Basic button component with props
  const Button = styled.button`
    font-size: 1.2rem;
    margin: 1em;
    padding: 1rem 2rem;
    color: ${props => props.White ? "white" : 'lightblue'}; 
    border-color: ${props => props.White ? "white" : 'lightblue'};
    border: 2px solid;
    border-radius: 3px;
    background: transparent;
    cursor: pointer;
  `;

  // Extending basic button for more styling
  const YellowButton = styled(Button)`
    border-color: yellow;
    border-radius: 10px;
    color: yellow;
    font-size: 1rem;
    text-transform: uppercase;
  `;




  return (
    <div className="App">
      <header className="App-header">

        {/* Using the styled components */}
        <Title>Styled</Title>

        <Button>Basic Button</Button>

        <Button White>White button</Button>

        <YellowButton>Extended Button</YellowButton>
      </header>
    </div>
  );
}

export default App;
