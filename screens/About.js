import { View, Text, StyleSheet } from 'react-native';

const About = () => {
    return <View style={styles.container}>
        <Text style={styles.title}>About Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24 }
})

export default About;