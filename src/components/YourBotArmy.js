import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botsArmy, getMyArmy, handleFilter }) {
  //your bot army code here...

  const mapBotArmy = botsArmy.map(bot => {
    return bot? <BotCard handleFilter={handleFilter} key={bot.id} getMyArmy={getMyArmy} bot={bot} /> : true
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          { mapBotArmy }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
