import React from 'react';
import { Step } from 'semantic-ui-react';

import { STEP_PROPS } from '../forms/STEP_PROPS';

const StepBar = ({ currentStepKey, goToStep, snippets }) => {

  var cleanSteps = [];

  STEP_PROPS.forEach((step, index) => {
    var newStep = { title: { content: snippets[ `i_` + step.key ] }};
    newStep.active = step.key === currentStepKey;
    newStep.onClick = (e) => {
      goToStep({ key: step.key });
    };
    newStep.key = index;
    cleanSteps[ index ] = newStep;
  });

  return (<Step.Group
    className='six'
    size='mini'
    ordered
    items={ cleanSteps } />);
};

export default StepBar;
