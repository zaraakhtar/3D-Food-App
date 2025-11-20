import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import './../../global.css';


export default function HomeScreen() {
  return (
    <SafeAreaView>
          <View className='flex-1 justify-center items-center'>
            <Text>
              Hello, World!
            </Text>
          </View>
    </SafeAreaView>
  );
}



