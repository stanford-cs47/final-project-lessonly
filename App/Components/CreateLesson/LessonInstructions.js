import React, { Component } from 'react'
import {
	StyleSheet,
	SafeAreaView,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	Button,
	View,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { Metrics, Colors, Images } from '../../Themes';
import { FontAwesome } from '@expo/vector-icons';

export default class LessonInstructions extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	text: '',
	  	}
  	}

  	componentWillMount() {
  		this.setState({ text: this.props.instructions })
  	}

  	updateText = (txt) => {
  		this.props.handleAction('instructions', txt, 'LessonInstructions');
  		this.setState({ text: txt });
  	}

  	rightArrowClicked = () => {
  		this.props.handleAction('instructions', this.state.text, 'LessonMedia');
  	}

  	leftArrowClicked = () => {
  		this.props.handleAction('instructions', this.state.text, 'LessonMaterials');
  	}


	render() {
		return (
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
				<View style={styles.container} >
	      			<Text style={styles.title} > What <Text style={{fontWeight: 'bold'}}>instructions</Text> would give for this lesson? </Text>
	      			<TextInput
	          			style={styles.input}
				      	onChangeText={txt => this.updateText(txt)}
				      	value={this.state.text}
				      	placeholder={'Enter instructions here'}
				      	multiline={true}
	    			/>
	    			<View style={styles.arrowContainer} >
	    				<View style={styles.leftArrow} >
		    				<TouchableOpacity onPress={() => this.leftArrowClicked()} >
		    					<FontAwesome name={'arrow-left'} size={ 50 } style={{color: 'black'}} /> 
		    				</TouchableOpacity>
	    				</View>
	    				<View style={styles.rightArrow} >
		    				<TouchableOpacity onPress={() => this.rightArrowClicked()}>
		    					<FontAwesome name={'arrow-right'} size={ 50 } style={{color: 'black'}} /> 
		    				</TouchableOpacity>
	    				</View>
	    			</View>
	    		</View>
	    	</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		alignItems: 'center',	
	},
	title: {
		width: '80%',
		height: '10%',
		marginTop: '10%',
		fontSize: 25,
		marginTop: 50,
		marginBottom: 50,
		textAlign: 'center',	
	},
	input: {
		width: '80%', 
		height: '45%',
		padding: 10, 
		backgroundColor: 'white',
	  	borderRadius: 10,	
	  	borderWidth: 1,
	  	shadowColor: 'gray', 
	    shadowOffset: { height: 3, width: 3 }, 
	    shadowOpacity: 3, 
	    shadowRadius: 3, 
	  	backgroundColor: 'white',
	},
	arrowContainer: {
		flexDirection: 'row',
	},
	leftArrow: {
		marginTop: 50,
		marginRight: '25%',
	},
	rightArrow: {
		marginTop: 50,
		marginLeft: '25%',
	},
})