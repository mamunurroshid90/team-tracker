import React, { useEffect, useState } from 'react';
import TeamCard from '../Card/TeamCard';
import Header from '../Header/Header';

const Home = () => {
	const [ teams, setTeams ] = useState([]);

	const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;

	useEffect(() => {
		fetch(url).then((res) => res.json()).then((data) => {
			setTeams(data.teams);
			console.log(data.teams);
		});
	}, []);

	// function getAllTeams

	return (
		<div>
			<Header title="TEAM TRACKER" />

			<div style={{ backgroundColor: 'darkslateblue', padding: '20px' }}>
				<div className="container">
					<div className="row">{teams.map((team) => <TeamCard team={team} />)}</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
