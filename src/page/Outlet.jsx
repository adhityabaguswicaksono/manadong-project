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
	Flex,
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
				as={Stack}
				maxWidth={'container.xl'}
				gap={'32px'}
				paddingY={'48px'}
				minHeight={'calc(100dvh - 84.82px - 224px)'}>
				<Box
					display={'flex'}
					flexDirection={'row'}
					justifyContent={'start'}
					alignItems={'center'}>
					<Link
						as={NavLink}
						to={-1}
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'center'}
						alignItems={'center'}
						gap={'4px'}
						height={'36px'}
						borderRadius={'8px 0px 0px 8px'}
						borderWidth={1}
						borderColor={'manadong-blue.100'}
						padding={'8px 16px 8px 16px'}
						_hover={{ textDecoration: 'none' }}>
						<Image
							src="/assets/images/Back Arrow.svg"
							width={'16px'}
						/>
						<Text
							fontWeight={400}
							fontSize={'14px'}
							lineHeight={'20px'}
							color={'manadong-red.500'}>
							Back
						</Text>
					</Link>

					<Breadcrumb
						width={'100%'}
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'start'}
						alignItems={'center'}
						gap={'4px'}
						height={'36px'}
						borderRadius={'0px 8px 8px 0px'}
						borderWidth={1}
						borderColor={'manadong-blue.100'}
						borderLeft={0}
						padding={'8px 16px 8px 16px'}
						separator={
							<Text
								color={'#B5B5B5'}
								fontWeight={400}
								fontSize={'14px'}
								lineHeight={'20px'}>
								/
							</Text>
						}>
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
										fontWeight={400}
										fontSize={'14px'}
										lineHeight={'20px'}
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

				<Flex
					flexDirection={'column'}
					alignItems={'start'}>
					<Stack gap={0}>
						<Heading
							color={'manadong-blue.500'}
							fontSize={'28px'}
							lineHeight={'40px'}
							fontWeight={600}>
							{locationData
								.split('-')
								.map((e) => e.charAt(0).toUpperCase() + e.slice(1))
								.join(' ')}{' '}
							Outlet
						</Heading>
						<Box
							height={'3px'}
							width={'52px'}
							backgroundColor={'manadong-red.500'}
							borderRadius={'8px'}></Box>
					</Stack>
				</Flex>

				<Grid
					templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
					gap={4}>
					<Stack
						direction={'column'}
						width={'100%'}
						gap={0}>
						{dataLocations.map((data) => (
							<>
								<Card
									key={data.title}
									boxShadow={0}
									size={'sm'}>
									<CardBody
										paddingX={0}
										paddingY={'12px'}>
										<Box
											display={'flex'}
											flexDirection={{ base: 'column', md: 'row' }}
											justifyContent={'space-between'}
											alignItems={{ base: 'start', md: 'center' }}
											gap={4}>
											<Text
												fontWeight={600}
												fontSize={'18px'}
												lineHeight={'20px'}>
												{data.title + ' '}
											</Text>

											<Button
												rightIcon={
													<Image
														src="/assets/images/Right Arrow.svg"
														width={'16px'}
													/>
												}
												size={'sm'}
												variant={{ base: 'link', md: 'ghost' }}
												colorScheme={'manadong-red'}
												fontWeight={600}
												fontSize={'14px'}
												lineHeight={'20px'}
												borderRadius={'8px'}>
												Purchase Here
											</Button>
										</Box>
									</CardBody>
								</Card>
								<Divider borderColor={'#D5D5D5'} />
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
			</Container>

			<FooterBar />
		</>
	);
}
