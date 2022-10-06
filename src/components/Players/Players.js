import { BsSearch } from 'react-icons/bs';
import Player from '../Player/Player';
import './Players.css'

const Players = (props) => {
   const {players} = props;

   
    return (
        <div className='players '> 
            {
                players.map(player => <Player
                    key = {player.idPlayer}
                    player = {player}
                    pl = {props}

                
                ></Player>)
            }
        </div>
    );
};

export default Players;