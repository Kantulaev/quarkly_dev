import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Icon, Span, Button, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
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
			<meta property={"og:image"} content={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/img957.webp?v=2023-05-17T05:35:34.295Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/favicon-32x32.png?v=2023-05-16T06:41:53.296Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310.png?v=2023-05-16T06:42:15.248Z"} />
			<meta name={"msapplication-TileColor"} content={"#0429ff"} />
		</Helmet>
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
				src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-05-18%20045002%20%281%29.png?v=2023-05-17T22:51:10.370Z"
				display="inline-flex"
				width="50%"
				lg-width="100%"
				loading="lazy"
				alt="2 кита"
				title="2 кита"
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
						href="https://yandex.ru/maps/-/CCUk70xXsC"
						md-color="#ffffff"
						md-hover-color="#0c36ea"
						target="_blank"
						lg-color="#ffffff"
						color="--light"
					>
						Посмотреть на карте
						<br />
						г. Избербаш
						<br />
						О. А. Межлумова 11/1
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
						href="https://wa.me/79882200199"
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