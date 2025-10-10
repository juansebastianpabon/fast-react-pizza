import { Link } from "react-router-dom";
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "text-sm inline-block cursor-pointer rounded-full bg-yellow-400   font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-yellow-200 disabled:text-yellow-100 ";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "  text-sm inline-block cursor-pointer rounded-full border-2 border-stone-300  font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:ring focus:ring-stone-200 hover:text-stone-800 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-yellow-200 disabled:text-yellow-100 px-4 py-2.5 md:px-6 md:py-3.5",
    round: base + " px-2 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
