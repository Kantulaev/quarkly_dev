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
				Элитный ЖК  "2 КИТА" г. Избербаш
			</title>
			<meta name={"description"} content={"Элитный ЖК на берегу моря. Рядом горячие источники, аквапарк, новый детский сад. Рассрочка на 3 года."} />
			<meta property={"og:title"} content={"Элитный ЖК  \"2 КИТА\" г. Избербаш"} />
			<meta property={"og:description"} content={"Элитный ЖК на берегу моря. Рядом горячие источники, аквапарк, новый детский сад. Рассрочка на 3 года."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/img957.webp?v=2023-05-17T05:35:34.295Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/favicon-32x32.png?v=2023-05-16T06:41:53.296Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/apple-icon-152x152.png?v=2023-05-16T06:42:04.713Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/64624544820441001fb0b59f/images/ms-icon-310x310.png?v=2023-05-16T06:42:15.248Z"} />
			<meta name={"msapplication-TileColor"} content={"#0429ff"} />
		</Helmet>
		<Section quarkly-title="Header" position="static">
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
						<Link href="/" color="#000000" border-color="#ffffff" link-text-decoration-line="initial">
							ЖК "2 КИТА"
						</Link>
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
					Элитный
					<br />
					жилой комплекс
					<br />
					на берегу моря
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
							200м
						</Text>
						<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead" lg-text-align="center">
							До пляжа
						</Text>
					</Box>
					<Box display="flex" flex-direction="column" margin="0px 40px 0px 0px">
						<Text margin="0px 0px 8px 0px" font="--headline2" sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif" sm-text-align="center">
							300м
						</Text>
						<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead" lg-text-align="center">
							До аквапарка "Океан"
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
					src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/img957.webp?v=2023-05-17T05:35:34.295Z"
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
				/>
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
					Мечтаете о комфортном и безопасном жилье для всей семьи?
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
				loading="lazy"
				alt="жк 2 кита избербаш"
				title="жк 2 кита избербаш"
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
					200м от моря.
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
						alt="жк 2 кита избербаш"
						title="жк 2 кита избербаш"
						loading="lazy"
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
						Новый
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
						Современный инфраструктура,
						<br />
						где созданы идеальные условия
						<br />
						для развития малышей..
						<br />
						Тут есть прекрасно оборудованные{" "}
						<br />
						игровые зоны, где дети могут играть{" "}
						<br />
						и заниматьсяпод руководством
						<br />
						{" "}опытных педагогов.
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
						alt="жк 2 кита избербаш"
						loading="lazy"
						title="жк 2 кита избербаш"
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
						В пешей доступности  находятся чудесные горячие источники и  самые полезные минеральные воды
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
						alt="жк 2 кита избербаш"
						title="жк 2 кита избербаш"
						loading="lazy"
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
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-lightD1">
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
					Центральный двор с возможностью
					<br />
					провести время на свежем воздухе.
					<br />
					Подземная парковка для вас и гостей.
					<br />
					В новом жилом комплексе
					<br />
					{" "}действительно подумали
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
				alt="жк 2 кита избербаш"
				title="жк 2 кита избербаш"
				loading="lazy"
			/>
		</Section>
		<Section padding="65px 0 65px 0" sm-padding="60px 0 60px 0" quarkly-title="Images-2">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				margin="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				display="flex"
				justify-content="center"
				lg-width="100%"
				align-items="flex-start"
				lg-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				sm-margin="0px 0px 30px 0px"
				width="75%"
			>
				<Box
					height="auto"
					overflow-x="hidden"
					overflow-y="hidden"
					hover-transform="translateY(-10px)"
					padding="0px 0px 65% 0px"
					width="100%"
					position="relative"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					border-radius="80px"
				>
					<Image
						position="absolute"
						display="block"
						right={0}
						min-height="100%"
						bottom={0}
						src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/okean_ocean_1_linija_pljazh_10-_1_-_1_.webp?v=2023-05-17T21:16:07.513Z"
						object-fit="none"
						width="100%"
						top={0}
						left={0}
						loading="lazy"
						alt="аквапарк"
						title="аквапарк"
						border-radius="80px"
					/>
				</Box>
			</Box>
			<Box
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				lg-order="1"
				justify-content="space-between"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				display="flex"
				width="25%"
				flex-direction="column"
				align-items="flex-start"
				lg-width="100%"
			>
				<Text
					margin="0px 0px 40px 0px"
					color="--darkL2"
					font="--headline4"
					lg-text-align="center"
					md-text-align="left"
				>
					В 300м. от дома находится популярный среди туристов, а также местных жителей
					<br />
					<Span
						font-weight="normal"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						font="900 28px/36.4px Manrope, sans-serif"
					>
						аквапарк "Океан"
					</Span>
				</Text>
				<Box
					height="243px"
					overflow-x="hidden"
					position="relative"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					width="243px"
					overflow-y="hidden"
					border-radius="100%"
				>
					<Image
						right={0}
						bottom={0}
						min-height="100%"
						src="https://uploads.quarkly.io/64624544820441001fb0b59f/images/b105638217-izbarbash-hotel-gostinitsa-okean.webp?v=2023-05-17T02:23:18.374Z"
						object-fit="cover"
						width="100%"
						left={0}
						position="absolute"
						display="block"
						top={0}
						alt="аквапарк"
						title="аквапарк"
						loading="lazy"
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 40px 0" lg-padding="80px 0 90px 0" quarkly-title="Stages/Steps-3" background="--color-lightD1">
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
							Коммерческий этаж этого комплекса - настоящий рай для любителей шоппинга и вкусной еды. Здесь вы найдете все,
					что нужно для удобства жизни и деловой активности  - магазины, кафе, прачечную,
							<br />
							{" "}дом быта, ателье и многое другое.
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
							Подземная парковка и резервуар для воды
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="--lead"
							color="#65696d"
							text-align="center"
							border-color="#7a7c7f"
							md-color="--darkL2"
						>
							{" "}Вы можете быть уверены, что ваш автомобиль всегда будет находиться в безопасности и удобство парковки не
					заставит вас мучиться.
							<br />
							Резервуар для воды обеспечивает бесперебойный доступ к воде 24/7
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
							Благоустроенный двор с возможностью провести время на свежем воздухе без машин.
							<br />
							При этом жильцы получают самый высокий уровень комфорта и безопасности. 
В каждом подъезде есть по 2 лифта, чтобы избежать постоянных очередей и неудобств.{" "}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 0px 0px" color="--grey" font="--lead" md-margin="0px 0px 20px 0px">
					<Link href="https://glava.e-dag.ru/press/353/" color="--grey" target="_blank">
						Изучить подробнее
					</Link>
				</Text>
				<Text margin="0px 0px 0px 0px" color="--light" font="--headline2" md-margin="0px 0px 30px 0px">
					Каспийский туристический кластер{" "}
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 40px 0px" color="--light" font="--headline4">
					Создание туристско-рекреационной особой экономической зоны в Дагестане{" "}
				</Text>
				<Text margin="0px 0px 0px 0px" color="--light" font="--lead">
					"Создание особых экономических зон туристско-рекреационного типа на территории Дагестана является мощным
			механизмом поддержки бизнеса в сфере туризма. Сейчас вместе с Кавказ.РФ разрабатываем концепцию курорта с учетом
			интересов потенциальных резидентов и дальнейшего развития прибрежной зоны", - С. А. Меликов.
				</Text>
			</Box>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0" color="--dark">
			<Text as="h1" font="--headline1" margin="0 0 24px 0">
				Ответы на вопросы
			</Text>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0">
							Кто будет тут проживать?
						</Text>
						<Text as="p" font="--lead" margin="12px 0" color="--greyD2">
							Квартиры уже покупают люди со всех регионов России.
							<br />
							Основными на данный момент являются
							<br />
							{" "}Москва, Санкт-Петербург,
							<br />
							Республика Татарстан,
							<br />
							Республика Башкортостан.
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0 -12px 0">
							Какой тут
							<br />
							климат?
						</Text>
						<Text
							as="p"
							font="--lead"
							color="--greyD2"
							margin="12px 0px 12px 0px"
							flex="0 1 auto"
							padding="0 0px 0px 0px"
							display="block"
						>
							<br />
							В Избербаше преобладает сухой субтропический климат.
							<br />
							{"\n"}Благодаря морю и горной защите
							<br />
							зимы непродолжительные и мягкие, а{"  "}
							<br />
							лето и осень очень теплые и длительные.{" "}
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0">
							Будет ли регион развиваться?
						</Text>
						<Text as="p" font="--lead" margin="12px 0" color="--greyD2">
							Новый морской курорт, поддержанный Президентом РФ, будет расположен в районе Избербаша и Каякента и будет являться приоритетным для развития в регионе. Планируется создать всю необходимую пляжную инфраструктуру:{" "}
							<br />
							отели, яхт-клубы и многое другое.
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
							100% - предоплата
						</Text>
					</Box>
					<Box padding="0px 0px 0px 104px" sm-padding="0px 0px 0px 64px">
						<Text margin="0px 0px 16px 0px" color="#ffffff" font="--lead" sm-font="--headline4">
							Цена 40 тыс за кв.м.
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
							Остаток в течении 3-х лет.
							<br />
							Цена 45 тыс. за кв.м.
						</Text>
						<Text margin="0px 0px 0px 0px" color="--lightD2" font="--lead" />
					</Box>
				</Box>
				<Box display="flex" flex-direction="column">
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
							Рассрочка на 3 года.
							<br />
							Цена 50 тыс за кв.м.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="90px 0 100px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/blurred-premium-violet-color-abstract-wallpaper.jpg?v=2023-04-27T14:14:02.129Z) 0% 0% /cover repeat scroll padding-box" quarkly-title="Reviews-4">
			<Text
				margin="0px 0px 20px 0px"
				font="normal 500 20px/1.5 --fontFamily-sansHelvetica"
				color="--grey"
				lg-margin="0px 0px 20px 0px"
				text-align="center"
			>
				Отзывы с Яндекс Карты
			</Text>
			<Text margin="0px 0px 70px 0px" font="normal 600 46px/1.2 --fontFamily-sans" text-align="center" md-margin="0px 0px 50px 0px">
				Что люди говорят о регионе{" "}
			</Text>
			<Box min-width="100px" min-height="100px" display="flex" lg-flex-direction="column">
				<Box
					min-width="100px"
					min-height="100px"
					width="25%"
					lg-width="100%"
					lg-display="flex"
					md-flex-direction="column"
					flex-direction="column"
					lg-flex-direction="row"
				>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 25px 0px"
						sm-padding="20px 15px 20px 15px"
						margin="0px 5px 25px 0px"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
								Чистый пляж, прозрачная вода! Вдоль берега много разных отелей цены доступные если чего-то не хватает можно заказать вам сделают доставку. Вода на столько чистая аж видно рыбы даже ночью у берега. Можно с детьми, так как глубина от берега метров 20 идёшь а вода по пояс. Рекомендую всем!{"\n\n"}
							</Text>
						</Box>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
								Марат Расулов
							</Text>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 25px 0px"
						sm-padding="20px 15px 20px 15px"
						margin="0px 5px 25px 0px"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
								Рынок просто супер! Я заезжал специально купить овощи, в частности помидоры. Купил 2 ящика, примерно 23 кг, 70 руб за кг. В Москве 350 руб за кг дагестанских помидор. Взял огурчики, свежей клубнички немножко, аджика, капусту. В общем всего понемножку))) Рекомендую{"\n\n"}
							</Text>
						</Box>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
								Александр
							</Text>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 25px 0px"
						sm-padding="20px 15px 20px 15px"
						margin="0px 5px 25px 0px"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
								Отличный аквапарк. Хоть и маленький, но в нем есть всё для хорошего отдыха. Достаточное количество лежаков, абсолютно доступная цена, большое разнообразие еды на фудкорте, при чем не по цене почки, как обычно бывает в таких заведениях - не может не радовать!{"\n\n"}
							</Text>
						</Box>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
								Мария
							</Text>
						</Box>
					</Box>
				</Box>
				<Box min-width="100px" min-height="100px" width="50%" lg-width="100%">
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 0 10px 0"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 20px 25px 20px"
						display="flex"
						flex-direction="column"
						justify-content="space-between"
						lg-margin="0px 0 25px 0px"
						md-padding="20px 0 10px 0"
					>
						<Box min-width="100px" min-height="100px">
							<Text
								margin="0px 0px 28px 0px"
								font="normal 400 20px/1.5 --fontFamily-sansHelvetica"
								color="--darkL1"
								padding="0px 30px 0px 30px"
								md-padding="0px 20px 0px 20px"
								md-margin="0px 0px 25px 0px"
							>
								Избербаш. Пляжное место Дагестана. Здесь я познакомилась с Каспием.
