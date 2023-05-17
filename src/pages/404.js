import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Элитный Жилой Комплекс  "2 КИТА" г. Избербаш
			</title>
			<meta name={"description"} content={"Элитный ЖК у берега моря. Рядом горячие источники, аквапарк, новый детский сад. Рассрочка на 3 года."} />
			<meta property={"og:title"} content={"Элитный Жилой Комплекс  \"2 КИТА\" г. Избербаш"} />
			<meta property={"og:description"} content={"Элитный ЖК у берега моря. Рядом горячие источники, аквапарк, новый детский сад. Рассрочка на 3 года."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/photo_2023-05-14_21-34-09.jpg?v=2023-05-16T06:40:36.251Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/favicon-32x32.png?v=2023-05-16T06:41:53.296Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310.png?v=2023-05-16T06:42:15.248Z"} />
			<meta name={"msapplication-TileColor"} content={"#0429ff"} />
		</Helmet>
		<Section background="--color-darkL1" padding="80px 0 80px 0" id="contacts" quarkly-title="Contacts">
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 60px 0px"
					font="--headline1"
					color="--light"
					text-align="center"
					sm-font="normal 700 62px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Связаться{" "}
					<br />
					с нами
				</Text>
				<Text margin="0px 0px 48px 0px" font="--headline3" color="--light" text-align="center">
					<Link href="tel:+79286775522" color="#fafafa" border-color="#5959ff" link-color="#ffffff">
						+7 928 677-55-22
					</Link>
				</Text>
				<Text margin="0px 0px 48px 0px" font="--headline3" color="--light" text-align="center">
					<Link
						href="https://yandex.ru/maps/-/CCUk70xXsC"
						md-color="#ffffff"
						md-hover-color="#0c36ea"
						target="_blank"
						lg-color="#ffffff"
						color="--light"
					>
						г. Избербаш
						<br />
						Межлумова 11/1
					</Link>
				</Text>
				<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" instagram="https://instagram.com/instagram" margin="0px 0px 0px 0px">
					<Override
						slot="link"
						border-radius="50%"
						color="--grey"
						hover-color="--light"
						background="#191E22"
						hover-background="--color-primary"
						margin="0 5px 0 5px"
						padding="5x 5px 5px 5px"
						width="48px"
						height="48px"
						align-items="center"
						display="flex"
						justify-content="center"
						hover-transition="background-color 0.2s ease-in-out 0s"
						transition="background-color 0.2s ease-in-out 0s"
					/>
					<Override
						slot="icon"
						color="--light"
						padding="7px 7px 7px 7px"
						border-width="0px"
						size="38px"
						border-radius="50px"
					/>
				</SocialMedia>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});