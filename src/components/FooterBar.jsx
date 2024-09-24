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
					gap={8}
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

					<Stack gap={4}>
						<Text fontWeight={800}>Contact Us</Text>
						<Stack gap={2}>
							<Text>
								<strong>Email</strong>: <u>manadong@gmail.com</u>
							</Text>
							<Text>
								<strong>Telp</strong>: <u>+62-911-1009-115</u>
							</Text>
						</Stack>
						<Stack
							alignSelf={{ base: 'start', md: 'center' }}
							gap={4}
							direction={'row'}>
							<Image
								src="/assets/images/Facebook Logo.svg"
								width={6}
							/>
							<Image
								src="/assets/images/Instagram Logo.svg"
								width={6}
							/>
							<Image
								src="/assets/images/Whatsapp Logo.svg"
								width={6}
							/>
						</Stack>
					</Stack>
					<Stack gap={4}>
						<Text fontWeight={800}>Available On</Text>

						<Stack
							gap={2}
							direction={'column'}>
							<Link
								as={NavLink}
								to={'/order-now/grab-food'}>
								<u>Grab Food</u>
							</Link>
							<Link
								as={NavLink}
								to={'/order-now/gofood'}>
								<u>GoFood</u>
							</Link>
							<Link
								as={NavLink}
								to={'/order-now/shopee-food'}>
								<u>Shopee Food</u>
							</Link>
						</Stack>
					</Stack>
				</Grid>
			</Container>
		</Box>
	);
}
