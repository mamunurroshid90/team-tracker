import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = (props) => {
	const { team } = props;

	return (
		<div className="col-md-4 mb-4">
			<div className="card p-3">
				<img className="img-thumbnail image-square mb-3" src={team.strTeamBadge} alt="" />
				<h2> {team.strTeam} </h2>
				<p> Sports Type: {team.strSport} </p>

				<Link to={'/teams/' + team.idTeam}>
					<button className="btn btn-primary text-white">
						<strong>Explore</strong>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default TeamCard;
