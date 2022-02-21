import React, { useEffect, useState } from "react";
import "../styles/BlazersTest.scss";

const BlazersTest = () => {
  const [playerDatas, setPlayerDatas] = useState([]);
  const [fetchInProgress, setFetchInProgress] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const players = [
        {
          id: 1626204,
          name: "Nance Jr.",
          draft: "27th overall pick, 2015 (Lakers)",
          number: 11,
        },
        {
          id: 1629833,
          name: "Blevins",
          number: 21,
        },
        {
          id: 203463,
          name: "McLemore",
          draft: "7th pick, 2013 (Sacramento)",
          number: 23,
        },
        {
          id: 203496,
          name: "Covington",
          twitter: "holla_at_rob33",
          number: 23,
        },
        {
          id: 1629604,
          name: "Elleby",
          twitter: "EllebyCj",
          instagram: "cjelleby",
          number: 16,
        },
        {
          id: 1626181,
          name: "Powell",
          draft: "46th pick, 2015 (Milwaukee)",
          number: 24,
        },

        {
          id: 1630570,
          name: "Watford",
          number: 2,
        },
        {
          id: 203503,
          name: "Snell",
          number: 17,
        },
        {
          id: 203469,
          name: "Zeller",
          number: 40,
        },
        {
          id: 203081,
          name: "Lillard",
          draft: "6th pick, 2012 (Portland)",
          twitter: "Dame_Lillard",
          instagram: "damianlillard",
          number: 0,
        },
        {
          id: 1629642,
          name: "Little",
          twitter: "2ez_nassie",
          instagram: "nassir",
          number: 9,
        },
        {
          id: 203468,
          name: "McCollum",
          draft: "10th pick, 2013 (Portland)",
          twitter: "CJMcCollum",
          instagram: "3jmccollum",
          number: 3,
        },
        {
          id: 203994,
          name: "Nurkić",
          draft: "16th pick, 2014 (Chicago)",
          twitter: "bosnianbeast27",
          instagram: "bosnianbeast27",
          number: 27,
        },
        {
          id: 1629014,
          name: "Simons",
          draft: "24th pick, 2018 (Portland)",
          twitter: "AnferneeSimons",
          instagram: "antsimons",
          number: 1,
        },
        {
          id: 1628372,
          name: "Smith Jr.",
          number: 10,
        },
        {
          id: 1630535,
          name: "Brown III.",
          number: 4,
        },
      ];
      let playerData = [];
      try {
        for (const playerId of players) {
          const leagueUrl = `https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/players/playercard_`;
          const response = await fetch(`${leagueUrl}${playerId.id}_02.json`);
          const json = await response.json();
          playerData.push(json);
        }
        setFetchInProgress(false);
        setPlayerDatas(playerData);
      } catch (error) {
        console.error("error", error);
        setFetchInProgress(false);
      }
    };
    fetchData();
  }, []);

  const Playermap = playerDatas.map((player, index) => (
    <PlayerCard
      key={index}
      fname={player.pl.fn}
      lname={player.pl.ln}
      number={player.pl.num}
      imgSrc={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/${player.pl.pid}.png`}
      ppg={player.pl.ca.sa[player.pl.ca.sa.length - 1].pts}
      rpg={player.pl.ca.sa[player.pl.ca.sa.length - 1].reb}
      apg={player.pl.ca.sa[player.pl.ca.sa.length - 1].ast}
      link={`http://vote.nba.com/en?pid=${player.pl.pid}`}
    />
  ));

  return (
    <PlayerCardContainer>
      {fetchInProgress ? <Loading /> : Playermap}
    </PlayerCardContainer>
  );
};

const Loading = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const PlayerCardContainer = ({ children }) => {
  return <div className="playerCard_container">{children}</div>;
};

const PlayerCard = ({ fname, lname, number, link, ppg, rpg, apg, imgSrc }) => {
  return (
    <div className="playerCard-item">
      <div className="playerCard_wrapper">
        <div
          className="playerCard-top"
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        >
          <div className="playerCard-prep">
            <span className="playerCard-number">{number}</span>
            <div className="playerCard-name">
              <span className="playerCard-fname">{fname}</span>
              <span className="playerCard-lname">{lname}</span>
            </div>
          </div>
        </div>
        <div className="playerCard-bottom">
          <div className="playerCard-scores">
            <ul>
              <li>
                <strong>PPG:</strong>
                {ppg}
              </li>
              <li>
                <strong>RPG:</strong>
                {rpg}
              </li>
              <li>
                <strong>APG:</strong>
                {apg}
              </li>
            </ul>
          </div>
          <a href={link} className="playerCard-btn">
            Vote
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlazersTest;
