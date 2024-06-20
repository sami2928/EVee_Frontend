import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {Card} from '@ant-design/react-native';
import HomeContainer from '../HomeContainer';
import {StackActions, useNavigation} from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';

const Profile = ({route}) => {
  const profile = route.params ? route.params.profile : null;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const viewShotRef = useRef(null);

  // Assume we have uploaded the image and obtained the URL
  const qrCodeUrl =
    profile.qrCodeImage ||
    'https://your-image-hosting-service.com/path-to-image';

  const handleHomePress = () => {
    navigation.dispatch(StackActions.replace('Home', {profile: profile}));
  };

  const handleLogoutPress = () => {
    navigation.dispatch(StackActions.replace('SignIn'));
  };

  const handleSharePress = async () => {
    try {
      if (viewShotRef.current) {
        // Capture screenshot of the component
        const uri = await viewShotRef.current.capture();

        // Prepare the share options
        const options = {
          title: 'Share Account Details',
          url: uri,
          type: 'image/png', // Specify type as PNG or JPG as needed
        };

        // Open the share dialog
        await Share.open(options);
      } else {
        console.error('viewShotRef is not initialized properly');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <HomeContainer
      onHomePress={handleHomePress}
      onLogoutPress={handleLogoutPress}
      showProfileIcon={false}>
      <View style={styles.content}>
        <ViewShot ref={viewShotRef} options={{format: 'png', quality: 0.9}}>
          <Card style={styles.card}>
            <Card.Body style={styles.cardBody}>
              <View style={styles.qrContainer}>
                <View style={styles.qrCircle}>
                  <QRCode
                    value={qrCodeUrl}
                    size={70} // Reduced size for better fit
                    ecl="L" // Use lower error correction level to store more data
                  />
                  <TouchableOpacity
                    style={styles.qrButton}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.qrButtonText}>Show QR</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.userName}>{profile.userName}</Text>
              </View>
              <View style={styles.cardContent}>
                <View style={styles.field}>
                  <Text style={styles.label}>Email:</Text>
                  <Text
                    style={styles.value}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {profile.email}
                  </Text>
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Password:</Text>
                  <Text style={styles.value}>
                    {'*'.repeat(Math.min(profile.password.length, 8))}
                  </Text>
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Admin:</Text>
                  <Text style={styles.value}>
                    {profile.is_admin ? 'Yes' : 'No'}
                  </Text>
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Verified:</Text>
                  <Text style={styles.value}>
                    {profile.verified ? 'Yes' : 'No'}
                  </Text>
                </View>
              </View>
            </Card.Body>
          </Card>
        </ViewShot>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.detailsButton]}
            onPress={handleSharePress}>
            <Ionicons
              name="share-social"
              size={20}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.detailsButtonText}>Account Details</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            style={[styles.button, styles.backButton]}
            onPress={handleHomePress}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <QRCode value={qrCodeUrl} size={200} ecl="L" />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </HomeContainer>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: width * 0.9,
    borderRadius: 10,
    elevation: 2,
  },
  cardBody: {
    paddingBottom: 30, // Remove padding at the bottom to merge with buttons
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  qrCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: 10, // Added padding for better fit
    marginBottom: 20, // Added margin from above
  },
  qrButton: {
    position: 'absolute',
    bottom: -15,
    backgroundColor: '#000', // Filled with black
    borderRadius: 15,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  qrButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff', // White text for better contrast
  },
  userName: {
    marginTop: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  cardContent: {
    padding: 15,
  },
  field: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    color: '#000',
    textAlign: 'left', // Align text to the right
    marginRight: 10, // Adjust space between label and value.
    marginBottom: 10,
  },
  value: {
    color: '#000',
    flexShrink: 1,
    textAlign: 'right', // Align text to the left
  },
  buttonContainer: {
    flexDirection: 'row',
    borderBottomLeftRadius: 10, // Rounded bottom-left corner
    borderBottomRightRadius: 10, // Rounded bottom-right corner
    overflow: 'hidden', // Ensure corners are rounded
    height: 50, // Increase height of the buttons
    borderTopWidth: 1, // Add a border to the top
    borderTopColor: '#fff', // Set the border color to black
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0, // Remove default button border radius
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  detailsButton: {
    backgroundColor: '#8469cf',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10, // Add space between icon and text
  },
  backButton: {
    backgroundColor: '#8469cf',
  },
  separator: {
    width: 1,
    backgroundColor: '#fff', // Black color for the separator line
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width * 0.8,
    height: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#8469cf',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Profile;
