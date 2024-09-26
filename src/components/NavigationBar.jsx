import {
	Box,
	Container,
	IconButton,
	Image,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
	return (
		<Box
			width={'100%'}
			height={'84.82px'}
			paddingY={'16px'}
			backgroundColor={'manadong-blue.500'}
			color={'white'}
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}>
			<Container
				maxWidth={'container.xl'}
				display={'flex'}
				gap={{ base: 2, md: 24 }}
				flexDirection={'row'}
				justifyContent={'space-between'}
				alignItems={'center'}>
				<Link
					as={NavLink}
					to={'/'}>
					<Image
						src="/assets/images/manadong-logo.svg"
						width={'100px'}
					/>
				</Link>

				<Box
					display={{ base: 'none', md: 'flex' }}
					gap={'8px'}>
					<Link
						as={NavLink}
						to={'/'}
						padding={'8px'}
						_hover={{ textDecoration: 'none' }}
						_activeLink={{ color: 'manadong-red.100' }}
						fontWeight={600}
						fontSize={'14px'}>
						Home
					</Link>
					<Link
						as={NavLink}
						to={'/eatery'}
						padding={'8px'}
						_hover={{ textDecoration: 'none' }}
						_activeLink={{ color: 'manadong-red.100' }}
						fontWeight={600}
						fontSize={'14px'}>
						Eatery
					</Link>
					<Link
						as={NavLink}
						to={'/news'}
						padding={'8px'}
						_hover={{ textDecoration: 'none' }}
						_activeLink={{ color: 'manadong-red.100' }}
						fontWeight={600}
						fontSize={'14px'}>
						News
					</Link>
					<Link
						as={NavLink}
						to={'/about-us'}
						padding={'8px'}
						_hover={{ textDecoration: 'none' }}
						_activeLink={{ color: 'manadong-red.100' }}
						fontWeight={600}
						fontSize={'14px'}>
						About Us
					</Link>
				</Box>

				<Menu>
					<MenuButton
						display={{ base: 'block', md: 'none' }}
						as={IconButton}
						icon={
							<Image
								src="/assets/images/Hamburger Icon.svg"
								width={6}
								display={'inline-block'}
							/>
						}
						variant="outline"
						textAlign={'center'}></MenuButton>
					<MenuList
						display={{ base: 'block', md: 'none' }}
						backgroundColor={'manadong-blue.500'}>
						<MenuItem
							backgroundColor={'manadong-blue.500'}
							as={NavLink}
							to={'/'}
							_hover={{ textDecoration: 'none' }}
							_activeLink={{ color: 'manadong-red.100' }}>
							Home
						</MenuItem>
						<MenuItem
							backgroundColor={'manadong-blue.500'}
							as={NavLink}
							to={'/eatery'}
							_hover={{ textDecoration: 'none' }}
							_activeLink={{ color: 'manadong-red.100' }}>
							Eatery
						</MenuItem>
						<MenuItem
							backgroundColor={'manadong-blue.500'}
							as={NavLink}
							to={'/news'}
							_hover={{ textDecoration: 'none' }}
							_activeLink={{ color: 'manadong-red.100' }}>
							News
						</MenuItem>
						<MenuItem
							backgroundColor={'manadong-blue.500'}
							as={NavLink}
							to={'/about-us'}
							_hover={{ textDecoration: 'none' }}
							_activeLink={{ color: 'manadong-red.100' }}>
							About Us
						</MenuItem>
					</MenuList>
				</Menu>
			</Container>
		</Box>
	);
}
