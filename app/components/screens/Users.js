import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HomeContainer from '../HomeContainer';
import {StackActions, useNavigation} from '@react-navigation/native';
import {fetchUsers} from '../../utils/auth';

const Users = ({route}) => {
  const profile = route.params ? route.params.profile : null;
  const navigation = useNavigation();

  const [users, setUsers] = useState([]);
  const [contentType, setContentType] = useState('users'); // Assuming 'users' or 'other'

  useEffect(() => {
    fetchUsersFromApi();
  }, []);

  const fetchUsersFromApi = async () => {
    try {
      const userData = await fetchUsers();
      if (userData.success) {
        setUsers(userData.users);
      } else {
        // Handle error, e.g., show error message
        console.error('Failed to fetch users:', userData.error);
      }
    } catch (error) {
      // Handle network error
      console.error('Network error:', error);
    }
  };

  const handleHomePress = () => {
    navigation.dispatch(StackActions.replace('Home', {profile: profile}));
  };

  const handleLogoutPress = () => {
    navigation.dispatch(StackActions.replace('SignIn'));
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('UserProfile', {userId: item._id})}>
      <Text style={styles.cardHeader}>{item.userName}</Text>
      <Text>Email: {item.email}</Text>
      <Text>{item.is_admin ? 'Admin' : 'User'}</Text>
      <Text>{item.verified ? 'Verified' : 'Not Verified'}</Text>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <HomeContainer
      onHomePress={handleHomePress}
      onLogoutPress={handleLogoutPress}
      showProfileIcon={false}>
      {contentType === 'users' ? (
        <FlatList
          data={users}
          keyExtractor={item => item._id}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
        />
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <Text>Other Content Here</Text>
        </ScrollView>
      )}
    </HomeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  flatListContainer: {
    paddingBottom: 20, // Adjust as needed
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#8469cf',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Users;
