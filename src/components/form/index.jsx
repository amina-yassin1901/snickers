import styles from "./styles.module.css";

function Form() {
  const handelSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  return (
    <form onSubmit={handelSubmit} className={styles.form}>
      <div className={styles.flex}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your email"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your name"
        />
      </div>

      <textarea
        className={styles.textarea}
        type="text"
        placeholder="Enter your message"
      />
      <button className={styles.btn} type="submit">
        Send
      </button>
    </form>
  );
}
export default Form;
