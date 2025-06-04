import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, LinkBox, Box, Strong, Image, Section, Span, Button, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { TiArrowRight } from "react-icons/ti";
import { FaTelegram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"moskovskiy"} />
		<Helmet>
			<title>
				ЖК "Московский" -  Идеальная Жизнь Начинается Здесь! 
			</title>
			<meta name={"description"} content={"ЖК «Московский» — это современный\nжилой комплекс комфорт-класса,\nстроящийся в Махачкале\nпо адресу ул. Даганова, 139."} />
			<meta property={"og:title"} content={"ЖК \"Московский\" -  Идеальная Жизнь Начинается Здесь! "} />
			<meta property={"og:description"} content={"ЖК «Московский» — это современный\nжилой комплекс комфорт-класса,\nстроящийся в Махачкале\nпо адресу ул. Даганова, 139."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04:56:37.865Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/favicon-32x32.png?v=2025-06-03T09:53:03.204Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2025-06-03T09:53:29.370Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2025-06-03T09:53:29.370Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2025-06-03T09:53:29.370Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2025-06-03T09:53:29.370Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310.png?v=2025-06-03T09:53:40.471Z"} />
			<meta name={"msapplication-TileColor"} content={"#ff0408"} />
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
			background="linear-gradient(90deg, #ffd7c7,#ffd3ff,#ffffff);"
			md-flex-direction="column"
			md-display="flex"
			md-grid-gap="8px"
		>
			<Text margin="0px 0px 0px 0px" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" color="--dark" md-text-align="center">
				Элитный ЖК "2 Кита"
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
				href="/"
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
		<Section quarkly-title="Header" position="static" md-display="flex" md-flex-direction="row">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
				md-display="flex"
			>
				<Text
					margin="0"
					md-margin="0px 0 20px 0"
					text-align="left"
					font="--headline4"
					sm-margin="0px 0 0 0"
					lg-font="--headline4"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						font="--headline2"
						lg-font="--headline3"
					>
						<Link href="/" color="#000000" border-color="#ffffff" link-text-decoration-line="initial">
							ЖК Московский
						</Link>
					</Strong>
				</Text>
				<Image
					src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310-removebg-preview.png?v=2025-06-04T04:44:43.061Z"
					display="block"
					height="80px"
					sm-margin="16px 0px 16px 0px"
					lg-display="none"
					sm-display="flex"
					srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310-removebg-preview.png?v=2025-06-04T04%3A44%3A43.061Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310-removebg-preview.png?v=2025-06-04T04%3A44%3A43.061Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310-removebg-preview.png?v=2025-06-04T04%3A44%3A43.061Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310-removebg-preview.png?v=2025-06-04T04%3A44%3A43.061Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310-removebg-preview.png?v=2025-06-04T04%3A44%3A43.061Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310-removebg-preview.png?v=2025-06-04T04%3A44%3A43.061Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310-removebg-preview.png?v=2025-06-04T04%3A44%3A43.061Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					flex="0 1 auto"
					align-self="auto"
					display="flex"
					height="auto"
					order="1"
					align-items="center"
					md-display="flex"
				>
					<Link href="#rasrochka" color="#000000" font="--headline4" margin="0px 16px 0px 0px">
						Рассрочка
					</Link>
					<Link href="#docs" color="#000000" font="--headline4" margin="0px 16px 0px 0px">
						Документы
					</Link>
					<Link href="#contacts" color="#000000" font="--headline4" id="rasr">
						Контакты
					</Link>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="#1e1e1e">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-align-items="center"
				lg-margin="0px 0px 80px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				lg-width="100%"
				md-margin="0px 0px 50px 0px"
				sm-margin="0px 0px 30px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="--headline1"
					md-text-align="left"
					sm-align-self="flex-start"
				>
					Идеальная Жизнь Начинается Здесь!{"\n\n"}
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--darkL1"
					font="--headline3"
					lg-text-align="center"
					md-text-align="left"
					md-align-self="flex-start"
				>
					Cовременный жилой комплекс комфорт-класса{"\n\n"}
				</Text>
				<Box min-width="100px" min-height="100px" display="flex">
					<Button
						top="871px"
						left="324px"
						z-index="2"
						href="https://t.me/+79882200199"
						bottom="2750.999984741211px"
						height="50px"
						right="1402.310015258789px"
						width="150px"
						overflow-x="visible"
						overflow-y="visible"
						position="static"
						display="flex"
						align-items="center"
						margin="32px 24px 16px 0px"
						border-radius="40px"
						target="_blank"
						type="link"
					>
						<Icon category="fa" icon={FaTelegram} size="32px" margin="0px 8px 0px 0px" />
						<Span text-align="center" position="static" display="grid" flex="1 1 0%">
							Telegram
						</Span>
					</Button>
					<Button
						top="871px"
						left="324px"
						z-index="2"
						href="https://wa.me/79286775522"
						bottom="2750.999984741211px"
						right="1402.310015258789px"
						overflow-x="visible"
						overflow-y="visible"
						position="static"
						display="flex"
						width="150px"
						height="50px"
						align-items="center"
						border-radius="40px"
						margin="32px 0px 0px 0px"
						disabled={false}
						background="#00cc0f"
						target="_blank"
						type="link"
					>
						<Icon category="fa" icon={FaWhatsapp} size="32px" margin="0px 8px 0px 0px" />
						<Span
							text-align="center"
							position="static"
							display="grid"
							flex="1 1 0%"
							as="span"
						>
							Whatsapp
						</Span>
					</Button>
				</Box>
			</Box>
			<Box
				width="50%"
				padding="0px 0px 0px 32px"
				lg-width="100%"
				display="flex"
				lg-justify-content="center"
				lg-padding="0px 0px 0px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04:56:37.865Z"
					border-radius="24px"
					object-fit="cover"
					width="100%"
					height="100%"
					grid-column="1 / span 1"
					grid-row="1 / span 2"
					display="inline-block"
					loading="lazy"
					alt="жк 2 кита избербаш"
					title="жк 2 кита избербаш"
					srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0017%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A37.865Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section padding="88px 0 88px 0" margin="0px 0px 0px 0px" quarkly-title="Video-5">
			<Override slot="SectionContent" max-width="1220px" flex-direction="row" flex-wrap="wrap" />
			<Box
				lg-padding="0px 0px 0px 0px"
				align-items="flex-start"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 48px 0px"
				sm-margin="0px 0px 30px 0px"
				display="flex"
				width="100%"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--dark"
					font="--headline1"
					text-align="left"
					sm-font="--headline2"
					width="100%"
				>
					Вместо тысячи слов
				</Text>
			</Box>
			<Box display="flex" lg-flex-wrap="wrap" flex-wrap="wrap" width="100%">
				<Box
					lg-width="50%"
					md-width="100%"
					align-items="center"
					justify-content="center"
					width="50%"
					display="flex"
					padding="15px 15px 15px 15px"
				>
					<Components.QuarklycommunityKitVimeo
						showPortrait={false}
						showByline={false}
						video="https://vimeo.com/1090360682?share=copy#t=0"
						controls
						showTitle={false}
						position="static"
						overflow-y="hidden"
						overflow-x="hidden"
					/>
				</Box>
				<Box
					display="flex"
					padding="15px 15px 15px 15px"
					lg-width="50%"
					md-width="100%"
					align-items="center"
					justify-content="center"
					width="50%"
				>
					<Components.QuarklycommunityKitVimeo
						showPortrait={false}
						showByline={false}
						video="https://vimeo.com/1090361189?share=copy#t=0"
						controls
						showTitle={false}
						position="static"
						overflow-y="hidden"
						overflow-x="hidden"
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-lightD1">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-align-items="center"
				lg-margin="0px 0px 20px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 0px"
				lg-width="100%"
				md-margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				height="auto"
				align-self="flex-start"
			>
				<Text
					margin="0px 0px 0px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="--headline2"
					padding="0px 16px 0px 0px"
				>
					Семейный Комфорт. Современные Технологии.
				</Text>
			</Box>
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				lg-width="100%"
				md-margin="0px 0px 20px 0px"
				sm-margin="0px 0px 0px 0px"
			>
				<Text
					color="--darkL1"
					font="--headline4"
					lg-text-align="center"
					display="flex"
					align-items="flex-start"
					margin="40px 0px 16px 32px"
					sm-margin="40px 0px 16px 0"
				>
					Комплекс спроектирован как самодостаточное
жилое пространство с социальной
и коммерческой инфраструктурой:
на территории предусмотрены школа,
детский сад, поликлиника, торговый центр,
паркинг, охраняемая территория
и просторные зелёные зоны
для прогулок и отдыха.
				</Text>
			</Box>
			<Image
				src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0015%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05:03:01.516Z"
				object-fit="cover"
				width="100%"
				height="800px"
				grid-column="2 / span 2"
				border-radius="24px"
				sm-grid-column="1 / span 1"
				md-flex="0 1 auto"
				md-align-self="auto"
				md-order="0"
				md-display="grid"
				md-height="400px"
				margin="48px 0px 0px 0px"
				loading="lazy"
				alt="жк 2 кита избербаш"
				title="жк 2 кита избербаш"
				srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0015%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A03%3A01.516Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0015%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A03%3A01.516Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0015%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A03%3A01.516Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0015%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A03%3A01.516Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0015%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A03%3A01.516Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0015%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A03%3A01.516Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0015%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A03%3A01.516Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>
		<Section background="#ffffff" padding="90px 0 110px 0" quarkly-title="Team-12">
			<Text margin="0px 0px 0px 0px" color="--dark" font="600 48px --fontFamily-sans" sm-font="--headline4">
				Инфраструктура для Семей{"\n\n"}
			</Text>
			<Box
				min-width="100px"
				display="grid"
				flex-direction="column"
				lg-width="100%"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="repeat(2, 0 fr)"
				grid-gap="46px 24px"
				sm-grid-template-columns="1fr"
				sm-grid-template-rows="auto"
				sm-grid-gap="36px 0"
				margin="50px 0px 0px 0px"
				lg-grid-template-columns="repeat(2, 1fr)"
				lg-grid-template-rows="auto"
			>
				<Box
					min-width="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0002%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05:33:30.681Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
							srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0002%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A30.681Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0002%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A30.681Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0002%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A30.681Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0002%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A30.681Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0002%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A30.681Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0002%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A30.681Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0002%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A30.681Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						min-width="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="--headline4" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Доступная медицина
в шаге от вас{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0003%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05:33:48.413Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
							srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0003%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A48.413Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0003%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A48.413Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0003%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A48.413Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0003%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A48.413Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0003%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A48.413Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0003%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A48.413Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0003%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A33%3A48.413Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						min-width="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="--headline4" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Просторный и комфортный

 детский сад{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
					lg-display="none"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0006%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05:34:23.036Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
							srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0006%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A34%3A23.036Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0006%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A34%3A23.036Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0006%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A34%3A23.036Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0006%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A34%3A23.036Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0006%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A34%3A23.036Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0006%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A34%3A23.036Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0006%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A34%3A23.036Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						min-width="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="--headline4" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Большая современная школа{"\n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-lightD1" sm-justify-content="center">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" sm-justify-content="center" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-align-items="center"
				lg-margin="0px 0px 20px 0px"
				sm-padding="0px 0px 0px 0px"
				lg-width="100%"
				md-margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				height="auto"
				align-self="flex-start"
				padding="16px 16px 16px 0px"
				align-content="flex-start"
			>
				<Text
					margin="0px 0px 0px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					padding="0px 16px 0px 0px"
					text-align="left"
				>
					Всё под рукой
				</Text>
			</Box>
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-end"
				lg-align-items="center"
				lg-margin="0px 0px 20px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 0px"
				lg-width="100%"
				md-margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				height="auto"
				align-self="flex-start"
			>
				<Text
					margin="0px 0px 0px 0px"
					color="--dark"
					font="--headline4"
					lg-text-align="center"
					sm-font="--headline4"
					padding="0px 16px 0px 0px"
					text-align="right"
				>
					ЖК «Московский» предлагает максимум
удобства — прямо на территории комплекса
будет расположен современный торговый
центр, доступный всем жителям.
				</Text>
			</Box>
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				lg-width="100%"
				md-margin="0px 0px 20px 0px"
				sm-margin="0px 0px 0px 0px"
			/>
			<Image
				src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0010%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04:56:18.038Z"
				object-fit="cover"
				width="100%"
				height="800px"
				grid-column="2 / span 2"
				border-radius="24px"
				sm-grid-column="1 / span 1"
				md-flex="0 1 auto"
				md-align-self="auto"
				md-order="0"
				md-display="grid"
				md-height="400px"
				margin="48px 0px 0px 0px"
				alt="жк 2 кита избербаш"
				title="жк 2 кита избербаш"
				loading="lazy"
				srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0010%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A18.038Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0010%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A18.038Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0010%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A18.038Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0010%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A18.038Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0010%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A18.038Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0010%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A18.038Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0010%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T04%3A56%3A18.038Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>
		<Section padding="80px 0 90px 0" quarkly-title="Product-5">
			<Override slot="SectionContent" align-items="center" />
			<Text
				margin="0px 0px 20px 0px"
				font="normal 500 56px/1.2 --fontFamily-sans"
				text-align="center"
				lg-width="70%"
				md-width="100%"
				color="--darkL1"
			>
				Парковая Зона Отдыха{"\n\n"}
			</Text>
			<Hr
				min-height="10px"
				margin="0px 0px 50px 0px"
				border-color="--color-darkL1"
				width="40px"
				border-width="2px 0 0 0"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="auto"
				grid-gap="0 35px"
				md-grid-template-columns="1fr"
				md-grid-gap="40px 0"
				margin="0px 0px 70px 0px"
				md-margin="0px 0px 50px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image
						src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0021%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05:42:26.132Z"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						object-fit="cover"
						sm-height="220px"
						height="600px"
						lg-height="400px"
						md-width="100%"
						md-height="450px"
						srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0021%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A26.132Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0021%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A26.132Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0021%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A26.132Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0021%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A26.132Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0021%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A26.132Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0021%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A26.132Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0021%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A26.132Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Hr
						min-height="10px"
						margin="0px 0px 10px 0px"
						border-color="--color-darkL1"
						width="40px"
						border-width="2px 0 0 0"
					/>
					<Text margin="0px 0px 15px 0px" font="--headline4">
						Аллея объединяет всё пространство
комплекса, создавая ощущение уюта.
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Box min-width="100px" min-height="100px" margin="0px 0px 30px 0px">
						<Image
							src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0013%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05:42:06.928Z"
							display="block"
							max-width="100%"
							margin="0px 0px 25px 0px"
							height="300px"
							width="100%"
							object-fit="cover"
							sm-height="220px"
							lg-height="200px"
							md-height="350px"
							srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0013%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A06.928Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0013%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A06.928Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0013%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A06.928Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0013%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A06.928Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0013%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A06.928Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0013%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A06.928Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0013%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A42%3A06.928Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Hr
							min-height="10px"
							margin="0px 0px 10px 0px"
							border-color="--color-darkL1"
							width="40px"
							border-width="2px 0 0 0"
						/>
						<Text margin="0px 0px 15px 0px" font="--headline4">
							Прогулочные дорожки и скамейки
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Image
							src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0011%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05:43:45.074Z"
							display="block"
							max-width="100%"
							margin="0px 0px 25px 0px"
							height="300px"
							width="100%"
							object-fit="cover"
							sm-height="220px"
							lg-height="200px"
							md-height="350px"
							srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0011%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A45.074Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0011%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A45.074Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0011%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A45.074Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0011%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A45.074Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0011%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A45.074Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0011%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A45.074Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0011%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A45.074Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Hr
							min-height="10px"
							margin="0px 0px 10px 0px"
							border-color="--color-darkL1"
							width="40px"
							border-width="2px 0 0 0"
						/>
						<Text margin="0px 0px 15px 0px" font="--headline4">
							Тихая зона для спокойного отдыха{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image
						src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0018%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05:43:21.326Z"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						object-fit="cover"
						sm-height="220px"
						height="600px"
						lg-height="400px"
						md-width="100%"
						md-height="450px"
						srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0018%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A21.326Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0018%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A21.326Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0018%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A21.326Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0018%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A21.326Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0018%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A21.326Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0018%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A21.326Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/IMG-20250602-WA0018%20%28%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9%29.jpg?v=2025-06-04T05%3A43%3A21.326Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Hr
						min-height="10px"
						margin="0px 0px 10px 0px"
						border-color="--color-darkL1"
						width="40px"
						border-width="2px 0 0 0"
					/>
					<Text margin="0px 0px 15px 0px" font="--headline4">
						Отличное место для расслабления и проведения времени на свежем воздухе.{"\n\n\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="#000000">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				align-items="center"
				display="flex"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--dark">
					ЦУМ
				</Text>
				<Text margin="0px 0px 0px 0px" font="--headline4" color="--greyD2" text-align="center">
					7,8 км, 17 мин{" \n\n"}
				</Text>
			</Box>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--dark">
					Горы
				</Text>
				<Text margin="0px 0px 0px 0px" font="--headline4" color="--greyD2" text-align="center">
					10 км, 22 мин{"\n\n"}
				</Text>
			</Box>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--dark">
					Джума
				</Text>
				<Text margin="0px 0px 0px 0px" font="--headline4" color="--greyD2" text-align="center">
					7,5 км, 16 мин{" \n\n"}
				</Text>
			</Box>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--dark">
					Море
				</Text>
				<Text margin="0px 0px 0px 0px" font="--headline4" color="--greyD2" text-align="center">
					9,4 км, 19 мин{" \n\n"}
				</Text>
			</Box>
		</Section>
		<Section
			padding="80px 0 80px 0"
			background="#1e1e1e"
			lg-display="flex"
			lg-flex-direction="row"
			id="docs"
			quarkly-title="docs"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" lg-justify-content="center" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 33px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="#ffffff"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Документы и строительство
				</Text>
			</Box>
			<Box
				display="grid"
				flex-wrap="wrap"
				width="100%"
				align-items="stretch"
				justify-content="center"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				md-grid-template-columns="1fr"
				justify-items="center"
				lg-display="flex"
				lg-width="60%"
				lg-align-self="auto"
				lg-align-items="stretch"
				lg-justify-content="center"
				sm-width="100%"
				md-width="100%"
			>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					lg-padding="48px 35px 56px 35px"
				>
					<Text margin="0px 0px 24px 0px" font="--headline3" text-align="center">
						Этапы строительства
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--headline4"
						flex="1 1 auto"
					>
						Нажмите на кнопку снизу для просмотра  видео со строительной площадки
					</Text>
					<Link
						href="https://disk.yandex.ru/d/ScMaFOTAgOPmAw"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-secondary"
						lg-padding="12px 20px 12px 20px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
						target="_blank"
					>
						Посмотреть видео
					</Link>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					lg-padding="48px 35px 56px 35px"
				>
					<Text margin="0px 0px 24px 0px" font="--headline3" text-align="center">
						Разрешение на строительство
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--headline4"
						flex="1 1 auto"
					>
						Нажмите на кнопку снизу для просмотра  всех документов
						<br />
						на стройку
					</Text>
					<Link
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-secondary"
						lg-padding="12px 20px 12px 20px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
						href="https://disk.yandex.ru/d/gYyeTh8Pk6Klwg"
						target="_blank"
					>
						Посмотреть документы
					</Link>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					lg-padding="48px 35px 56px 35px"
				>
					<Text margin="0px 0px 24px 0px" font="--headline3" text-align="center">
						Проект и планировки
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--headline4"
						flex="1 1 auto"
					>
						Нажмите на кнопку снизу для просмотра  проекта в
						<br />
						{" "}PDF формате
					</Text>
					<Link
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-secondary"
						lg-padding="12px 20px 12px 20px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
						href="https://disk.yandex.ru/i/M-HOoPdrp_sHVg"
						target="_blank"
					>
						Посмотреть проект
					</Link>
				</Box>
			</Box>
		</Section>
		<Section background="--color-darkL1" padding="80px 0 80px 0" id="contacts" quarkly-title="Contacts">
			<Override
				slot="SectionContent"
				display="flex"
				flex-direction="row"
				max-width="100%"
				lg-flex-direction="column"
				lg-align-items="center"
				lg-width="100%"
			/>
			<Image
				src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/clipboard-image-1749014777.webp?v=2025-06-04T05:27:05.375Z"
				display="inline-flex"
				width="50%"
				lg-width="100%"
				loading="lazy"
				alt="2 кита"
				title="2 кита"
				border-radius="80px"
				srcSet="https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/clipboard-image-1749014777.webp?v=2025-06-04T05%3A27%3A05.375Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/clipboard-image-1749014777.webp?v=2025-06-04T05%3A27%3A05.375Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/clipboard-image-1749014777.webp?v=2025-06-04T05%3A27%3A05.375Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/clipboard-image-1749014777.webp?v=2025-06-04T05%3A27%3A05.375Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/clipboard-image-1749014777.webp?v=2025-06-04T05%3A27%3A05.375Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/clipboard-image-1749014777.webp?v=2025-06-04T05%3A27%3A05.375Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64624544820441001fb0b59f/images/clipboard-image-1749014777.webp?v=2025-06-04T05%3A27%3A05.375Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
				width="50%"
				lg-align-content="flex-start"
				lg-margin="96px 0px 0px 0px"
				lg-width="80%"
			>
				<Text
					margin="0px 0px 60px 0px"
					font="--headline1"
					color="--light"
					text-align="center"
					sm-font="normal 700 62px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					width="500px"
				>
					Контакты
					<br />
					для связи
				</Text>
				<Text
					margin="0px 0px 48px 0px"
					font="--headline3"
					color="--light"
					text-align="center"
					display="block"
					width="350px"
				>
					<Link href="tel:+79286775522" color="#fafafa" border-color="#5959ff" link-color="#ffffff">
						Позвонить
						<br />
						+7 928 677-55-22
					</Link>
				</Text>
				<Text
					margin="0px 0px 24px 0px"
					font="--headline3"
					color="--light"
					text-align="center"
					width="500px"
				>
					<Link
						href="https://yandex.com/maps/-/CHGGUO0y"
						md-color="#ffffff"
						md-hover-color="#0c36ea"
						target="_blank"
						lg-color="#ffffff"
						color="--light"
						sm-font="--headline4"
					>
						Посмотреть на карте
						<br />
						г. Махачкала
						<br />
						ул. Даганова 139
					</Link>
				</Text>
				<Box min-width="100px" min-height="100px" display="flex">
					<Button
						top="871px"
						left="324px"
						z-index="2"
						href="https://t.me/+79882200199"
						bottom="2750.999984741211px"
						height="50px"
						right="1402.310015258789px"
						width="150px"
						overflow-x="visible"
						overflow-y="visible"
						position="static"
						display="flex"
						align-items="center"
						margin="32px 24px 16px 0px"
						border-radius="40px"
						target="_blank"
						type="link"
					>
						<Icon category="fa" icon={FaTelegram} size="32px" margin="0px 8px 0px 0px" />
						<Span text-align="center" position="static" display="grid" flex="1 1 0%">
							Telegram
						</Span>
					</Button>
					<Button
						top="871px"
						left="324px"
						z-index="2"
						href="https://wa.me/79286775522"
						bottom="2750.999984741211px"
						right="1402.310015258789px"
						overflow-x="visible"
						overflow-y="visible"
						position="static"
						display="flex"
						width="150px"
						height="50px"
						align-items="center"
						border-radius="40px"
						margin="32px 0px 0px 0px"
						disabled={false}
						background="#00cc0f"
						target="_blank"
						type="link"
					>
						<Icon category="fa" icon={FaWhatsapp} size="32px" margin="0px 8px 0px 0px" />
						<Span
							text-align="center"
							position="static"
							display="grid"
							flex="1 1 0%"
							as="span"
						>
							Whatsapp
						</Span>
					</Button>
				</Box>
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
			>
				<Strong
					sm-text-align="center"
					sm-font="--headline4"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					ЖК "Московский" -  
Идеальная Жизнь Начинается Здесь!{" "}
				</Strong>
			</Text>
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