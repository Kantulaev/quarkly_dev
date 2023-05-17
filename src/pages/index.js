import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Image, Box, Section, Icon, Span, Button, Hr, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { FaTelegram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
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
						font="--headline2"
						lg-font="--headline3"
					>
						ЖК "2 КИТА"
					</Strong>
				</Text>
				<Image src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/logo_w.jpg?v=2023-05-16T07:06:30.948Z" display="block" height="100px" />
				<Box
					flex="0 1 auto"
					align-self="auto"
					display="flex"
					height="auto"
					order="1"
					align-items="center"
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
					sm-font="--headline1"
					md-text-align="left"
					sm-align-self="flex-start"
				>
					Элитный{" "}
					<br />
					жилой комплекс
					<br />
					у берега моря
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--darkL1"
					font="--headline3"
					lg-text-align="center"
					md-text-align="left"
					md-align-self="flex-start"
				>
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
				<Image
					src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/img957.webp?v=2023-05-17T05:35:34.295Z"
					border-radius="24px"
					object-fit="cover"
					width="100%"
					height="100%"
					grid-column="1 / span 1"
					grid-row="1 / span 2"
					display="inline-block"
					loading="lazy"
				/>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="#e5e5e5">
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
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					padding="0px 16px 0px 0px"
				>
					Полностью
					<br />
					монолитный
					<br />
					дом
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
				>
					Мечтаете о комфортном и безопасном жилье для всей семьи?{" "}
					<br />
					Перед вами новый жилой комплекс, который сочетает в себе надежность монолитного дома, близость к детскому саду и особый шарм местных горячих источников!
				</Text>
			</Box>
			<Image
				src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/img948.webp?v=2023-05-17T05:35:34.256Z"
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
			/>
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
				sm-height="auto"
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
					lg-margin="0px 0px 48px 0px"
					sm-margin="0px 0px 24px 0px"
					md-font="normal 800 60px/1.2 &quot;Manrope&quot;, sans-serif"
				>
					Удобное расположение
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
				lg-width="100%"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				lg-justify-content="flex-start"
				lg-padding="0px 0px 0px 0px"
				padding="0 0px 0px 32px"
				margin="32px 0px 0px 0px"
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
						src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/photo-2021-01-25-09-06-24-1.webp?v=2023-05-17T05:35:34.244Z"
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
						lg-text-align="left"
						display="flex"
						align-items="flex-start"
						md-text-align="left"
						lg-font="--headline2"
					>
						Новый{" "}
						<br />
						детский сад
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--darkL2"
						font="--lead"
						lg-text-align="left"
						display="flex"
						align-items="flex-start"
						lg-font="--headline4"
					>
						Современный инфраструктура,{" "}
						<br />
						где созданы идеальные условия{" "}
						<br />
						для развития малышей..
						<br />
						Тут есть прекрасно оборудованные игровые зоны, где дети могут играть и заниматься под руководством опытных педагогов.{" "}
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				flex-direction="column-reverse"
				justify-content="flex-start"
				align-items="flex-start"
				lg-align-items="flex-start"
				lg-width="100%"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				lg-justify-content="flex-start"
				lg-padding="0px 0px 0px 0px"
				order="0"
				width="40%"
				align-content="flex-start"
				margin="0px 0px 384px 0px"
				lg-margin="0px 0px 0 0px"
			>
				<Box
					width="80%"
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
					lg-padding="0px 0px 75% 0px"
					sm-margin="0px 0px 24px 0px"
					sm-width="100%"
					sm-padding="0px 0px 135% 0px"
					height="auto"
					lg-margin="0px 32px 34px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/5-3-1.webp?v=2023-05-17T05:35:34.249Z"
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
						lg-text-align="left"
						display="flex"
						align-items="flex-start"
						md-text-align="left"
						lg-font="--headline2"
					>
						Горячие источники
					</Text>
					<Text
						margin="0px 0px 32px 0px"
						color="--darkL2"
						font="--lead"
						lg-text-align="left"
						display="flex"
						align-items="flex-start"
						lg-font="--headline4"
					>
						В пешей доступности  находятся чудесные горячие источники и  самые полезные минеральные воды{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				width="45%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-align-items="flex-start"
				lg-width="100%"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				lg-justify-content="flex-start"
				lg-padding="0px 0px 0px 0px"
				order="0"
				margin="256px 0px 0px 144px"
				lg-margin="32px 0px 0px 0"
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
						src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/izberbash-1.webp?v=2023-05-17T05:35:34.250Z"
						object-fit="cover"
						position="absolute"
						display="block"
						width="100%"
						top={0}
						left={0}
						right={0}
						bottom={0}
						min-height="100%"
						object-position="60%"
					/>
				</Box>
				<Box lg-width="40%" sm-width="100%">
					<Text
						margin="0px 0px 12px 0px"
						color="--dark"
						font="--headline3"
						lg-text-align="left"
						display="flex"
						align-items="flex-start"
						md-text-align="left"
						lg-font="--headline2"
					>
						Городской пляж
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--darkL2"
						font="--lead"
						lg-text-align="left"
						display="flex"
						align-items="flex-start"
						lg-font="--headline4"
					>
						Буквально в 2 минутах располагается
						<br />
						{" "}городской пляж г. Избербаш.
						<br />
						Приятный песок и теплая вода - всегда рядом.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="#e5e5e5">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
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
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					padding="0px 16px 0px 0px"
					text-align="right"
				>
					Современная
					<br />
					среда
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
				>
					Центральный двор с возможностью{" "}
					<br />
					провести время на свежем воздухе.
					<br />
					Подземная парковка для вас и гостей.
					<br />
					В новом жилом комплексе действительно подумали{" "}
					<br />
					о комфорте и удобстве жильцов.
				</Text>
			</Box>
			<Image
				src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/img973.webp?v=2023-05-17T05:35:34.254Z"
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
			/>
		</Section>
		<Section padding="120px 0 130px 0" lg-padding="80px 0 90px 0" quarkly-title="Stages/Steps-3" background="#ffffff">
			<Text
				margin="0px 0px 80px 0px"
				font="--headline2"
				color="--darkL1"
				border-color="--color-dark"
				text-align="center"
				lg-margin="0px 0px 50px 0px"
			>
				То, что вам действительно нужно
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
							font="--headline4"
							text-align="center"
						>
							Все в одном месте
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="--lead"
							color="#65696d"
							text-align="center"
							border-color="#7a7c7f"
							md-border-color="--color-darkL2"
							md-color="--darkL2"
						>
							Коммерческий этаж этого комплекса - настоящий рай для любителей шоппинга и вкусной еды. Здесь вы найдете все, что нужно для удобства жизни и деловой деятельности - магазины, кафе, прачечную, дом быта, ателье и многое другое.
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
							font="--headline4"
							text-align="center"
						>
							Подземная парковка
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="--lead"
							color="#65696d"
							text-align="center"
							border-color="#7a7c7f"
							md-color="--darkL2"
						>
							{" "}Вы можете быть уверены, что ваш автомобиль всегда будет находиться в безопасности и удобство парковки не заставит вас мучиться.
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
							font="--headline4"
							text-align="center"
						>
							Комфортная среда
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="--lead"
							color="#65696d"
							text-align="center"
							border-color="#7a7c7f"
							md-color="--darkL2"
						>
							При этом жильцы получают самый высокий уровень комфорта и безопасности. В каждом подъезде есть по 2 лифта, чтобы избежать постоянных очередей и неудобств. А центральный благоустроенный двор с возможностью провести время на свежем воздухе - это просто здорово!
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			padding="80px 0 80px 0"
			margin="0px 0px 0px 0px"
			background="--color-darkL1"
			quarkly-title="Rassrochka"
			id="rasrochka"
		>
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
						<Text margin="0px 0px 16px 0px" color="#ffffff" font="--lead" sm-font="--headline4">
							Рассрочка на 3 года.{" "}
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
							30% - предоплата{" "}
						</Text>
					</Box>
					<Box padding="0px 0px 0px 104px" sm-padding="0px 0px 0px 64px">
						<Text margin="0px 0px 16px 0px" color="#ffffff" font="--lead" sm-font="--headline4">
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
						<Text margin="0px 0px 16px 0px" color="#ffffff" font="--lead" sm-font="--headline4">
							Цена 40 тыс за кв.м.
						</Text>
					</Box>
				</Box>
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
						href="https://disk.yandex.ru/d/SzLh3VJbUoSs9Q"
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
						Нажмите на кнопку снизу для просмотра  всех документов{" "}
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
						href="https://disk.yandex.ru/d/VpCIxbUVzwVjDA"
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
						href="https://disk.yandex.ru/i/aqIuydVGBpvJPg"
						target="_blank"
					>
						Посмотреть проект
					</Link>
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
					Контакты
					<br />
					для связи
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
					sm-font="--lead"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					ЖК "2 Кита" - Квартиры у берега моря. Рассрочка на 3 года.
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