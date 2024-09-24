import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react';
import FooterBar from '../components/FooterBar';
import NavigationBar from '../components/NavigationBar';

export default function News() {
	return (
		<>
			<NavigationBar />

			<Container
				maxWidth={'container.xl'}
				gap={4}
				paddingY={6}
				minHeight={'calc(100dvh - 5.5rem - 16rem)'}>
				<Box
					width={'100%'}
					display={'flex'}
					flexDirection={'column'}
					flexWrap={'wrap'}
					justifyContent={'start'}
					gap={4}>
					<Box>
						<Heading
							color={'manadong-blue.500'}
							paddingY={2}>
							News
						</Heading>
						<Box
							height={1}
							width={'100px'}
							backgroundColor={'manadong-red.500'}
							borderRadius={2}></Box>
					</Box>

					<Grid
						templateColumns={'repeat(1, 1fr)'}
						gap={4}>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
							gravida, tortor id pretium viverra, lectus ante tristique tortor,
							vitae accumsan ex mi at magna. Vestibulum lacus nulla, hendrerit
							venenatis felis quis, rhoncus cursus elit. Nullam convallis
							pulvinar leo at fermentum. Aliquam vel varius tortor. Ut mattis,
							orci et elementum dapibus, sapien ligula ultricies libero, in
							dapibus nisi nibh a nisl. Nam vulputate neque sem, vitae eleifend
							massa laoreet eu. Donec porttitor, velit efficitur mollis rhoncus,
							justo tortor fermentum quam, at sodales mauris purus a mi. Donec
							dapibus augue ac tristique vulputate. Phasellus id ultrices lorem.
							In pharetra molestie libero cursus fringilla. Suspendisse
							consequat sodales orci, at molestie nulla bibendum vitae.
							Pellentesque massa nisl, vulputate faucibus dolor non, dapibus
							sagittis ante. Sed faucibus felis at porta tristique. Cras
							placerat vel risus id rutrum.
						</Text>
					</Grid>
				</Box>
			</Container>
			<FooterBar />
		</>
	);
}
