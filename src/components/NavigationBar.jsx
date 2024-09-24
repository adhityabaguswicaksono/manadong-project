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
			height={'5.5rem'}
			paddingY={4}
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
					<Image src="/assets/images/manadong-logo.svg" />
				</Link>

				<Box
					display={{ base: 'none', md: 'flex' }}
					gap={4}>
					<Link
						as={NavLink}
						to={'/'}
						end
						_hover={{ textDecoration: 'none' }}
						_activeLink={{ color: 'manadong-red.100' }}>
						Home
					</Link>
					<Link
						as={NavLink}
						to={'/eatery'}
						end
						_hover={{ textDecoration: 'none' }}
						_activeLink={{ color: 'manadong-red.100' }}>
						Eatery
					</Link>
					<Link
						as={NavLink}
						to={'/news'}
						end
						_hover={{ textDecoration: 'none' }}
						_activeLink={{ color: 'manadong-red.100' }}>
						News
					</Link>
					<Link
						as={NavLink}
						to={'/about-us'}
						end
						_hover={{ textDecoration: 'none' }}
						_activeLink={{ color: 'manadong-red.100' }}>
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
