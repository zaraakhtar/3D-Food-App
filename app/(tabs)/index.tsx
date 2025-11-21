import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import './../../global.css';


export default function HomeScreen() {
  return (

          <View className='flex-1 justify-center items-center bg-orange-500'>
            <Text className='text-white text-3xl font-bold'>
              Hello, World!
            </Text>
          </View>
  );
}



