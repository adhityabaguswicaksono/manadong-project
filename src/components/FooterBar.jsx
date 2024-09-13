import { Box, Image, Link, Stack, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function FooterBar() {
	return (
		<Box
			width={'100%'}
			height={'fit-content'}
			paddingX={'6'}
			paddingY={'12'}
			display={'flex'}
			gap={{ base: 8, md: 24 }}
			flexDirection={{ base: 'column', md: 'row' }}
			justifyContent={{ base: 'start', md: 'space-between' }}
			alignItems={{ base: 'start', md: 'center' }}
			backgroundColor={'manadong-blue.500'}
			color={'white'}>
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
					gap={2}
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
		</Box>
	);
}
