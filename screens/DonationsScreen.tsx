import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const DonationsScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>This is Donations</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default DonationsScreen;