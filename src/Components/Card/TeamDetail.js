import React, { useEffect, useState } from 'react';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import SocialButton from '../SocialIcon/SocialButton';

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
						<div className={team.strGender + ' card py-5 '}>
							<div className="row">
								<div className="col-md-6">
									<div className="text">
										<h1> {team.strTeam}</h1>
										<p> ID: {team.idLeague}</p>
										<p> Country: {team.strCountry}</p>
										<p>Founded: {team.intFormedYear}</p>
										<p>Location: {team.strStadiumLocation}</p>
									</div>
								</div>
								<div className="col-md-6">
									<div>
										<img
											className="img-responsive banner"
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
					</div>
					<p>{team.strStadiumDescription}</p>

					<div className="d-flex justify-content-center buttons">
						<SocialButton link={team.strFacebook} fontName="fab fa-facebook" />
						<SocialButton link={team.strTwitter} fontName="fab fa-twitter" />
						<SocialButton link={team.strYoutube} fontName="fab fa-youtube" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamDetail;
