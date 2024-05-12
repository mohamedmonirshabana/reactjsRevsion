import Post from './components/Post';
function App() {
  return (
    <div className="post">
      <Post author="Maximilian" body="Reactjs is awesome!" />
      <Post author="Manual" body="Next JS 's Development" />
    </div>
  );
}

export default App;
