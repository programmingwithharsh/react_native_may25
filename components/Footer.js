import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = ({ navigation }) => {
    return <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.link}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.link}>Contact</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: 'yellow',
        borderTopWidth: 1,
        borderColor: '#ccc',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    link: { fontSize: 16, color: 'blue' }
})

export default Footer;