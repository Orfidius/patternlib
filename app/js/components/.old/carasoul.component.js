import React from "react";

export default class Carasoul extends React.Component {
  
    constructor(props) {
        super(props);
    
	}
	

	componentDidMount() {
		// CAROUSEL LAYOUT 1
		jQuery('.slideItem').wrapAll('<div class="slideItemWrapper"></div>');
		jQuery('.slideItemWrapper').slick({
		infinite: true,
		prevArrow: '<span class="slick-arrow slick-prev fa fa-angle-left" aria-hidden="true"></span>',
		nextArrow: '<span class="slick-arrow slick-next fa fa-angle-right" aria-hidden="true"></span>',
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
		});
	}
  
  
  
render() {
    return (
        <section className="imod-carousel-1 sectionRow">
	<div className="container">
		<div className="row">
			<div className="col-xs-12 sectionContent" id="ContentMiddleLayoutCarousel1" runat="server">
				<div className="col-xs-12 col-sm-2 slideItem">
					<div className="thumb"><a href="#"><img src="http://placehold.it/400x250" /></a></div>
				</div>
				<div className="col-xs-12 col-sm-2 slideItem">
					<div className="thumb"><a href="#"><img src="http://placehold.it/400x250" /></a></div>
				</div>
				<div className="col-xs-12 col-sm-2 slideItem">
					<div className="thumb"><a href="#"><img src="http://placehold.it/400x250" /></a></div>
				</div>
                <div className="col-xs-12 col-sm-2 slideItem">
					<div className="thumb"><a href="#"><img src="http://placehold.it/400x250" /></a></div>
				</div>
				<div className="col-xs-12 col-sm-2 slideItem">
					<div className="thumb"><a href="#"><img src="http://placehold.it/400x250" /></a></div>
				</div>
				<div className="col-xs-12 col-sm-2 slideItem">
					<div className="thumb"><a href="#"><img src="http://placehold.it/400x250" /></a></div>
				</div>
                <div className="col-xs-12 col-sm-2 slideItem">
					<div className="thumb"><a href="#"><img src="http://placehold.it/400x250" /></a></div>
				</div>
				<div className="col-xs-12 col-sm-2 slideItem">
					<div className="thumb">[Link]<img src="[ThumbnailUrl]" alt="[Content Name]" />[/Link]</div>
				</div>
			</div>
		</div>
	</div>
</section>

    );
  }
}
