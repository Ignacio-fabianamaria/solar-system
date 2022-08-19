import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <div className="title-missao"><Title headline="Missões" /></div>
        <div className="area-missoes">
          {// utilizando map para iterar o array de objetos missions e renderizar uma lista de missões
            missions.map((missao) => (<MissionCard
              key={ missao.name }// Atribuindo .name como identificador único
              name={ missao.name }
              year={ missao.year }
              country={ missao.country }
              destination={ missao.destination }
            />))
          }
        </div>
      </div>
    );
  }
}

export default Missions;
