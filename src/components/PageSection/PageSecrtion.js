
const PageSection = ({ children, classes}) => {
	return (
		<section className={`${classes} py-5  page-section `}>
			<div className="container">
				{children}
			</div>
		</section>
	);
};

export default PageSection;
