import Post from './components/Post';
function App() {
  return (
    <div style={{ color: 'red', textAlign: 'left' }}>
      <Post author="Maximilian" body="Reactjs is awesome!" />
      <Post author="Manual" body="Next JS 's Development" />
    </div>
  );
}

export default App;
