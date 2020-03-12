import React, {Component} from 'react';
import {View} from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    name: navigation.setParam('user').name,
  });

  state = {
    stars: [],
  };

  async componentDidMount() {
    const {user} = this.props.route.params;
    const response = await api.get(`/users/${user.login}/starred`);
    this.setState({stars: response.data});
  }

  render() {
    return <View />;
  }
}
