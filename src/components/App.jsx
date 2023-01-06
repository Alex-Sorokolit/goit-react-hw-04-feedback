import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification ';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percent = Math.round((good / total) * 100) || 0;
    return percent;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() >= 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </>
  );
};
