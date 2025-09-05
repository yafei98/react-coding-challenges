import React, { useState, Component, memo } from 'react';
import RocketCore from './RocketCore';

export const FunctionalRocket = memo(() => {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

export class ClassRocket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  shouldComponentUpdate(nextProps) {
    return JSON.stringify(this.props) !== JSON.stringify(nextProps);
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
