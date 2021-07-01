import './styles.scss';

const Loader = () => {
	return (
		<div className="container d-flex w-100 h-100 align-items-center justify-content-center">
			<div className="loader">
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
			</div>
		</div>
	)
	};

export default Loader;
