function Header (props) {
  return (
    <header>
      <h1>{props.name} from props name</h1>
      <p>{props.color} from props color</p>
    </header>
  );
};

export default Header;