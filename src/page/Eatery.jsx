import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import FooterBar from '../components/FooterBar';
import NavigationBar from '../components/NavigationBar';

export default function Eatery() {
	return (
		<>
			<NavigationBar />

			<Container
				as={Stack}
				maxWidth={'container.xl'}
				gap={'32px'}
				paddingY={'48px'}
				minHeight={'calc(100dvh - 84.82px - 224px)'}>
				<Flex
					flexDirection={'column'}
					alignItems={'start'}>
					<Stack gap={0}>
						<Heading
							color={'manadong-blue.500'}
							fontSize={'28px'}
							lineHeight={'40px'}
							fontWeight={600}>
							Eatery
						</Heading>
						<Box
							height={'3px'}
							width={'52px'}
							backgroundColor={'manadong-red.500'}
							borderRadius={'8px'}></Box>
					</Stack>
				</Flex>

				<Box>
					<Text
						fontWeight={400}
						fontSize={'12px'}
						lineHeight={'18px'}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						gravida, tortor id pretium viverra, lectus ante tristique tortor,
						vitae accumsan ex mi at magna. Vestibulum lacus nulla, hendrerit
						venenatis felis quis, rhoncus cursus elit. Nullam convallis pulvinar
						leo at fermentum. Aliquam vel varius tortor. Ut mattis, orci et
						elementum dapibus, sapien ligula ultricies libero, in dapibus nisi
						nibh a nisl. Nam vulputate neque sem, vitae eleifend massa laoreet
						eu. Donec porttitor, velit efficitur mollis rhoncus, justo tortor
						fermentum quam, at sodales mauris purus a mi. Donec dapibus augue ac
						tristique vulputate. Phasellus id ultrices lorem. In pharetra
						molestie libero cursus fringilla. Suspendisse consequat sodales
						orci, at molestie nulla bibendum vitae. Pellentesque massa nisl,
						vulputate faucibus dolor non, dapibus sagittis ante. Sed faucibus
						felis at porta tristique. Cras placerat vel risus id rutrum.
					</Text>
				</Box>
			</Container>
			<FooterBar />
		</>
	);
}
