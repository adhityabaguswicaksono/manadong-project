import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Card,
	CardBody,
	Container,
	Grid,
	Heading,
	Image,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react';
import FooterBar from '../components/FooterBar';
import NavigationBar from '../components/NavigationBar';
import { NavLink, useLocation } from 'react-router-dom';
import { dataOrder } from '../data';

export default function OrderNow() {
	const location = useLocation().pathname;
	const locationBreadcrumb = location.split('/');

	return (
		<>
			<NavigationBar />

			<Container
				maxWidth={'container.xl'}
				gap={4}
				paddingY={6}
				minHeight={'calc(100dvh - 5.5rem - 16rem)'}>
				<Box
					display={'flex'}
					flexDirection={'row'}
					justifyContent={'start'}
					alignItems={'center'}
					gap={4}
					minHeight={'0.5rem'}
					borderRadius={'lg'}
					borderWidth={1}
					borderColor={'manadong-blue.500'}>
					<Link
						as={NavLink}
						to={-1}
						paddingX={3}
						borderRight={'1px solid #004687'}
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

					<Breadcrumb padding={{ base: 1, md: 2 }}>
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
					alignItems={'center'}
					gap={4}>
					<Box>
						<Heading
							color={'manadong-blue.500'}
							paddingY={2}>
							Order Now On:
						</Heading>
						<Box
							height={1}
							width={'100px'}
							backgroundColor={'manadong-red.500'}
							borderRadius={2}></Box>
					</Box>

					<Grid
						templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
						width={'100%'}
						gap={6}>
						{dataOrder.map((data) => (
							<Card key={data.title}>
								<CardBody>
									<Stack gap={4}>
										<Box marginX={'auto'}>
											<Image
												src={data.picture}
												maxHeight={'150px'}
											/>
										</Box>
										<Text
											textAlign={'center'}
											fontWeight={600}>
											{data.title + ' '}
										</Text>
									</Stack>
									<Box
										display={'flex'}
										justifyContent={'center'}
										marginTop={8}>
										<NavLink
											to={location + '/' + data.link}
											end>
											<Button colorScheme={'manadong-blue'}>Order Now</Button>
										</NavLink>
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