Огромным, могучим и чертовски манящим. Городской пляж на то и городской, чтобы быть во всеобщей городской доступности. Особого мусора я не заметила, берег относительно чистый, море любимое прозрачное и тёплое. Огромным преимуществом этого места- плавный заход в воду без резких перепадов. В некоторых местах на столько плавный, что приходилось идти по воде пешком более 100 метров, прежде чем появлялась возможность нырнуть под воду, но это большой плюс для семей с детьми. Такой детский пляж. А какие там рифы...{" \n\n"}
							</Text>
						</Box>
						<Box
							min-width="100px"
							display="flex"
							justify-content="space-between"
							align-items="flex-start"
							padding="0px 30px 0px 30px"
							border-width="1px 0 0 0"
							border-style="solid"
							border-color="--color-lightD2"
							md-padding="0px 20px 0px 20px"
							md-min-width={0}
							md-min-height={0}
						>
							<Box min-width="100px" display="flex" align-items="center">
								<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
									Наталья
								</Text>
							</Box>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 0 10px 0"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 20px 25px 20px"
						display="flex"
						flex-direction="column"
						justify-content="space-between"
						lg-margin="0px 0 25px 0px"
						md-padding="20px 0 10px 0"
					>
						<Box min-width="100px" min-height="100px">
							<Text
								margin="0px 0px 28px 0px"
								font="normal 400 20px/1.5 --fontFamily-sansHelvetica"
								color="--darkL1"
								padding="0px 30px 0px 30px"
								md-padding="0px 20px 0px 20px"
								md-margin="0px 0px 25px 0px"
							>
								Превосходный рынок! Разные овощи, фрукты, зелень, ягоды. Всё по очень приятным ценам. Можно купить разнообразные свежие местные сладости. Есть рыба свежая, вяленая и копчёная. Домашняя молочка-очень вкусная и натуральная. Свежее мясо. Много орехов, чаи, сухофрукты, специи. Есть и безалкогольные напитки. Безопасно, но соблюдайте дресс код, уважайте традиции. Однозначно рекомендую.{"\n\n"}
							</Text>
						</Box>
						<Box
							min-width="100px"
							display="flex"
							justify-content="space-between"
							align-items="flex-start"
							padding="0px 30px 0px 30px"
							border-width="1px 0 0 0"
							border-style="solid"
							border-color="--color-lightD2"
							md-padding="0px 20px 0px 20px"
							md-min-width={0}
							md-min-height={0}
						>
							<Box min-width="100px" display="flex" align-items="center">
								<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
									Дарья
								</Text>
							</Box>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 0 10px 0"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 20px 25px 20px"
						display="flex"
						flex-direction="column"
						justify-content="space-between"
						lg-margin="0px 0 25px 0px"
						md-padding="20px 0 10px 0"
					>
						<Box min-width="100px" min-height="100px">
							<Text
								margin="0px 0px 28px 0px"
								font="normal 400 20px/1.5 --fontFamily-sansHelvetica"
								color="--darkL1"
								padding="0px 30px 0px 30px"
								md-padding="0px 20px 0px 20px"
								md-margin="0px 0px 25px 0px"
							>
								(О горячих источниках) Я в восторге!! Очень понравилось! Вода горячая, не пахнет сероводородом! Можно даже душ не принимать после. Вода бурлит)) Отдельные входы и зоны для мужчин и женщин. Есть место для переодевания.
