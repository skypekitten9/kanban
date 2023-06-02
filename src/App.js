import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{
      display:'grid', 
      gridTemplateAreas: "to-do in-progress test done",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gridTemplateRows: "100vh"
      }}>
      <div style={{gridArea: 'to-do'}}></div>
      <div style={{gridArea: 'in-progress'}}></div>
      <div style={{gridArea: 'test'}}></div>
      <div style={{gridArea: 'done'}}></div>
    </div>
  );
}

export default App;
