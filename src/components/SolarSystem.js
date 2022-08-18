import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="sistema-sol">
        <Title headline="Planetas" />
      </div>
    );
  }
}
export default SolarSystem;
