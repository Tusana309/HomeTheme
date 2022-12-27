import { Switch } from '@rneui/base';
import { StyleSheet } from 'react-native';
import { Button, Text, View } from 'react-native';
import  useTheme  from './theme/useTheme';
import useThemedStyles from './theme/useThemedStyles';
const Home = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  return (
    <View style = {style.body}>
      <Text style = {style.title}>Wellcome</Text>
      <Text style = {style.text}>The aim of React Native Elements is to provide an all-in-one UI kit for creating apps in react native. There are many great ui components made by developers all around open source. React Native Elements takes the hassle of assembling these packages together by giving you a ready made kit with consistent api and look and feel.</Text>
      <Button onPress={() =>{}} title='Accept'  color={theme.colors.SUCCESS}></Button>
      <Button onPress={() =>{}} title='Decline'  color={theme.colors.ERROR}></Button>
      <Switch onValueChange={theme.toggleTheme}/>
    </View>
  );
};
const styles = theme => StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 30,
    color: '#f1c40f',
    letterSpacing: 5,
   fontWeight: 'bold',
  },
  text: {
    color: theme.colors.TEXT,
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'justify',
  }
})
export default Home;
