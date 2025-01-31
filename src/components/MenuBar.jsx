export default function MenuBar({ menuTitles, onMenuChange }) {
  return (
    <menu id="menu-bar">
      {menuTitles.map((item) => (
        <li key={item.type}>
          <button onClick={() => onMenuChange(item.type)}>
            <img src={item.titleImage} alt={item.type} />
            <br />
            {item.type}
          </button>
        </li>
      ))}
    </menu>
  );
}