Обустроено отлично, бесплатно.{"\n\n"}
							</Text>
						</Box>
						<Box
							min-width="100px"
							display="flex"
							justify-content="space-between"
							align-items="flex-start"
							padding="0px 30px 0px 30px"
							border-width="1px 0 0 0"
							border-style="solid"
							border-color="--color-lightD2"
							md-padding="0px 20px 0px 20px"
							md-min-width={0}
							md-min-height={0}
						>
							<Box min-width="100px" display="flex" align-items="center">
								<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
									Маша
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="25%"
					lg-width="100%"
					lg-display="flex"
					md-flex-direction="column"
				>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 0 25px 5px"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 0 0px"
						sm-padding="20px 15px 20px 15px"
						md-margin="0 0 25px 0"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
								Лучший пляж Каспийского моря! Широкая полоса, желтый песок, чистота, море прозрачное, голубое, мелко, приятно купаться. Хорошие переодевалки. Кафе прямо на пляже, немного дороговатое, но всегда есть места, романтично, особенно на столиках на песке, прямо перед морем. Рядом есть опция кинотеатра на открытом возлаже, транслируют новые фильмы.{"\n\n"}
							</Text>
						</Box>
						<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
							Ирина Варюхина
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 0 25px 5px"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 0 0px"
						sm-padding="20px 15px 20px 15px"
						md-margin="0 0 25px 0"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
								Пляж расположен в удобном черте города. Уровень воды оптимальный для семей с детьми, на пляже разные развлекательные сервисы, открытый ресторан с очень вкусной едой, на пляже также продаются кукуруза, сладкая вата, попкорн и другое...{"\n\n"}
							</Text>
						</Box>
						<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
							Амина
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 0 25px 5px"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 0 0px"
						sm-padding="20px 15px 20px 15px"
						md-margin="0 0 25px 0"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
								Маленький, но очень уютный аквапарк. Лягушатник для малышей и два бассейна побольше для более взрослых, куда ведёт спуск с горок. Есть несколько особо экстремальных горок, на две из которых пускают только с ватрушками. Прикольная горка со спуском через воронку в отдельный водоём.{" "}
								<br />
								На каждой горке по спасателю.{"\n\n"}
							</Text>
						</Box>
						<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
							Роман
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
				border-radius="80px"
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
				<LinkBox href="https://wa.me/79882200199" target="_blank">
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