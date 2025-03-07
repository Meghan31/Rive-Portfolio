import Page404 from './components/rive/responseless/404Page';

const ResponselessScreen = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				textAlign: 'center',
				padding: '1rem',
				gap: '1rem',
				backgroundColor: 'black',
			}}
		>
			<h3 style={{ color: 'white' }}>
				Sorry, this portfolio is best viewed on a laptop or desktop. Please
				switch to a larger screen.
			</h3>
			<Page404 />
		</div>
	);
};

export default ResponselessScreen;
