import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, getMyArmy }) {

  // function addMyArmy(bot){
  //   // newBots.push(<BotCard key={bot.id} bot={bot} />)
  //   console.log(bot);
  // }
  
  const botCollection = bots.map(bot => {
    return <BotCard getMyArmy={getMyArmy} key={bot.id} bot={bot} />
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {botCollection}
      </div>
    </div>
  );
}

export default BotCollection;
