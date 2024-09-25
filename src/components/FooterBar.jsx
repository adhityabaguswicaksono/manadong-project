import {
	Box,
	Container,
	Grid,
	Image,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function FooterBar() {
	return (
		<Box
			width={'100%'}
			height={{ base: 'fit-content', md: '16rem' }}
			paddingY={12}
			backgroundColor={'manadong-blue.500'}
			color={'white'}>
			<Container maxWidth={'container.xl'}>
				<Grid
					gap={{ base: 8, md: 32 }}
					width={'100%'}
					gridTemplateColumns={{
						base: 'repeat(1, 1fr)',
						md: 'repeat(3, 1fr)',
					}}>
					<Stack gap={4}>
						<Image
							src="/assets/images/manadong-logo.svg"
							width={150}
						/>
						<Text>Copyright &copy; 2024 PT Bogadong Anugerah Indonesia</Text>
					</Stack>

					<Stack gap={{ base: 4, md: 8 }}>
						<Text fontWeight={800}>Contact Us</Text>

						<Stack gap={5}>
							<Stack gap={4}>
								<Text>
									<strong style={{ display: 'inline-block', width: '4rem' }}>
										Email
									</strong>
									: <u style={{ cursor: 'pointer' }}>manadong@gmail.com</u>
								</Text>
								<Text>
									<strong style={{ display: 'inline-block', width: '4rem' }}>
										Telp
									</strong>
									: <u style={{ cursor: 'pointer' }}>+62-911-1009-115</u>
								</Text>
							</Stack>
							<Stack
								alignSelf={{ base: 'start', md: 'center' }}
								gap={4}
								direction={'row'}>
								<Image
									src="/assets/images/Facebook Logo.svg"
									width={6}
									cursor={'pointer'}
								/>
								<Image
									src="/assets/images/Instagram Logo.svg"
									width={6}
									cursor={'pointer'}
								/>
								<Image
									src="/assets/images/Whatsapp Logo.svg"
									width={6}
									cursor={'pointer'}
								/>
							</Stack>
						</Stack>
					</Stack>
					<Stack gap={{ base: 4, md: 8 }}>
						<Text fontWeight={800}>Available On</Text>

						<Stack
							gap={{ base: 2, md: 4 }}
							direction={'column'}>
							<Link
								as={NavLink}
								to={'/order-now/grab-food'}
								width={'fit-content'}>
								<u>Grab Food</u>
							</Link>
							<Link
								as={NavLink}
								to={'/order-now/gofood'}
								width={'fit-content'}>
								<u>GoFood</u>
							</Link>
							<Link
								as={NavLink}
								to={'/order-now/shopee-food'}
								width={'fit-content'}>
								<u>Shopee Food</u>
							</Link>
						</Stack>
					</Stack>
				</Grid>
			</Container>
		</Box>
	);
}
