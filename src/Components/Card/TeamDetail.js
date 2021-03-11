import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useParams } from 'react-router';
import Header from '../Header/Header';

const TeamDetail = () => {
	const { id } = useParams();
	const [ team, setTeam ] = useState({});

	useEffect(
		() => {
			const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
			fetch(url).then((res) => res.json()).then((data) => {
				setTeam(data.teams[0]);
				console.log(data.teams[0]);
			});
		},
		[ id ]
	);

	return (
		<div>
			<Header banner={team.strTeamBanner} />

			<div className="p-5" style={{ backgroundColor: 'darkslateblue', color: 'white' }}>
				<div className="container">
					<div className="row mb-4">
						<div className="card">
							<div className="row col-md-6 ">
								<div className="card-body">
									<h2 className="card-title">{team.strTeam}</h2>
								</div>
							</div>
							<div className="p">
								<div className=" row col-md-6">
									<img
										className="banner"
										src={
											team.strGender === 'Male' ? (
												'/images/Photo/male.png'
											) : (
												'/images/Photo/female.png'
											)
										}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
					<p>{team.strStadiumDescription}</p>
					<div className="social-container">
						<a href="https://www.facebook.com/">
							<FontAwesomeIcon icon={faFacebook} size="3x" />
						</a>

						<a href="https://www.youtube.com/">
							<FontAwesomeIcon icon={faYoutube} size="3x" />
						</a>

						<a href="https://www.linkedin.com/feed/">
							<FontAwesomeIcon icon={faLinkedin} size="3x" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamDetail;
