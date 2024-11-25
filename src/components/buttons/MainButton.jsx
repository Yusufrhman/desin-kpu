export default function MainButton({ children, className }) {
  let classes =
    "bg-custom-yellow rounded-md text-black font-semibold px-4 py-2 hover:bg-yellow-500 ";
  classes += className;
  return <button className={classes}>{children}</button>;
}
