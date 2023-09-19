import css from './Home.module.css';

export function Home() {
  return (
    <div className={css.homeCont}>
      <h2 className={css.homeInfo}>
        Welcome to your personal telephone directory.{<br />} To get started,
        you need to log in to your account or register a new one.
      </h2>
    </div>
  );
}
