import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState('');
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
    props.handle(enteredBody);
  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
