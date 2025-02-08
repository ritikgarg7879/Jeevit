import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';  
import ActivityScreen from './ActivityScreen';
import UploadDNA from './UploadDNA';  
import ExerciseDetail from './ExerciseDetail';
import GeneticDashboard from './GeneticDashboard';
import MainDashboard from './MainDashboard'
import Prescription from './Prescription';
import SearchMedicine from './SearchMedicine';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="GeneticDashboard" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='GeneticDashboard' component={GeneticDashboard} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
        <Stack.Screen name="UploadDNA" component={UploadDNA} />
        <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />
        <Stack.Screen name="MainDashboard" component={MainDashboard} />
        <Stack.Screen name="Prescription" component={Prescription} />
        <Stack.Screen name="SearchMedicine" component={SearchMedicine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
