import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Mi Tienda</h1>
      <ul style={styles.links}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      {<CartWidget cantidad={3} />}
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f2f2f2',
  },
  logo: {
    fontSize: '1.5rem',
    margin: 0,
  },
  links: {
    display: 'flex',
    listStyle: 'none',
    gap: '1rem',
    margin: 0,
  },
};

export default NavBar;
