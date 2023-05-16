import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Image, Box, Section, Icon, Span, Button, Hr, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
import { FaTelegram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { BsSquare, BsBrightnessLow, BsColumnsGutters, BsTriangle } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				ЖК "2 КИТА" - Избербаш
			</title>
			<meta name={"description"} content={"Квартиры у берега моря. Около Аквапарка. Рассрочка на 3 года."} />
			<meta property={"og:title"} content={"ЖК \"2 КИТА\" - Избербаш"} />
			<meta property={"og:description"} content={"Квартиры у берега моря. Около Аквапарка. Рассрочка на 3 года."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/photo_2023-05-14_21-34-09.jpg?v=2023-05-16T06:40:36.251Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/favicon-32x32.png?v=2023-05-16T06:41:53.296Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310.png?v=2023-05-16T06:42:15.248Z"} />
			<meta name={"msapplication-TileColor"} content={"#0429ff"} />
		</Helmet>
		<Section quarkly-title="Header">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--headline4">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						ЖК "2 КИТА"
					</Strong>
				</Text>
				<Image src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/logo_w.jpg?v=2023-05-16T07:06:30.948Z" display="block" height="100px" />
				<Menu
					display="flex"
					justify-content="center"
					font="--headline4"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
					<Override slot="link-index">
						Рассрочка
					</Override>
					<Override slot="link-contacts" href="/index#contacts">
						Контакты
					</Override>
				</Menu>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
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
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Квартиры у берега моря
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL1" font="--headline3" lg-text-align="center">
					Рассрочка на 3 года{" "}
				</Text>
				<Box display="flex" lg-width="100%" lg-justify-content="space-between" sm-margin="0px 0px 20px 0px">
					<Box display="flex" flex-direction="column" margin="0px 40px 0px 0px">
						<Text margin="0px 0px 8px 0px" font="--headline2" sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif" sm-text-align="center">
							1540
						</Text>
						<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead" lg-text-align="center">
							Квартир
						</Text>
					</Box>
					<Box display="flex" flex-direction="column" margin="0px 40px 0px 0px">
						<Text margin="0px 0px 8px 0px" font="--headline2" sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif" sm-text-align="center">
							200м
						</Text>
						<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead" lg-text-align="center">
							До пляжа
						</Text>
					</Box>
					<Box display="flex" flex-direction="column">
						<Text margin="0px 0px 8px 0px" font="--headline2" sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif" sm-text-align="center">
							800м
						</Text>
						<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead" lg-text-align="center">
							До горячих источников
						</Text>
					</Box>
				</Box>
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
					>
						<Icon category="fa" icon={FaWhatsapp} size="32px" margin="0px 8px 0px 0px" />
						<Span text-align="center" position="static" display="grid" flex="1 1 0%">
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
				<Box
					display="grid"
					grid-template-rows="repeat(3, 180px)"
					grid-template-columns="repeat(2, 1fr)"
					grid-gap="32px"
					max-width="600px"
					md-grid-template-rows="repeat(3, 25vw)"
					sm-grid-gap="16px"
				>
					<Image
						src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/outside2.jpg?v=2023-05-16T07:12:20.038Z"
						border-radius="24px"
						object-fit="cover"
						width="100%"
						height="100%"
						grid-column="1 / span 1"
						grid-row="1 / span 2"
					/>
					<Image
						src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/outside1.jpg?v=2023-05-16T07:12:32.587Z"
						border-radius="24px"
						object-fit="cover"
						width="100%"
						height="100%"
						grid-column="2 / span 1"
						grid-row="2 / span 2"
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Box
				padding="80px 72px 80px 72px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Image%20%289%29.png?v=2021-08-26T14:56:08.732Z) 0% 0% /cover no-repeat scroll padding-box"
				border-radius="24px"
				margin="0px 0px 64px 0px"
				sm-padding="60px 36px 60px 36px"
			>
				<Box
					width="60%"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-align-items="center"
					md-justify-content="center"
					md-text-align="center"
					lg-width="100%"
				>
					<Text
						margin="0px 0px 16px 0px"
						font="--headline2"
						color="--dark"
						md-text-align="center"
						sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						Setting up a workplace in the office and at home
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--greyD3" md-text-align="center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua
					</Text>
				</Box>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="36px 4%"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-gap="12px"
			>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						1
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 30px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						2
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						3
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 0px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						4
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-content="flex-start"
				flex-wrap="wrap"
				align-items="center"
				overflow-x="visible"
				overflow-y="visible"
			/>
			<Box
				display="flex"
				width="60%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-align-items="center"
				lg-margin="0px 0px 20px 0px"
				padding="0px 10% 0px 0px"
				lg-width="100%"
				md-margin="0px 0px 30px 0px"
				lg-padding="0px 0px 0px 0px"
				height="480px"
			>
				<Text
					margin="0px 0px 25px 0px"
					color="--grey"
					font="normal 500 12px/14px --fontFamily-googleSourceSansPro"
					lg-text-align="center"
					display="flex"
					align-items="flex-start"
					text-transform="uppercase"
					letter-spacing="3px"
					md-margin="0px 0px 0px 0px"
				>
					У берега моря
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					padding="0px 16px 0px 0px"
					lg-margin="0px 0px 48px 0px"
					sm-margin="0px 0px 24px 0px"
				>
					Прекрасное местоположение
				</Text>
				<Text
					margin="48px 0px 0px 0px"
					color="--dark"
					font="--headline2"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					padding="0px 16px 0px 0px"
					lg-margin="0px 0px 48px 0px"
					sm-margin="0px 0px 24px 0px"
				>
					200м от моря.{" "}
					<br />
					Возле городского пляжа
				</Text>
			</Box>
			<Box
				display="flex"
				width="40%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-align-items="flex-start"
				padding="0px 0px 32px 16px"
				lg-width="100%"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				lg-justify-content="flex-start"
				lg-padding="0px 0px 0px 0px"
			>
				<Box
					width="80%"
					height="auto"
					overflow-x="hidden"
					overflow-y="hidden"
					position="relative"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					padding="0px 0px 100% 0px"
					border-radius="24px"
					margin="0px 0px 34px 0px"
					lg-width="50%"
					lg-margin="0px 32px 34px 0px"
					lg-padding="0px 0px 75% 0px"
					sm-margin="0px 0px 24px 0px"
					sm-width="100%"
					sm-padding="0px 0px 135% 0px"
				>
					<Image
						src="https://images.unsplash.com/photo-1596523965234-f45cda35d1e6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
						object-fit="cover"
						position="absolute"
						display="block"
						width="100%"
						top={0}
						left={0}
						right={0}
						bottom={0}
						min-height="100%"
					/>
				</Box>
				<Box lg-width="40%" sm-width="100%">
					<Text
						margin="0px 0px 12px 0px"
						color="--dark"
						font="--headline3"
						lg-text-align="center"
						display="flex"
						align-items="flex-start"
					>
						Paving Slabs
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--darkL2"
						font="--base"
						lg-text-align="left"
						display="flex"
						align-items="flex-start"
					>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-start"
				align-items="center"
				overflow-x="hidden"
				overflow-y="hidden"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-justify-content="flex-start"
				lg-margin="40px 0px 0px 0px"
				sm-flex-direction="column"
				sm-justify-content="center"
				flex-direction="row"
				align-content="flex-start"
			>
				<Box
					width="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					position="relative"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					padding="0px 0px 20% 0px"
					border-radius="24px"
					lg-width="auto"
					lg-margin="0px 32px 34px 0px"
					margin="0px 32px 0px 0px"
					min-width="188px"
					min-height="188px"
					sm-margin="0px 32px 24px 0px"
				>
					<Image
						src="https://images.unsplash.com/photo-1546050680-d4305dcff705?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80"
						object-fit="cover"
						position="absolute"
						display="block"
						width="100%"
						top={0}
						left={0}
						right={0}
						bottom={0}
						min-height="100%"
					/>
				</Box>
				<Text
					margin="0px 0px 0px 0px"
					color="--darkL2"
					font="--base"
					lg-text-align="left"
					display="flex"
					align-items="flex-start"
					sm-text-align="left"
					lg-width="50%"
					sm-width="100%"
				>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" margin="0px 0px 0px 0px" background="--color-darkL1" quarkly-title="Rassrochka">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				flex-direction="column"
				margin="0px 0px 0px 0px"
				width="50%"
				padding="0px 40px 0px 15px"
				lg-padding="0px 0px 0px 0px"
				lg-width="100%"
				lg-margin="0px 0px 60px 0px"
			>
				<Text margin="0px 0px 24px 0px" color="#ffffff" font="--headline1" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
					Условия рассрочки
				</Text>
				<Text margin="0px 0px 0px 0px" color="--lightD2" font="--headline3">
					Три варианта оплаты.
					<br />
					На ваш выбор.
				</Text>
			</Box>
			<Box
				display="flex"
				flex-direction="column"
				margin="0px 0px 0px 0px"
				width="50%"
				sm-margin="0px 0px 30px 0px"
				padding="0px 0px 0px 0px"
				lg-padding="0px 0px 0px 0px"
				lg-width="100%"
			>
				<Box display="flex" flex-direction="column" margin="0px 0px 48px 0px">
					<Box display="flex" align-items="center" margin="0px 0px 16px 0px">
						<Hr
							width="54px"
							margin="0px 50px 0px 0px"
							border-color="--color-lightD2"
							border-width="2px 0 0 0 "
							opacity="0.2"
							sm-margin="0px 20px 0px 0px"
							sm-width="44px"
						/>
						<Text margin="0px 0px 0px 0px" color="#ffffff" font="--headline2" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Без предоплаты
						</Text>
					</Box>
					<Box padding="0px 0px 0px 104px" sm-padding="0px 0px 0px 64px">
						<Text margin="0px 0px 16px 0px" color="#ffffff" font="--lead" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Рассрочка на 3года.{" "}
							<br />
							Цена 50 тыс за кв.м.
						</Text>
					</Box>
				</Box>
				<Box display="flex" flex-direction="column" margin="0px 0px 48px 0px">
					<Box display="flex" align-items="center" margin="0px 0px 16px 0px">
						<Hr
							width="54px"
							margin="0px 50px 0px 0px"
							border-color="--color-lightD2"
							border-width="2px 0 0 0 "
							opacity="0.2"
							sm-margin="0px 20px 0px 0px"
							sm-width="44px"
						/>
						<Text margin="0px 0px 0px 0px" color="#ffffff" font="--headline2" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							30% - предоплата.{" "}
						</Text>
					</Box>
					<Box padding="0px 0px 0px 104px" sm-padding="0px 0px 0px 64px">
						<Text margin="0px 0px 16px 0px" color="#ffffff" font="--lead" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Остаток в течении 3-х лет.{" "}
							<br />
							Цена 45 тыс. за кв.м.{"\n\n"}
						</Text>
						<Text margin="0px 0px 0px 0px" color="--lightD2" font="--lead" />
					</Box>
				</Box>
				<Box display="flex" flex-direction="column" margin="0px 0px 0px 0px">
					<Box display="flex" align-items="center" margin="0px 0px 16px 0px">
						<Hr
							width="54px"
							margin="0px 50px 0px 0px"
							border-color="--color-lightD2"
							border-width="2px 0 0 0 "
							opacity="0.2"
							sm-margin="0px 20px 0px 0px"
							sm-width="44px"
						/>
						<Text margin="0px 0px 0px 0px" color="#ffffff" font="--headline2" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							100% - предоплата
						</Text>
					</Box>
					<Box padding="0px 0px 0px 104px" sm-padding="0px 0px 0px 64px">
						<Text margin="0px 0px 16px 0px" color="#ffffff" font="--lead" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Цена 40 тыс за кв.м.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 90px 0" quarkly-title="Product-1">
			<Override slot="SectionContent" align-items="center" />
			<Text margin="0px 0px 20px 0px" text-align="center" font="normal 400 20px/1.5 --fontFamily-sans" color="#38aebd">
				WE ARE A COMMUNITY OF SWIMMERS
			</Text>
			<Text
				margin="0px 0px 60px 0px"
				font="normal 600 56px/1.2 --fontFamily-serifGaramond"
				width="50%"
				text-align="center"
				lg-width="70%"
				md-width="100%"
				md-margin="0px 0px 40px 0px"
			>
				So come on in, the water's great!
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				align-self="center"
				margin="0px 0px 70px 0px"
				sm-display="grid"
				sm-align-self="auto"
				sm-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-rows="repeat(2, 1fr)"
				sm-grid-gap="25px 30px"
				md-align-self="auto"
				md-margin="0px 0px 50px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					margin="0px 50px 0px 0px"
					sm-margin="0px 0 0px 0px"
					md-margin="0px 35px 0px 0px"
				>
					<Icon category="bs" icon={BsSquare} size="64px" margin="0px 0px 10px 0px" />
					<Text margin="0px 0px 0px 0px" font="normal 400 20px/1.5 --fontFamily-sans">
						RECTANGLE
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					margin="0px 50px 0px 0px"
					sm-margin="0px 0 0px 0px"
					md-margin="0px 35px 0px 0px"
				>
					<Icon category="bs" icon={BsBrightnessLow} size="64px" margin="0px 0px 10px 0px" />
					<Text margin="0px 0px 0px 0px" font="normal 400 20px/1.5 --fontFamily-sans">
						CLASSIC
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					margin="0px 50px 0px 0px"
					sm-margin="0px 0 0px 0px"
					md-margin="0px 35px 0px 0px"
				>
					<Icon category="bs" icon={BsColumnsGutters} size="64px" margin="0px 0px 10px 0px" />
					<Text margin="0px 0px 0px 0px" font="normal 400 20px/1.5 --fontFamily-sans">
						KIDNEY
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
				>
					<Icon category="bs" icon={BsTriangle} size="64px" margin="0px 0px 10px 0px" />
					<Text margin="0px 0px 0px 0px" font="normal 400 20px/1.5 --fontFamily-sans">
						CUSTOM
					</Text>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="auto"
				grid-gap="0 35px"
				md-grid-template-columns="1fr"
				md-grid-gap="40px 0"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
				>
					<Image src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/beautiful-landscape-outdoor-swimming-pool-hotel-resort-leisure.jpg?v=2023-04-27T20:47:17.816Z" display="block" max-width="100%" margin="0px 0px 25px 0px" />
					<Text margin="0px 0px 15px 0px" font="normal 600 28px/1.2 --fontFamily-serifGaramond" text-align="center">
						Splash Pool
					</Text>
					<Text margin="0px 0px 15px 0px" color="#89929c">
						DEPTH 3'-6' TO 7'
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						text-align="center"
						font="--base"
						padding="0px 35px 0px 35px"
						lg-padding="0px 0 0px 0"
					>
						Perfect place to relax after a swim or catch up with friends over snacks and drinks
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
				>
					<Image src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/light-ocean-white-relax-umbrella.jpg?v=2023-04-27T20:53:58.543Z" display="block" max-width="100%" margin="0px 0px 25px 0px" />
					<Text margin="0px 0px 15px 0px" font="normal 600 28px/1.2 --fontFamily-serifGaramond" text-align="center">
						Blue Horizon Pool
					</Text>
					<Text margin="0px 0px 15px 0px" color="#89929c">
						DEPTH 3'-6' TO 7'
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						text-align="center"
						font="--base"
						padding="0px 35px 0px 35px"
						lg-padding="0px 0 0px 0"
					>
						From pool parties to swimming lessons, there's always something fun happening at our club.
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
				>
					<Image src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/umbrella-chair.jpg?v=2023-04-27T20:54:14.081Z" display="block" max-width="100%" margin="0px 0px 25px 0px" />
					<Text margin="0px 0px 15px 0px" font="normal 600 28px/1.2 --fontFamily-serifGaramond" text-align="center">
						Summer Waves Pool
					</Text>
					<Text margin="0px 0px 15px 0px" color="#89929c">
						DEPTH 3'-6' TO 7'
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						text-align="center"
						font="--base"
						padding="0px 35px 0px 35px"
						lg-padding="0px 0 0px 0"
					>
						If you're feeling adventurous, our water slides offer a thrilling ride that will leave you wanting more.
					</Text>
				</Box>
			</Box>
		</Section>
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
				<Text margin="0px 0px 24px 0px" font="--headline3" color="--light" text-align="center">
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
				<Box min-width="100px" min-height="100px" display="flex">
					<LinkBox margin="0px 32px 0px 0px" href="https://t.me/+79882200199" target="_blank">
						<Icon category="fa" icon={FaTelegram} size="64px" color="--light" />
					</LinkBox>
					<LinkBox href="https://wa.me/79882200199" target="_blank">
						<Icon category="fa" icon={FaWhatsappSquare} size="64px" color="--light" />
					</LinkBox>
				</Box>
			</Box>
		</Section>
		<Section quarkly-title="Footer">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="center"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					<Strong>
						ЖК "2Кита" - Квартиры у берега моря. Рассрочка на 3 года.
					</Strong>
				</Text>
			</Box>
		</Section>
		<Section padding="120px 0 130px 0" lg-padding="80px 0 90px 0" quarkly-title="Stages/Steps-3">
			<Text
				margin="0px 0px 80px 0px"
				font="--headline2"
				color="--darkL1"
				border-color="--color-dark"
				text-align="center"
				lg-margin="0px 0px 50px 0px"
			>
				How We Work For You
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="1fr"
				md-grid-template-rows="auto"
				md-grid-gap={0}
				padding="0px 50px 0px 50px"
				lg-padding="0px 0 0px 0"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					lg-padding="0px 25px 26px 25px"
					flex-direction="column"
					align-items="center"
					padding="0px 30px 30px 30px"
					md-padding="0px 25px 34px 25px"
					sm-padding="0px 0 34px 0"
				>
					<Box
						min-width="50px"
						min-height="50px"
						background="--color-darkL1"
						display="flex"
						align-items="center"
						justify-content="center"
						width="50px"
						height="50px"
						border-radius="50%"
						margin="0px 0px 30px 0px"
						color="--darkL2"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							1
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 0">
						<Text
							margin="0px 0px 15px 0px"
							border-color="--color-light"
							color="--darkL1"
							font="normal 500 22px/1.2 --fontFamily-sans"
							text-align="center"
						>
							Proposal
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="normal 400 16px/1.5 --fontFamily-sansHelvetica"
							color="#65696d"
							text-align="center"
							border-color="#7a7c7f"
						>
							Once they understand your needs, they will create a proposal outlining the scope of work, timeline, and cost.
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					lg-padding="0px 25px 26px 25px"
					flex-direction="column"
					align-items="center"
					padding="0px 30px 30px 30px"
					md-padding="0px 25px 34px 25px"
					sm-padding="0px 0 34px 0"
				>
					<Box
						min-width="50px"
						min-height="50px"
						background="--color-darkL1"
						display="flex"
						align-items="center"
						justify-content="center"
						width="50px"
						height="50px"
						border-radius="50%"
						margin="0px 0px 30px 0px"
						color="--darkL2"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							2
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 0">
						<Text
							margin="0px 0px 15px 0px"
							border-color="--color-light"
							color="--darkL1"
							font="normal 500 22px/1.2 --fontFamily-sans"
							text-align="center"
						>
							Agreement
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="normal 400 16px/1.5 --fontFamily-sansHelvetica"
							color="#65696d"
							text-align="center"
							border-color="#7a7c7f"
						>
							If you agree to the proposal, you will sign a contract or agreement outlining the terms of the project.
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					lg-padding="0px 25px 26px 25px"
					flex-direction="column"
					align-items="center"
					padding="0px 30px 30px 30px"
					md-padding="0px 25px 0 25px"
					sm-padding="0px 0 0 0"
				>
					<Box
						min-width="50px"
						min-height="50px"
						background="--color-darkL1"
						display="flex"
						align-items="center"
						justify-content="center"
						width="50px"
						height="50px"
						border-radius="50%"
						margin="0px 0px 30px 0px"
						color="--darkL2"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							3
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 0">
						<Text
							margin="0px 0px 15px 0px"
							border-color="--color-light"
							color="--darkL1"
							font="normal 500 22px/1.2 --fontFamily-sans"
							text-align="center"
						>
							Execution
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="normal 400 16px/1.5 --fontFamily-sansHelvetica"
							color="#65696d"
							text-align="center"
							border-color="#7a7c7f"
						>
							The company will begin working on the project and keep you updated on progress.
						</Text>
					</Box>
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