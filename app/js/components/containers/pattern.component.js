import React from "react";

export default class Pattern extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.data };
  }
  /* TODO:
Add support for a list that switches between container-fluid and container as a div wrapper */

  componentDidUpdate(prevProps, prevState) {
    let content = `<!DOCTYPE html>
           <html>
          <head>
          <link  rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
          <link rel="stylesheet" href=" ${this.props.data.patternCssDep}" >
            <title>Pattern</title><style>${
              this.props.data.patternStyles
            }</style>
            <script src="https://code.jquery.com/jquery-1.9.1.min.js" type="text/javascript"></script>
            <script>
              $.noConflict();
            </script>
            </head>
             <body>
             <div class="">
             
             ${this.props.data.patternHtml}
             </div>
      
             <script src="${this.props.data.patternJsDep}"></script>
             <script type="text/javascript"> ${
               this.props.data.patternScript
             }</script>
           </body>
             </html>`;

    // console.log('Html: ', content)
    if (this.props.data.patternHtml) {
      let viewer = document.getElementById("patternViewer");
      viewer.contentWindow.document.close();
      viewer.contentWindow.document.write(content);
    }
  }

  render() {
    //TODO: Add Mobile buttons and refresh buttons

    return (
      <div className="patternViewerWrap">
        <iframe id="patternViewer" />
      </div>
    );
  }
}
