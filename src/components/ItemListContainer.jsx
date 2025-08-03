const ItemListContainer = ({ mensaje }) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.texto}>{mensaje}</h2>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRaiud: '10px',
        marginTop: '2rem',
    },
    texto: {
        color: '#333',
        fontSize: '1.5rem',
    }
};

export default ItemListContainer;