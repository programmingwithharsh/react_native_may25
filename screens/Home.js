import { View, Text, StyleSheet } from 'react-native';

const Homepage = (props) => {
    // console.log(props);
    return <View style={styles.container}>
        <Text style={styles.title}>Welcome to Homepage</Text>
        <Text style={styles.subTitle}>Use the Footer below to navigate through the app.</Text>
    </View>
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: '600', fontFamily: 'OpenSans', marginBottom: 10 },
    subTitle: { fontSize: 16, fontFamily: 'OpenSans', textAlign: 'center', color: '#555' }
})

export default Homepage;