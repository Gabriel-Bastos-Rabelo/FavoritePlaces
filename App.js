import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlace from './screens/AllPlace';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='auto'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: Colors.gray700,
        contentStyle: {backgroundColor: Colors.gray700}
      }}>
        <Stack.Screen name = "AllPlaces" component={AllPlace} options={({navigation}) => 
        ({
          title: "Your favorite places",
          headerRight: ({tintColor}) => <IconButton icon = "add" size = {24} color ={tintColor} onPress={() => navigation.navigate("AddPlace")}/>
        })}/>
        <Stack.Screen name = "AddPlace" component={AddPlace} options={{title: "Add a new place"}}/>
      </Stack.Navigator>

    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
