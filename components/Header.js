import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
    </View>
}

const styles = StyleSheet.create({
    header: { padding: 15, backgroundColor: 'blue', alignItems: 'center' },
    headerText: { fontSize: 20, fontWeight: 'bold', color: '#fff' }
})

export default Header;