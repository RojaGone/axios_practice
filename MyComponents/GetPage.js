import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';


const GetPage = (props) => {
  // class Getpage extends Component {

  //     constructor(props){
  //         super(props);
  //         this.state= {data: props.data}
  //         this.nav = props.nav
  //     }

  // render(){

    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const [userId, setUserId] = React.useState('');
    const [Id, setId] = React.useState('');

    const handleData = (item) => {
    
      const cnvStringUserId = item.userId
      const strUserId = cnvStringUserId.toString();
      const cnvStringID = item.id
      const strID = cnvStringID.toString()
      props.nav.navigation.navigate('UpdatePage', {
        IdRev: strID,
        userIdRev: strUserId,
        titleRev: item.title,
        bodyRev: item.body,
        isEdit: 'true',
      })
    }

  return (
    <View>
      <ScrollView>
        
          {props.data.map((item, index) => (
            <TouchableOpacity key={item.id}
            onPress={() =>
              handleData(item)
            }>
            <View  style={styles.item}>
              <Text style={styles.bg}>
                <Text style={styles.txBold}>Title is :</Text>
                {item.title}
              </Text>
              <Text style={styles.bg}>
                <Text style={styles.txBold}>Body is :</Text>
                {item.body}
              </Text>
            </View>
            </TouchableOpacity>
          ))}
       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    color: 'black',
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 30,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
  txBold: {
    fontWeight: 'bold',
  },
});

export default GetPage;
