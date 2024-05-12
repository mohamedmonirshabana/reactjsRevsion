import Post from './components/Post';
function add(a, b) {
  return a + b;
}
function App() {
  add(1, 2);
  add(5, 7);
  return (
    <main>
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
}

export default App;
