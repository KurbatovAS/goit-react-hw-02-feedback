import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickHandler = e => {
    this.setState(prevState => {
      return { [e.target.name]: (prevState[e.target.name] += 1) };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good && Math.round((this.state.good / this.countTotalFeedback()) * 100)    
  };

  render() {
    const feedbackValues = Object.keys(this.state);
    const TotalFeedback = this.countTotalFeedback();
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={feedbackValues} onLeaveFeedback={this.onClickHandler} />  
        </Section>
        
        <Section title="Statistics">
          {TotalFeedback
            ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={TotalFeedback} positivePercentage={PositiveFeedbackPercentage} />
            : <Notification message="There is no feedback" />}      
        </Section>    
      </>
    );
  };
};

export default App;