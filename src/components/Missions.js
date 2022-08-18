import React from 'react';
import Title from './Title';
// import MissionCard from './MissionCard';
// import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

export default Missions;
