export default function Loader({ show }) {
  return show ? (
    <div className="loader">
      <div className="loader-top"></div>
    </div>
  ) : null;
}
