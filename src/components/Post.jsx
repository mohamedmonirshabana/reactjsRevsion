const names = ['Maximilian', 'Manuel'];
function Post() {
  const choseName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>{choseName}</p>
      <p>React.js is awsome</p>
    </div>
  );
}

export default Post;
