import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	Button,
	View,
} from 'react-native';
import { Metrics, Colors, Images } from '../Themes';
import Header from '../Components/Header';
import CalendarPicker from 'react-native-calendar-picker';
import { FontAwesome } from '@expo/vector-icons';

export default class Calendar extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	datePicked: '',
	    }
  	}

  	goBackToSearch = () => {
		this.props.handleAction('search', '', 'LessonOverview')
	}

	onDateChange = (date) => {
		this.setState({ datePicked: date})
	}

	confirmAdd = () => {
		var date2 = this.state.datePicked
  		var res = (date2.toString()).split(" ");
		var date = res[0] + ' ' + res[1] + ' ' + res[2] + ' ' + res[3]
		if((date) === '') {
			alert('Please select a date before continuing');
		} else {
			this.props.handleAction('datePicked', date, 'LessonAddSuccess')
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title} ><Text style={{fontWeight: 'bold'}}>Add</Text> this lesson to your course calendar</Text>
				<CalendarPicker
					style = {styles.calendar}
					selectedDayColor = {Colors.lg1}
					todayTextStyle = {{color: Colors.lg1}}
					todayBackgroundColor = {'transparent'}
					onDateChange={this.onDateChange}
				/>
				<View style={styles.arrowContainer} >
    				<View style={styles.leftArrow} >
	    				<TouchableOpacity onPress={() => this.goBackToSearch()} > 
	    					<FontAwesome name={'arrow-left'} size={ 50 } style={{color: 'black'}} /> 
	    				</TouchableOpacity>
    				</View>
    				<View style={styles.rightArrow} >
	    				<TouchableOpacity onPress={() => this.confirmAdd()} >
	    					<FontAwesome name={'arrow-right'} size={ 50 } style={{color: 'black'}} /> 
	    				</TouchableOpacity>
    				</View>
    			</View>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: 'white',
		alignItems: 'center',
	},
	title: {
		width: '80%',
		height: '10%',
		marginTop: '10%',
		fontSize: 25,
		marginTop: 50,
		marginBottom: 50,
		textAlign: 'left',
		textAlign: 'center'	
	},
	arrowContainer: {
		flexDirection: 'row',
	},
	leftArrow: {
		marginTop: 10,
		marginRight: '25%',
	},
	rightArrow: {
		marginTop: 10,
		marginLeft: '25%',
	},
})