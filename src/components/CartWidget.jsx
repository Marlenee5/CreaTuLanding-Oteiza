const CartWidget = ({cantidad}) => {
    return (
        <div style={styles.container}>
            <span style={styles.icon}>🛒</span>
            <span style={styles.count}>{cantidad}</span>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alighItems: 'center',
        gap: '0.5rem',
        fontSize: '1.2rem',
        backgroundColor: '#fff',
        padding: '0.3rem 0.6rem',
        borderRadius: '8px',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    },
    icon: {
        fontSize: '1.5rem',
    },
    count: {
        fontWeight: 'bold',
        color: '#333',
    },
};

export default CartWidget;