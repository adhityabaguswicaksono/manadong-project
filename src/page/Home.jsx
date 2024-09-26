import {
	Badge,
	Box,
	Button,
	Card,
	CardBody,
	Container,
	Flex,
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
						minHeight={'685.48px'}
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
						<Grid
							width={{ base: '100%', lg: 'fit-content' }}
							gridTemplateColumns={'1fr'}
							gap={'24px'}
							color={'black'}
							alignSelf={'center'}
							paddingBottom={{ base: 12, md: 0 }}
							paddingX={{ base: 4, md: 0 }}>
							<Stack gap={0}>
								<Heading
									color={'manadong-red.500'}
									paddingY={2}
									fontSize={'32px'}
									fontWeight={600}>
									Manadong
								</Heading>
								<Text fontSize={'18px'}>
									is Manado dish with a spicy and appetizing flavour.
								</Text>
							</Stack>
							<Text
								color={'manadong-red.500'}
								fontSize={'large'}
								size={'20px'}>
								#NikmatnyaNggakPakeRibet
							</Text>
							<Link
								as={NavLink}
								to={'/order-now'}
								width={'fit-content'}>
								<Button
									variant={'outline'}
									colorScheme="manadong-blue"
									paddingX={'12px'}
									paddingY={'9px'}>
									Order Now
								</Button>
							</Link>
						</Grid>
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
					gap={'32px'}
					paddingY={'48px'}>
					<Box>
						<Heading
							color={'manadong-blue.500'}
							fontSize={'28px'}
							lineHeight={'40px'}
							fontWeight={600}>
							Our Menu
						</Heading>
						<Box
							height={'3px'}
							width={'52px'}
							backgroundColor={'manadong-red.500'}
							borderRadius={'8px'}></Box>
					</Box>

					<Grid
						templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
						gap={'24px'}>
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
						<Link
							as={NavLink}
							to={'/order-now'}
							width={'fit-content'}>
							<Button
								variant={'outline'}
								colorScheme="manadong-blue"
								paddingX={'12px'}
								paddingY={'9px'}
								fontWeight={600}>
								Order Now
							</Button>
						</Link>
					</Box>
				</Stack>
			</Container>

			{/* Promotion Section */}
			<Box
				backgroundColor={'manadong-red.50'}
				paddingY={'48px'}>
				<Container maxWidth={'container.xl'}>
					<Grid
						gridTemplateColumns={{ base: '1fr', xl: '250px 1fr' }}
						marginTop={{ base: 2, lg: 0 }}
						gap={8}
						alignItems={'center'}>
						<Box>
							<Heading
								color={'manadong-blue.500'}
								fontSize={'28px'}
								lineHeight={'40px'}
								fontWeight={600}>
								Promotion
							</Heading>
							<Box
								height={'3px'}
								width={'52px'}
								backgroundColor={'manadong-red.500'}
								borderRadius={'8px'}></Box>
						</Box>

						<Grid
							width={'100%'}
							gridTemplateColumns={{
								base: 'repeat(2, 1fr)',
								md: 'repeat(3, 1fr)',
							}}
							gap={'24px'}
							justifyContent={{ base: 'start', xl: 'end' }}>
							{dataPromotion.map((data) => (
								<Card
									key={data.title}
									outline={'1px solid #D5D5D54D'}
									boxShadow={'0px 2px 4px 0px #0000001F'}
									height={'fit-content'}
									borderRadius={'8px'}>
									<CardBody padding={0}>
										<Stack>
											<Image
												src={data.picture}
												borderRadius="lg"
											/>
											<Stack
												gap={'4px'}
												padding={'24px'}>
												<Text
													color={'manadong-blue.500'}
													fontSize={'18px'}
													fontWeight={600}
													lineHeight={'26px'}>
													{data.title}
												</Text>
												<Text
													fontWeight={400}
													fontSize={'14px'}
													lineHeight={'20px'}>
													{data.description}
												</Text>
											</Stack>
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
					paddingY={'48px'}>
					<Box>
						<Heading
							color={'manadong-blue.500'}
							fontSize={'28px'}
							lineHeight={'40px'}
							fontWeight={600}>
							Reviews
						</Heading>
						<Box
							height={'3px'}
							width={'52px'}
							backgroundColor={'manadong-red.500'}
							borderRadius={'8px'}></Box>
					</Box>

					<Swiper
						modules={[Pagination, Autoplay]}
						spaceBetween={'24px'}
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
									position={'relative'}
									borderRadius={'8px'}
									outline={'1px solid #D5D5D5'}
									boxShadow={'0px 2px 4px 0px #0000001F'}>
									<Image
										position={'absolute'}
										src="assets/images/Quotes Icon.svg"
										width={'24px'}
										top={2}
										left={2}></Image>
									<CardBody
										padding={12}
										display={'flex'}
										flexDirection={'column'}
										gap={'12px'}>
										<Text
											color={'manadong-blue.500'}
											fontSize={'14px'}
											lineHeight={'20px'}
											fontWeight={600}>
											{data.title}
										</Text>
										<Text
											fontWeight={500}
											fontSize={'14px'}
											lineHeight={'20px'}>
											{data.description}
										</Text>
									</CardBody>
									<Image
										position={'absolute'}
										src="assets/images/Quotes Icon.svg"
										width={'24px'}
										bottom={2}
										right={2}
										transform={'rotate(180deg)'}></Image>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
				</Container>
			</Box>

			{/* Locations Section */}
			<Container maxWidth={'container.xl'}>
				<Box
					paddingY={'48px'}
					display={'flex'}
					flexDirection={'column'}
					flexWrap={'wrap'}
					gap={'32px'}>
					<Box>
						<Heading
							color={'manadong-blue.500'}
							fontSize={'28px'}
							lineHeight={'40px'}
							fontWeight={600}>
							Locations
						</Heading>
						<Box
							height={'3px'}
							width={'52px'}
							backgroundColor={'manadong-red.500'}
							borderRadius={'8px'}></Box>
					</Box>

					<Grid
						templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
						gap={'24px'}>
						{dataLocations.map((data) => (
							<Card
								key={data.title}
								borderRadius={'8px'}
								outline={'1px solid #D5D5D5'}
								boxShadow={'0px 2px 4px 0px #0000001F'}>
								<CardBody
									display={'flex'}
									alignItems={'center'}
									gap={'24px'}>
									<Box
										maxWidth={'44px'}
										maxHeight={'44px'}
										padding={'10px'}
										borderRadius={'8px'}
										backgroundColor={'manadong-red.50'}
										display={'flex'}
										justifyContent={'center'}>
										<Image src="assets/images/Pin Location Icon.svg" />
									</Box>
									<Box
										width={'100%'}
										display={'flex'}
										flexDirection={'column'}
										gap={'12px'}>
										<Box
											width={'100%'}
											display={'flex'}
											flexDirection={'column'}
											gap={'4px'}>
											<Text
												color={'manadong-blue.500'}
												fontSize={'18px'}
												fontWeight={600}>
												{data.title}
											</Text>
											<Text
												fontWeight={400}
												fontSize={'12px'}
												lineHeight={'18px'}
												textOverflow={'ellipsis'}
												style={{
													display: '-webkit-box',
													WebkitBoxOrient: 'vertical',
													WebkitLineClamp: 2,
													overflow: 'hidden',
												}}>
												{data.description}
											</Text>
										</Box>

										<Link
											as={NavLink}
											width={'fit-content'}>
											<Button
												colorScheme={'manadong-red'}
												variant={'link'}
												marginTop={4}
												borderBottom={'2px solid'}
												borderColor={'manadong-red.500'}
												borderRadius={0}
												fontSize={'14px'}
												width={'fit-content'}
												margin={0}
												_hover={{ textDecoration: 'none' }}>
												<Image
													src="assets/images/Navigate Icon.svg"
													height={'16px'}
													paddingRight={3}
													marginRight={-1}
												/>
												View Map
											</Button>
										</Link>
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
				boxShadow={'0'}
				borderRadius={'8px'}>
				<CardBody padding={0}>
					<Stack gap={'12px'}>
						<Image
							src={data.picture}
							borderRadius="lg"
						/>
						<Flex
							flexDirection={'row'}
							gap={'4px'}
							flexWrap={'wrap'}
							justifyContent={'center'}
							alignItems={'center'}>
							<Text
								textAlign={'center'}
								fontWeight={600}
								fontSize={'18px'}>
								{data.title + ' '}
							</Text>
							{data.isNew ? (
								<Badge
									variant={'outline'}
									colorScheme={'manadong-red'}
									width={'fit-content'}
									fontWeight={'700'}
									boxShadow={0}
									borderWidth={'2px'}
									borderColor={'manadong-red.500'}
									borderRadius={'4px'}
									paddingX={0}
									fontSize={'8px'}>
									New
								</Badge>
							) : (
								''
							)}
						</Flex>
					</Stack>
				</CardBody>
			</Card>

			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered>
				<ModalOverlay />
				<ModalContent borderRadius={'8px'}>
					<ModalCloseButton
						backgroundColor={'white'}
						size={'lg'}
						borderRadius={'full'}
					/>
					<ModalBody padding={0}>
						<Stack>
							<Image src={data.picture} />

							<Stack
								direction={'column'}
								padding={'24px'}
								gap={'8px'}>
								<Flex
									flexDirection={'row'}
									gap={'4px'}
									flexWrap={'wrap'}
									justifyContent={'start'}
									alignItems={'center'}>
									<Text
										color={'manadong-blue.500'}
										textAlign={'center'}
										fontWeight={600}
										fontSize={'24px'}>
										{data.title + ' '}
									</Text>
									{data.isNew ? (
										<Badge
											variant={'outline'}
											colorScheme={'manadong-red'}
											width={'fit-content'}
											fontWeight={'700'}
											boxShadow={0}
											borderWidth={'2px'}
											borderColor={'manadong-red.500'}
											borderRadius={'4px'}
											paddingX={0}
											fontSize={'8px'}>
											New
										</Badge>
									) : (
										''
									)}
								</Flex>
								<Text
									fontWeight={400}
									fontSize={'18px'}
									lineHeight={'26px'}>
									{data.description}
								</Text>
								<Text
									color={'manadong-red.500'}
									fontWeight={500}
									fontSize={'18px'}
									lineHeight={'26px'}>
									{data.price}
								</Text>
							</Stack>
						</Stack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
