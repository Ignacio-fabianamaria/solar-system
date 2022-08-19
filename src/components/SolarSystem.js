import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="sistema-sol">
        <div className="title-planetas"><Title headline="Planetas" /></div>
        <div className="list-planetas">
          {// utilizando map para iterar o array de objetos planets e renderizar uma lista com os planetas
            planets.map((planeta) => (<PlanetCard // PlanetCard para renderizar cada elemento da lista
              key={ planeta.name } // Atribuindo .name como identificador único
              planetName={ planeta.name }
              planetImage={ planeta.image }
            />))
          }
        </div>
      </div>
    );
  }
}
export default SolarSystem;
