import { ButtonBox, Button } from "./FeedbackOptionsStyled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <ButtonBox>
        {options.map(option => (
          <Button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        ))}
      </ButtonBox>
    </>
  );
};
