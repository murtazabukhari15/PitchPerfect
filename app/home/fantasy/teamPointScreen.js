import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import {withRouter} from '../../../component/withRouter';

const { width } = Dimensions.get('window');

class TeamPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      averagePoints: 0,
      currentPoints: 0,
      highestPoints: 0,
      deadline: 'Saturday 23 Nov at 15:00',
    };
  }

  componentDidMount() {
    this.fetchPoints();
  }

  fetchPoints = () => {
    const pointsData = {
      average: 49,
      current: 50,
      highest: 136,
    };

    this.setState({
      averagePoints: pointsData.average,
      currentPoints: pointsData.current,
      highestPoints: pointsData.highest,
    });
  };

  render() {
    const { averagePoints, currentPoints, highestPoints, deadline } = this.state;

    return (
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Your Current Point</Text>
          <View style={styles.separatorLine} />
        </View>

        {/* On-going Series Section */}
        <View style={styles.seriesContainer}>
          <Text style={styles.seriesText}>On going series</Text>
        </View>

        {/* Points Section */}
        <TouchableOpacity style={styles.pointsContainer}
              onPress={()=>this.props.router.navigate("/home/fantasy/groundPointTeamScreen")}
        >
          <View style={[styles.pointBox,styles.pointBoxSecondary]}>
            <Text style={[styles.pointValue, styles.whiteText]}>{averagePoints}</Text>
            <Text style={[styles.pointLabel, styles.whiteText]}>Average</Text>
          </View>
          <View style={[styles.pointBox, styles.pointBoxHighlighted, styles.elevatedShadow]}>
            <Text style={[styles.pointValue, styles.whiteText]}>{currentPoints}</Text>
            <Text style={[styles.pointLabel, styles.whiteText]}>Points</Text>
          </View>
          <View style={[styles.pointBox,styles.pointBoxSecondary]}>
            <Text style={[styles.pointValue, styles.whiteText]}>{highestPoints}</Text>
            <Text style={[styles.pointLabel, styles.whiteText]}>Highest</Text>
          </View>
        </TouchableOpacity>

        {/* Deadline Section */}
        <Text style={styles.deadlineText}>
          Ongoing Series Deadline: {deadline}
        </Text>

        {/* Buttons Section */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Fixtures</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Player Statistics</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Section */}
        <View style={styles.footerContainer}>
            <Image source={require("../../../assets/images/teamPointLogo.png")}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6E5',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#000',
  },
  separatorLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#FF7F00',
    marginTop: '2%',
  },
  seriesContainer: {
    backgroundColor: '#FF7F00',
    borderBottomLeftRadius: width * 0.03,
    borderBottomRightRadius: width * 0.03,
    paddingHorizontal: '3%',
  },
  seriesText: {
    color: '#fff',
    fontSize: width * 0.03,
    fontWeight: 'bold',
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: '3%',
    backgroundColor: '#B85703',
    padding: '5%',
    shadowColor: '#000',
  },
  pointBox: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#FFF6E5',
    borderRadius: width * 0.02,
    padding: '5%',
  },
  pointBoxSecondary:{
    borderRadius:0,
    height:'80%',
    backgroundColor:'#A34D02',
    alignSelf:'center'
  },
  pointBoxHighlighted: {
    width: '30%',
    height:'100%',
    backgroundColor: '#FF7F00',
  },
  elevatedShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 7,
  },
  pointValue: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: 'white',
  },
  whiteText: {
    color: '#fff',
  },
  pointLabel: {
    fontSize: width * 0.03,
    color: '#666',
    marginBottom:'10%'

},
  deadlineText: {
    fontSize: width * 0.03,
    color: '#000',
    textAlign: 'center',
    marginBottom: '2%',
    fontWeight:'bold'
  },
  buttonsContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
    backgroundColor:"#FD7702",
    borderRadius: width * 0.02,
    paddingVertical: '3%',
    alignItems: 'center',
    marginVertical: '2%',
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  footerContainer: {
    marginTop: '5%',
    backgroundColor: '#FF7F00',
    width: '100%',
    alignItems: 'center',
    paddingVertical: '5%',
    marginBottom:'5%'
  },
  footerText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default withRouter(TeamPoints);
