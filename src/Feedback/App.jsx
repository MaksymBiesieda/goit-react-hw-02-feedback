import React, { Component } from "react";
import PropTypes from 'prop-types';
import Section from './Section/Section ';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedBackOptions/FeedbackOptions ';
import Notification from './Notification/Notification';

export default class App extends Component {

  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };
  
   
  state = {
  good: this.props.initialValue,
  neutral: this.props.initialValue,
  bad: this.props.initialValue,
  } 

  updatingState = (name) => {
   this.setState(prevState => ({ [name]: prevState[name] + 1 })
    );
  }

  countTotalFeedback = () => {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    return (good + neutral + bad)
  };

  countPositiveFeedbackPercentage = () => Math.round(100 * this.state.good / this.countTotalFeedback());
  
  render() {
     const { good } = this.state;
     const { neutral } = this.state;
     const { bad } = this.state;
     return (
       <div>
       <Section title="Please leave feedback">
       <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.updatingState}/>
       </Section>
         <Section title="Statistics">
           {this.countTotalFeedback() ? ( <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>) : (<Notification message="There is no feedback"/>)}
      
       </Section>
       </div>
     )
   }
};


