

const UserGreeting = () => {
    return (
        <div style={styles.div}>
            <h1 style={styles.titulo}>Hola Marlene, ¡bienvenida a tu tienda!</h1>
        </div>
    )
}

const styles = {
    div: {
        padding: '10rem',
        backgroundColor: '#e0f7fa',
    },
    titulo: {
        color: '#333',
        textAlign: 'center',
    }
};

export default UserGreeting;