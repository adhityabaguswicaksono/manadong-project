import { Box, Image, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
	return (
		<Box
			width={'100%'}
			height={'fit-content'}
			paddingX={'6'}
			paddingY={'4'}
			display={'flex'}
			gap={{ base: 8, md: 24 }}
			flexDirection={{ base: 'column', md: 'row' }}
			justifyContent={'space-between'}
			alignItems={'center'}
			backgroundColor={'manadong-blue.500'}
			color={'white'}>
			<Image src="/assets/images/manadong-logo.svg" />

			<Box
				display={'flex'}
				gap={4}>
				<Link
					as={NavLink}
					to={'/'}
					end
					_hover={{ textDecoration: 'none' }}
					_activeLink={{ color: 'manadong-red.500' }}>
					Home
				</Link>
				<Link
					as={NavLink}
					to={'/eatery'}
					end
					_hover={{ textDecoration: 'none' }}
					_activeLink={{ color: 'manadong-red.500' }}>
					Eatery
				</Link>
				<Link
					as={NavLink}
					to={'/news'}
					end
					_hover={{ textDecoration: 'none' }}
					_activeLink={{ color: 'manadong-red.500' }}>
					News
				</Link>
				<Link
					as={NavLink}
					to={'/about-us'}
					end
					_hover={{ textDecoration: 'none' }}
					_activeLink={{ color: 'manadong-red.500' }}>
					About Us
				</Link>
			</Box>
		</Box>
	);
}
