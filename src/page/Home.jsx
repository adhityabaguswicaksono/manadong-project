import {
	Badge,
	Box,
	Button,
	Card,
	CardBody,
	Container,
	Grid,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import NavigationBar from '../components/NavigationBar';
import FooterBar from '../components/FooterBar';
import { NavLink } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const dataMenu = [
	{
		title: 'Ayam Rica',
		picture: 'public/assets/images/Ayam Rica.png',
		isNew: true,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		price: 'Rp40.000,-',
	},
	{
		title: 'Cumi Hitam',
		picture: 'public/assets/images/Cumi Hitam.png',
		isNew: false,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		price: 'Rp40.000,-',
	},
	{
		title: 'Cakalang Tinorasak',
		picture: 'public/assets/images/Cakalang Tinorasak.png',
		isNew: false,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		price: 'Rp40.000,-',
	},
	{
		title: 'Perkedel Jagung',
		picture: 'public/assets/images/Perkedel Jagung.png',
		isNew: false,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		price: 'Rp40.000,-',
	},
	{
		title: 'Ayam Woku',
		picture: 'public/assets/images/Ayam Woku.png',
		isNew: false,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		price: 'Rp40.000,-',
	},
	{
		title: 'Lauk Frozen',
		picture: 'public/assets/images/Lauk Frozen.png',
		isNew: false,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		price: 'Rp40.000,-',
	},
	{
		title: 'Cakalang Rabe',
		picture: 'public/assets/images/Cakalang Rabe.png',
		isNew: false,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		price: 'Rp40.000,-',
	},
];

const dataPromotion = [
	{
		picture: 'public/assets/images/Discount Picture.jpg',
		title: 'Buy 2 Get 1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		picture: 'public/assets/images/Discount Picture.jpg',
		title: 'Discount 20%',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		picture: 'public/assets/images/Discount Picture.jpg',
		title: 'Bundle Deal',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
];

const dataReviews = [
	{
		title: 'Adhitya',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Bagus',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Wicaksono',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Adhitya',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Bagus',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Wicaksono',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
];

const dataLocations = [
	{
		title: 'Senopati, Petogogan',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Kebon Jeruk / Tanjung Duren',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Food Plaza PIK',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: "Kuningan - D'Kanteen",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Bintaro, Thelapan Square',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Gading Serpong',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Cipete',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Menteng',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
];

export default function Home() {
	return (
		<>
			{/* Navigation Bar */}
			<NavigationBar />

			{/* Header Section */}
			<Box
				backgroundColor={'manadong-red.50'}
				position={'relative'}>
				<Container
					maxWidth={'container.xl'}
					paddingX={{ base: 0, md: 4 }}>
					<Grid
						gridAutoFlow={'dense'}
						minHeight={'500px'}
						gridTemplateColumns={{ base: '1fr', md: '250px 1fr' }}
						width={'100%'}
						gap={{ base: 4, lg: 12 }}>
						<Box
							display={{ base: 'block', md: 'none' }}
							backgroundImage={"url('/assets/images/HeaderImage.png')"}
							backgroundRepeat={'no-repeat'}
							backgroundPosition={'center'}
							backgroundSize={'cover'}
							width={{ base: '100%', md: 'calc(100dvw - 20rem)' }}
							maxW={'1000px'}
							height={{ base: '400px', md: '500px' }}
						/>
						<Box
							width={{ base: '100%', lg: 'fit-content' }}
							color={'black'}
							alignSelf={'center'}
							paddingBottom={{ base: 12, md: 0 }}
							paddingX={{ base: 4, md: 0 }}>
							<Heading
								color={'manadong-red.500'}
								paddingY={2}>
								Manadong
							</Heading>
							<Text>is Manado dish with a spicy and appetizing flavour.</Text>
							<Text
								paddingY={6}
								fontWeight={600}
								color={'manadong-red.500'}
								fontSize={'large'}>
								#NikmatnyaNggakPakeRibet
							</Text>
							<NavLink
								to={'/order-now'}
								end>
								<Button
									variant={'outline'}
									colorScheme="manadong-blue">
									Order Now
								</Button>
							</NavLink>
						</Box>
						<Box
							display={{ base: 'none', md: 'block' }}
							position={'absolute'}
							right={0}
							top={0}
							backgroundImage={"url('/assets/images/HeaderImage.png')"}
							backgroundRepeat={'no-repeat'}
							backgroundPosition={'center'}
							backgroundSize={'cover'}
							width={{ base: '100%', md: 'calc(100dvw - 20rem)' }}
							maxW={'1000px'}
							height={{ base: '400px', md: '500px' }}
						/>
					</Grid>
				</Container>
			</Box>

			{/* Our Menu Section */}
			<Container maxWidth={'container.xl'}>
				<Stack
					gap={8}
					// paddingX={6}
					paddingY={8}>
					<Box>
						<Heading
							color={'manadong-blue.500'}
							paddingY={2}>
							Our Menu
						</Heading>
						<Box
							height={1}
							width={'100px'}
							backgroundColor={'manadong-red.500'}
							borderRadius={2}></Box>
					</Box>

					<Grid
						templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
						gap={6}>
						{dataMenu.map((data) => (
							<ModalMenu
								key={data.title}
								data={data}
							/>
						))}
					</Grid>

					<Box
						display={'flex'}
						justifyContent={'center'}>
						<NavLink
							to={'/order-now'}
							end>
							<Button
								width={'fit-content'}
								variant={'outline'}
								colorScheme={'manadong-blue'}>
								Order Now
							</Button>
						</NavLink>
					</Box>
				</Stack>
			</Container>

			{/* Promotion Section */}
			<Box backgroundColor={'manadong-red.50'}>
				<Container maxWidth={'container.xl'}>
					<Grid
						gridTemplateColumns={{ base: '1fr', xl: '250px 1fr' }}
						marginTop={{ base: 2, lg: 0 }}
						paddingY={8}
						alignItems={'center'}>
						<Box>
							<Heading
								color={'manadong-blue.500'}
								paddingY={2}>
								Promotion
							</Heading>
							<Box
								height={1}
								width={'100px'}
								backgroundColor={'manadong-red.500'}
								borderRadius={2}></Box>
						</Box>

						<Box
							width={'100%'}
							display={'grid'}
							gridTemplateColumns={{
								base: 'repeat(2, 1fr)',
								md: 'repeat(3, 1fr)',
							}}
							gap={4}
							marginTop={{ base: 4, xl: 0 }}
							justifyContent={{ base: 'start', xl: 'end' }}>
							{dataPromotion.map((data) => (
								<Card key={data.title}>
									<CardBody>
										<Stack gap={4}>
											<Image
												src={data.picture}
												borderRadius="lg"
											/>
											<Text
												color={'manadong-blue.500'}
												fontSize={'x-large'}
												fontWeight={800}>
												{data.title}
											</Text>
											<Text>{data.description}</Text>
										</Stack>
									</CardBody>
								</Card>
							))}
						</Box>
					</Grid>
				</Container>
			</Box>

			{/* Reviews Section */}
			<Box backgroundColor={'manadong-blue.50'}>
				<Container
					maxWidth={'container.xl'}
					gap={8}
					paddingY={8}>
					<Box>
						<Heading
							color={'manadong-blue.500'}
							paddingY={2}>
							Reviews
						</Heading>
						<Box
							height={1}
							width={'100px'}
							backgroundColor={'manadong-red.500'}
							borderRadius={2}></Box>
					</Box>

					<Swiper
						modules={[Pagination, Autoplay]}
						spaceBetween={12}
						pagination={{ clickable: true }}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							640: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
						style={{ padding: '0.25rem', marginTop: '1.5rem' }}>
						{dataReviews.map((data) => (
							<SwiperSlide key={data.title}>
								<Card>
									<Text
										textAlign={'left'}
										color={'manadong-red.500'}
										fontSize={'xx-large'}
										marginLeft={2}>
										{'"'}
									</Text>
									<CardBody>
										<Text
											color={'manadong-blue.500'}
											fontSize={'larger'}
											fontWeight={600}
											marginBottom={2}>
											{data.title}
										</Text>
										<Text>{data.description}</Text>
									</CardBody>
									<Text
										textAlign={'right'}
										color={'manadong-red.500'}
										fontSize={'xx-large'}
										marginRight={2}>
										{'"'}
									</Text>
								</Card>
							</SwiperSlide>
						))}
						{/* <SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide> */}
					</Swiper>

					{/* <Grid
						templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
						gap={6}>
						{dataReviews.map((data) => (
							<Card key={data.title}>
								<Text
									textAlign={'left'}
									color={'manadong-red.500'}
									fontSize={'xx-large'}
									marginLeft={2}>
									{'"'}
								</Text>
								<CardBody>
									<Text
										color={'manadong-blue.500'}
										fontSize={'larger'}
										fontWeight={600}
										marginBottom={2}>
										{data.title}
									</Text>
									<Text>{data.description}</Text>
								</CardBody>
								<Text
									textAlign={'right'}
									color={'manadong-red.500'}
									fontSize={'xx-large'}
									marginRight={2}>
									{'"'}
								</Text>
							</Card>
						))}
					</Grid> */}
				</Container>
			</Box>

			<Container maxWidth={'container.xl'}>
				<Box
					paddingY={8}
					display={'flex'}
					flexDirection={'column'}
					flexWrap={'wrap'}
					gap={4}>
					<Box>
						<Heading
							color={'manadong-blue.500'}
							paddingY={2}>
							Locations
						</Heading>
						<Box
							height={1}
							width={'100px'}
							backgroundColor={'manadong-red.500'}
							borderRadius={2}></Box>
					</Box>

					<Grid
						templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
						gap={6}>
						{dataLocations.map((data) => (
							<Card key={data.title}>
								<CardBody>
									<Box
										display={'flex'}
										alignItems={'start'}
										gap={4}>
										<Box
											width={20}
											height={16}
											padding={4}
											borderRadius={'lg'}
											backgroundColor={'manadong-red.50'}
											display={'flex'}
											justifyContent={'center'}>
											<Image src="assets/images/Pin Location Icon.svg" />
										</Box>
										<Box>
											<Text
												color={'manadong-blue.500'}
												fontSize={'larger'}
												fontWeight={600}
												marginBottom={2}>
												{data.title}
											</Text>
											<Text>{data.description}</Text>
											<Button
												colorScheme={'manadong-red'}
												variant={'link'}
												leftIcon={
													<Image
														src="assets/images/Navigate Icon.svg"
														width={5}
													/>
												}
												marginTop={4}
												textDecoration={'underline'}>
												View Map
											</Button>
										</Box>
									</Box>
								</CardBody>
							</Card>
						))}
					</Grid>
				</Box>
			</Container>

			<FooterBar />
		</>
	);
}

function ModalMenu({ data }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Card
				onClick={onOpen}
				cursor={'pointer'}>
				<CardBody>
					<Stack gap={4}>
						<Image
							src={data.picture}
							borderRadius="lg"
						/>
						<Text
							textAlign={'center'}
							fontWeight={600}>
							{data.title + ' '}
							{data.isNew ? (
								<Badge
									variant={'outline'}
									colorScheme={'manadong-red'}>
									New
								</Badge>
							) : (
								''
							)}
						</Text>
					</Stack>
				</CardBody>
			</Card>

			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton
						backgroundColor={'white'}
						size={'lg'}
						borderRadius={'full'}
					/>
					<ModalBody padding={0}>
						<Stack>
							<Image
								src={data.picture}
								alt="Green double couch with wooden legs"
								borderRadius="lg"
							/>

							<Stack
								direction={'column'}
								padding={4}>
								<Text
									textAlign={'center'}
									fontWeight={600}
									fontSize={'x-large'}
									color={'manadong-blue.500'}>
									{data.title + ' '}
									{data.isNew ? (
										<Badge
											variant={'outline'}
											colorScheme={'manadong-red'}>
											New
										</Badge>
									) : (
										''
									)}
								</Text>
								<Text>{data.description}</Text>
								<Text color={'manadong-red.500'}>{data.price}</Text>
							</Stack>
						</Stack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
