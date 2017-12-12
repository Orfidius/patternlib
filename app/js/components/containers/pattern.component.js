import React from "react";

// const scripts = `
// // CAROUSEL LAYOUT 1
// jQuery('.slideItem').wrapAll('<div class="slideItemWrapper"></div>');
// jQuery('.slideItemWrapper').slick({
//   infinite: true,
//   prevArrow: '<span class="slick-arrow slick-prev fa fa-angle-left" aria-hidden="true"></span>',
//   nextArrow: '<span class="slick-arrow slick-next fa fa-angle-right" aria-hidden="true"></span>',
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });`;

export default class Pattern extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.data };
  }

 
  componentDidUpdate(prevProps, prevState) {

    let content = `<!DOCTYPE html>
           <html>
          <head>
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
            <title>Pattern</title><style>` + this.props.data.patternStyles + `</style>
            
            </head>
             <body>` + this.props.data.patternHtml + `
             <script
             src="https://code.jquery.com/jquery-1.12.4.min.js"
             integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
             crossorigin="anonymous"></script>
             <script src="` + this.props.data.patternDependancy + `">
             <script type="text/javascript"> ` +this.props.data.patternScript + ` 
           </body>
             </html>`;





    console.log('Html: ', content)
    if (this.props.data.patternHtml) {
    let viewer  =  document.getElementById('patternViewer').contentWindow.document;
    viewer.write(content);
    }
  }
  setHtml() {
    // TODO: Parse patternHTML to check against XSS attacks
    this.state.html = this.props.data.html;
    return { __html: this.props.data.html };
  }

  render() {
    console.log("pattern Comp", this.props.data);

    return (
      <div>
        <iframe id="patternViewer" />
      </div>
    );
  }
}
