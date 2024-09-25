import { NavLink, useLocation } from 'react-router-dom';
import FooterBar from '../components/FooterBar';
import NavigationBar from '../components/NavigationBar';
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Card,
	CardBody,
	Container,
	Divider,
	Grid,
	Heading,
	Image,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react';
import { dataLocations } from '../data';

export default function Outlet() {
	const location = useLocation().pathname;
	const locationBreadcrumb = location.split('/');
	const locationData = locationBreadcrumb[locationBreadcrumb.length - 1];

	return (
		<>
			<NavigationBar />

			<Container
				maxWidth={'container.xl'}
				gap={4}
				paddingY={12}
				minHeight={'calc(100dvh - 5.5rem - 16rem)'}>
				<Box
					display={'flex'}
					flexDirection={'row'}
					justifyContent={'start'}
					alignItems={'center'}
					gap={3}
					height={'2.5rem'}
					borderRadius={'lg'}
					borderWidth={1}
					borderColor={'manadong-blue.500'}>
					<Link
						as={NavLink}
						to={-1}
						paddingLeft={3}
						_hover={{ textDecoration: 'none' }}>
						<Box
							display={'flex'}
							flexWrap={'nowrap'}
							gap={2}
							color={'manadong-red.500'}
							padding={{ base: 1, md: 2 }}>
							<Image
								src="/assets/images/Back Arrow.svg"
								width={5}
							/>
							<Text>Back</Text>
						</Box>
					</Link>

					<Divider
						orientation={'vertical'}
						height={'100%'}
					/>

					<Breadcrumb
						padding={{ base: 1, md: 2 }}
						display={'flex'}>
						{locationBreadcrumb.map((data, index) => {
							let link = '';
							for (let i = 0; i <= index; i++) {
								if (i === 0 && index === 0) {
									link += '/';
									break;
								}
								link += locationBreadcrumb[i];
								if (i < index) {
									link += '/';
								}
							}
							return (
								<BreadcrumbItem key={data}>
									<BreadcrumbLink
										as={NavLink}
										to={link}
										end
										color={'manadong-blue.500'}
										_activeLink={{ color: 'black' }}>
										{index === 0 ? 'Home' : ''}
										{data
											.split('-')
											.map((e) => e.charAt(0).toUpperCase() + e.slice(1))
											.join(' ')}
									</BreadcrumbLink>
								</BreadcrumbItem>
							);
						})}
					</Breadcrumb>
				</Box>

				<Box
					width={'100%'}
					paddingTop={8}
					display={'flex'}
					flexDirection={'column'}
					flexWrap={'wrap'}
					justifyContent={'center'}
					gap={4}>
					<Box>
						<Heading
							color={'manadong-blue.500'}
							paddingY={2}>
							{locationData
								.split('-')
								.map((e) => e.charAt(0).toUpperCase() + e.slice(1))
								.join(' ')}{' '}
							Outlet
						</Heading>
						<Box
							height={1}
							width={'100px'}
							backgroundColor={'manadong-red.500'}
							borderRadius={2}></Box>
					</Box>

					<Grid
						templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
						gap={4}>
						<Stack
							direction={'column'}
							width={'100%'}>
							{dataLocations.map((data) => (
								<>
									<Card
										key={data.title}
										boxShadow={0}
										size={'sm'}>
										<CardBody
											paddingX={0}
											paddingY={2}>
											<Box
												display={'flex'}
												flexDirection={{ base: 'column', md: 'row' }}
												justifyContent={'space-between'}
												alignItems={{ base: 'start', md: 'center' }}
												gap={4}>
												<Text fontWeight={600}>{data.title + ' '}</Text>

												<Button
													rightIcon={
														<Image
															src="/assets/images/Right Arrow.svg"
															width={5}
														/>
													}
													size={'sm'}
													variant={{ base: 'link', md: 'ghost' }}
													colorScheme={'manadong-red'}>
													Purchase Here
												</Button>
											</Box>
										</CardBody>
									</Card>
									<Divider borderColor={'gray.300'} />
								</>
							))}
						</Stack>

						<Box
							backgroundImage={'url("/assets/images/HeaderImage.png")'}
							backgroundPosition={'center'}
							backgroundSize={'cover'}
							width={'100%'}
							height={{ base: '28rem', md: '100%' }}
						/>
					</Grid>
				</Box>
			</Container>

			<FooterBar />
		</>
	);
}
