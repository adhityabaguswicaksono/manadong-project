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
	Link,
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

import { dataLocations, dataMenu, dataPromotion, dataReviews } from '../data';

export default function Home() {
	return (
		<>
			{/* Navigation Bar */}
			<NavigationBar />

			{/* Header Section */}
			<Box
				backgroundColor={'manadong-red.50'}
				position={'relative'}
				overflow={'hidden'}>
				<Container
					maxWidth={'container.xl'}
					paddingX={{ base: 0, md: 4 }}>
					<Grid
						gridAutoFlow={'dense'}
						minHeight={'calc(100dvh - 5.5rem)'}
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
							width={'80dvw'}
							height={'100%'}
							right={0}
							top={0}
							backgroundImage={"url('/assets/images/HeaderImage.png')"}
							backgroundRepeat={'no-repeat'}
							backgroundPosition={'center'}
							backgroundSize={'cover'}
						/>
					</Grid>
				</Container>
			</Box>

			{/* Our Menu Section */}
			<Container maxWidth={'container.xl'}>
				<Stack
					gap={8}
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
						marginTop={-3}
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
			<Box
				backgroundColor={'manadong-red.50'}
				paddingY={8}>
				<Container maxWidth={'container.xl'}>
					<Grid
						gridTemplateColumns={{ base: '1fr', xl: '250px 1fr' }}
						marginTop={{ base: 2, lg: 0 }}
						gap={8}
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

						<Grid
							width={'100%'}
							gridTemplateColumns={{
								base: 'repeat(2, 1fr)',
								md: 'repeat(3, 1fr)',
							}}
							gap={4}
							justifyContent={{ base: 'start', xl: 'end' }}>
							{dataPromotion.map((data) => (
								<Card
									key={data.title}
									borderWidth={1}
									borderColor={'grey.200'}>
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
						</Grid>
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
								<Card
									borderWidth={1}
									borderColor={'grey.200'}
									position={'relative'}>
									<Image
										position={'absolute'}
										src="assets/images/Quotes Icon.svg"
										width={8}
										top={2}
										left={2}></Image>
									<CardBody padding={12}>
										<Text
											color={'manadong-blue.500'}
											fontSize={'larger'}
											fontWeight={600}
											marginBottom={2}>
											{data.title}
										</Text>
										<Text>{data.description}</Text>
									</CardBody>
									<Image
										position={'absolute'}
										src="assets/images/Quotes Icon.svg"
										width={8}
										bottom={2}
										right={2}
										transform={'rotate(180deg)'}></Image>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
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
						gap={4}>
						{dataLocations.map((data) => (
							<Card
								key={data.title}
								borderWidth={1}
								borderColor={'grey.200'}>
								<CardBody
									display={'flex'}
									alignItems={'center'}
									gap={4}>
									<Box
										maxWidth={14}
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
										<Text
											textOverflow={'ellipsis'}
											style={{
												display: '-webkit-box',
												WebkitBoxOrient: 'vertical',
												WebkitLineClamp: 2,
												overflow: 'hidden',
											}}>
											{data.description} Lorem ipsum dolor sit amet consectetur
											adipisicing elit. Voluptas nisi optio et laudantium
											pariatur quam asperiores quod vitae quasi! Illo eos
											repellendus cum autem! Saepe sit reiciendis voluptatem
											officia minus!
										</Text>

										<Button
											colorScheme={'manadong-red'}
											variant={'link'}
											marginTop={4}
											textDecoration={'underline'}>
											<Image
												src="assets/images/Navigate Icon.svg"
												height={4}
												borderBottom={'2px solid'}
												borderColor={'manadong-red.500'}
												paddingRight={3}
												marginRight={-1}
											/>
											View Map
										</Button>
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
				cursor={'pointer'}
				boxShadow={'0'}>
				<CardBody padding={0}>
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
				<ModalContent borderRadius={'xl'}>
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
									fontWeight={700}
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
