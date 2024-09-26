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
			minHeight={'224px'}
			paddingY={'48px'}
			backgroundColor={'manadong-blue.500'}
			color={'white'}>
			<Container maxWidth={'container.xl'}>
				<Grid
					gap={{ base: 8, md: '32px' }}
					width={'100%'}
					gridTemplateColumns={{
						base: 'repeat(1, 1fr)',
						md: 'repeat(3, 1fr)',
					}}>
					<Stack gap={4}>
						<Image
							src="/assets/images/manadong-logo.svg"
							width={'142px'}
						/>
						<Text
							fontSize={'12px'}
							lineHeight={'18px'}
							fontWeight={400}>
							Copyright &copy; 2024 PT Bogadong Anugerah Indonesia
						</Text>
					</Stack>

					<Stack gap={{ base: 4, md: '16px' }}>
						<Text
							fontWeight={600}
							fontSize={'14px'}
							lineHeight={'20px'}>
							Contact Us
						</Text>

						<Stack gap={'24px'}>
							<Stack
								gap={'24px'}
								direction={'row'}>
								<Stack gap={'12px'}>
									<Text
										fontWeight={600}
										fontSize={'14px'}
										lineHeight={'20px'}>
										Email
									</Text>
									<Text
										fontWeight={600}
										fontSize={'14px'}
										lineHeight={'20px'}>
										Telp
									</Text>
								</Stack>
								<Stack gap={'12px'}>
									<Text
										fontWeight={400}
										fontSize={'12px'}
										lineHeight={'20px'}>
										:{' '}
										<span
											style={{
												cursor: 'pointer',
												textDecoration: 'underline',
											}}>
											manadong@gmail.com
										</span>
									</Text>
									<Text
										fontWeight={400}
										fontSize={'12px'}
										lineHeight={'20px'}>
										:{' '}
										<span
											style={{
												cursor: 'pointer',
												textDecoration: 'underline',
											}}>
											+62-911-1009-115
										</span>
									</Text>
								</Stack>
							</Stack>
						</Stack>
						<Stack
							alignSelf={{ base: 'start', md: 'center' }}
							gap={4}
							direction={'row'}>
							<Link
								as={NavLink}
								width={'fit-content'}>
								<Image
									src="/assets/images/Whatsapp Logo.svg"
									width={'16px'}
									cursor={'pointer'}
								/>
							</Link>
							<Link
								as={NavLink}
								width={'fit-content'}>
								<Image
									src="/assets/images/Facebook Logo.svg"
									width={'16px'}
									cursor={'pointer'}
								/>
							</Link>
							<Link
								as={NavLink}
								width={'fit-content'}>
								<Image
									src="/assets/images/Instagram Logo.svg"
									width={'16px'}
									cursor={'pointer'}
								/>
							</Link>
						</Stack>
					</Stack>

					<Stack gap={{ base: 4, md: '16px' }}>
						<Text
							fontWeight={600}
							fontSize={'14px'}
							lineHeight={'20px'}>
							Available On
						</Text>

						<Stack
							gap={{ base: 2, md: '12px' }}
							direction={'column'}>
							<Link
								as={NavLink}
								to={'/order-now/grab-food'}
								width={'fit-content'}
								fontWeight={400}
								fontSize={'12px'}
								lineHeight={'18px'}>
								<u>Grab Food</u>
							</Link>
							<Link
								as={NavLink}
								to={'/order-now/gofood'}
								width={'fit-content'}
								fontWeight={400}
								fontSize={'12px'}
								lineHeight={'18px'}>
								<u>GoFood</u>
							</Link>
							<Link
								as={NavLink}
								to={'/order-now/shopee-food'}
								width={'fit-content'}
								fontWeight={400}
								fontSize={'12px'}
								lineHeight={'18px'}>
								<u>Shopee Food</u>
							</Link>
						</Stack>
					</Stack>
				</Grid>
			</Container>
		</Box>
	);
}
