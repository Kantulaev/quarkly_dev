import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, LinkBox, Box, Image, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { TiArrowRight } from "react-icons/ti";
import { BsDot } from "react-icons/bs";
import { FaTelegram, FaWhatsappSquare } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				ЖК "Жемчужина Избербаша" 
			</title>
			<meta name={"description"} content={"Элитный ЖК на берегу моря. Рассрочка на 3 года. Перспективный район!"} />
			<meta property={"og:title"} content={"ЖК \"Жемчужина Избербаша\" "} />
			<meta property={"og:description"} content={"Элитный ЖК на берегу моря. Рассрочка на 3 года. Перспективный район!"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0016%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T06:21:09.417Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/favicon-32x32.png?v=2023-05-16T06:41:53.296Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310.png?v=2023-05-16T06:42:15.248Z"} />
			<meta name={"msapplication-TileColor"} content={"#0429ff"} />
		</Helmet>
		<Box
			width="100%"
			display="flex"
			align-items="center"
			justify-content="center"
			position="static"
			padding="13px 0px 13px 0px"
			top="0px"
			quarkly-title="Banner-2"
			background="#ff9ed0"
			md-flex-direction="column"
			md-display="flex"
			md-grid-gap="8px"
		>
			<Text margin="0px 0px 0px 0px" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" color="--dark" md-text-align="center">
				Успей инвестировать в новый ЖК "Жемчужина Избербаша"{" "}
			</Text>
			<LinkBox
				color="--light"
				margin="0px 0px 0px 16px"
				text-decoration-line="initial"
				text-transform="uppercase"
				background="--color-dark"
				font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
				padding="6px 16px 7px 16px"
				border-radius="24px"
				letter-spacing="0.3px"
				flex-direction="row"
				target="_blank"
				href="/zhemchuzhina"
			>
				<Text margin="0px 0px 1px 0px" text-transform="initial">
					Посмотреть
				</Text>
				<Icon category="ti" icon={TiArrowRight} size="24px" margin="0px 0px 0px 0px" />
			</LinkBox>
		</Box>
		<Box
			width="100%"
			display="flex"
			align-items="center"
			justify-content="center"
			position="static"
			padding="13px 0px 13px 0px"
			top="0px"
			quarkly-title="Banner-2"
			background="linear-gradient(90deg, #ffd7c7,#ffd3ff,#ffffff);"
			md-flex-direction="column"
			md-display="flex"
			md-grid-gap="8px"
		>
			<Text margin="0px 0px 0px 0px" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" color="--dark" md-text-align="center">
				Новый ЖК "Московский"
			</Text>
			<Icon category="bs" icon={BsDot} size="16px" md-display="none" />
			<Text margin="0px 0px 0px 0px" font="--base" color="--dark" md-text-align="center">
				{" "}Современный
жилой комплекс комфорт-класса{"\n\n"}
			</Text>
			<LinkBox
				color="--light"
				margin="0px 0px 0px 16px"
				text-decoration-line="initial"
				text-transform="uppercase"
				background="--color-dark"
				font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
				padding="6px 16px 7px 16px"
				border-radius="24px"
				letter-spacing="0.3px"
				flex-direction="row"
				target="_blank"
				href="/moskovskiy"
				sm-href="/moskovskiy"
			>
				<Text margin="0px 0px 1px 0px" text-transform="initial">
					Посмотреть
				</Text>
				<Icon category="ti" icon={TiArrowRight} size="24px" margin="0px 0px 0px 0px" />
			</LinkBox>
		</Box>
		<Section padding="80px 0 80px 0" lg-padding="56px 0 56px 0" sm-padding="32px 0 32px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" sm-overflow="visible" />
			<Box
				margin="0px 0px 32px 0px"
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 33px 0px"
				display="flex"
				flex-direction="column"
				align-items="center"
				lg-padding="15px 15px 15px 15px"
				sm-margin="0px 0px 10px 0px"
				justify-content="center"
				width="100%"
			>
				<Text font="--headline1" color="--light" text-align="center" md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
					Сейчас в продаже
				</Text>
			</Box>
			<Box
				display="inline-block"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				width="100%"
				margin="32px 0px 0px 0px"
			>
				<LinkBox
					display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-wrap="wrap"
					sm-width="100%"
					grid-column="1 / span 1"
					sm-align-self="auto"
					sm-grid-column="auto"
					justify-content="flex-start"
					margin="0px 0px 64px 0px"
					sm-overflow="visible"
					href="/zhemchuzhina"
				>
					<Box
						width="100%"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						md-width="100%"
						md-margin="0px 0px 0px 0px"
						lg-width="100%"
						sm-overflow="visible"
					>
						<Image
							src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/img827.jpg?v=2024-10-01T11:19:29.875Z"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="313px"
							height="722px"
							sm-overflow="hidden"
							srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/img827.jpg?v=2024-10-01T11%3A19%3A29.875Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/img827.jpg?v=2024-10-01T11%3A19%3A29.875Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/img827.jpg?v=2024-10-01T11%3A19%3A29.875Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/img827.jpg?v=2024-10-01T11%3A19%3A29.875Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/img827.jpg?v=2024-10-01T11%3A19%3A29.875Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/img827.jpg?v=2024-10-01T11%3A19%3A29.875Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/img827.jpg?v=2024-10-01T11%3A19%3A29.875Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						width="100%"
						padding="16px 12px 16px 12px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						md-border-width="0px"
						flex-direction="column"
					>
						<Text margin="24px 0px 0 0px" font="--headline2" color="--light" text-decoration-line="underline">
							Жемчужина Избербаша
→{"\n\n"}
						</Text>
						<Text margin="16px 0px 8px 0px" font="--headline4" color="--light">
							Успей инвестировать в новый ЖК на берегу моря
						</Text>
					</Box>
				</LinkBox>
				<LinkBox
					display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-wrap="wrap"
					sm-width="100%"
					grid-column="2 / span 2"
					lg-grid-column="2 / span 1"
					sm-align-self="auto"
					sm-grid-column="auto"
					justify-content="flex-start"
					href="/moskovskiy"
				>
					<Box
						width="100%"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						md-width="100%"
						md-margin="0px 0px 0px 0px"
						lg-width="100%"
					>
						<Image
							src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04:56:37.865Z"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="513px"
							height="722px"
							srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						width="100%"
						padding="16px 12px 16px 12px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						md-border-width="0px"
						flex-direction="column"
					>
						<Text margin="24px 0px 0 0px" font="--headline2" color="--light" text-decoration-line="underline">
							ЖК Московский 
→{"\n\n"}
						</Text>
						<Text margin="16px 0px 8px 0px" font="--headline4" color="--light">
							Cовременный жилой комплекс комфорт-класса{"\n\n\n\n"}
						</Text>
					</Box>
				</LinkBox>
			</Box>
		</Section>
		<Section quarkly-title="Footer">
			<Override
				slot="SectionContent"
				sm-height="auto"
				sm-align-self="center"
				sm-justify-content="flex-end"
				sm-align-items="center"
				sm-flex-direction="column"
				sm-align-content="flex-start"
				sm-flex-wrap="wrap"
				sm-margin="18px 28.8px 0px 28.8px"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				align-content="center"
				justify-content="center"
			>
				<LinkBox margin="0px 32px 0px 0px" href="https://t.me/+79882200199" target="_blank">
					<Icon category="fa" icon={FaTelegram} size="64px" color="--darkL1" />
				</LinkBox>
				<LinkBox href="https://wa.me/79286775522" target="_blank">
					<Icon category="fa" icon={FaWhatsappSquare} size="64px" color="--darkL1" />
				</LinkBox>
			</Box>
			<Text
				margin="0"
				md-margin="0px 0 20px 0"
				text-align="center"
				font="--lead"
				sm-height="auto"
				display="block"
			/>
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