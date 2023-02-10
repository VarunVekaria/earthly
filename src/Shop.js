import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@mui/material";
import React from "react";
import "./Shop.css";
export const Shop = () => {
	return (
		<div>
			<div className="shop-card">
				<Card sx={{ maxWidth: 300 }}>
					<CardHeader
						sx={{
							color: "#9d552c",
							fontWeight: "100",
							fontFamily: "Poppins",
							fontSize: "3px",
							paddingTop: "20px",
						}}
						title="Plant Based Reusable Cups"
						subheader="Easy to clean, hassle free"
					/>
					<CardMedia
						component="img"
						height="194"
						image="https://static.wixstatic.com/media/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg/v1/fill/w_383,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg"
						alt="Paella dish"
					/>
					<CardContent>
						<Typography variant="body2" sx={{ color: "#2c645b" }}>
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests.
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ maxWidth: 300 ,margin: "20px"}}>
					<CardHeader
						sx={{
							color: "#9d552c",
							fontWeight: "100",
							fontFamily: "Poppins",
							fontSize: "3px",
							paddingTop: "20px",
						}}
						title="Sustainability Starter Kit"
						subheader="all you need to start the revolution"
					/>
					<CardMedia
						component="img"
						height="194"
						image="https://static.wixstatic.com/media/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.webp"
						alt="Paella dish"
					/>
					<CardContent>
						<Typography variant="body2" sx={{ color: "#2c645b" }}>
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests.
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ maxWidth: 300,margin: "20px" }}>
					<CardHeader
						sx={{
							color: "#9d552c",
							fontWeight: "100",
							fontFamily: "Poppins",
							fontSize: "3px",
							paddingTop: "20px",
						}}
						title="Re-usable Bamboo Straws"
						subheader="Earthly Organic Bamboo Straws"
					/>
					<CardMedia
						component="img"
						height="194"
						image="https://static.wixstatic.com/media/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg/v1/fill/w_383,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg"
						alt="Paella dish"
					/>
					<CardContent>
						<Typography variant="body2" sx={{ color: "#2c645b" }}>
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests.
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ maxWidth: 300 ,margin: "20px"}}>
					<CardHeader
						sx={{
							color: "#9d552c",
							fontWeight: "100",
							fontFamily: "Poppins",
							fontSize: "3px",
							paddingTop: "20px",
						}}
						title="Natural Bamboo Loofah"
						subheader="eco-friendly exfoliating body scrubber"
					/>
					<CardMedia
						component="img"
						height="194"
						image="https://static.wixstatic.com/media/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.webp"
						alt="Paella dish"
					/>
					<CardContent>
						<Typography variant="body2" sx={{ color: "#2c645b" }}>
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests.
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ maxWidth: 300, margin: "20px" }}>
					<CardHeader
						sx={{
							color: "#9d552c",
							fontWeight: "100",
							fontFamily: "Poppins",
							fontSize: "3px",
							paddingTop: "20px",
						}}
						title="Bamboo ToothBrush"
						subheader="charcoal infused bristles"
					/>
					<CardMedia
						component="img"
						height="194"
						image="https://static.wixstatic.com/media/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg/v1/fill/w_383,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg"
						alt="Paella dish"
					/>
					<CardContent>
						<Typography variant="body2" sx={{ color: "#2c645b" }}>
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests.
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ maxWidth: 300 ,margin: "20px"}}>
					<CardHeader
						sx={{
							color: "#9d552c",
							fontWeight: "100",
							fontFamily: "Poppins",
							fontSize: "3px",
							paddingTop: "20px",
						}}
						title="Plant Based Reusable Containers"
						subheader="Easy to clean, hassle free"
					/>
					<CardMedia
						component="img"
						height="194"
						image="https://static.wixstatic.com/media/ead566_accfe36a331741fb81daacaa4d00c94d~mv2.jpg/v1/fill/w_383,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_accfe36a331741fb81daacaa4d00c94d~mv2.jpg"
						alt="Paella dish"
					/>
					<CardContent>
						<Typography variant="body2" sx={{ color: "#2c645b" }}>
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests.
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};
