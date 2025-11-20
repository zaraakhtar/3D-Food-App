import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView>
          <View className='justify-center items-center text-xl font-bold h-full'>
            <Text>
              Hello, World!
            </Text>
          </View>
    </SafeAreaView>
  );
}



