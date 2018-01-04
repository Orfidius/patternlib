import React from "react";

export default class Pattern extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.data };
  }
  /* TODO:
Add support for a list that switches between container-fluid and container as a div wrapper */

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.data);
    let jsDeps = "";
    let cssDeps = "";

    if (typeof this.props.data.patternJsDep !== "undefined") {
      Array.prototype.forEach.call(this.props.data.patternJsDep, jsDep => {
        jsDeps = jsDeps + `<script src=${jsDep}></script>`;
      });
    }
    if (typeof this.props.data.patternCssDep !== "undefined") {
      Array.prototype.forEach.call(this.props.data.patternCssDep, cssDep => {
        cssDeps = cssDeps + `<link rel="stylesheet"  href=${cssDep}></script>`;
      });
    }

    let content = `<!DOCTYPE html>
           <html>
          <head>
          <link  rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
          ${cssDeps}
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
      
             ${jsDeps}
            <script type="text/javascript"> ${
              this.props.data.patternScript
            }</script>
           </body>
             </html>`;

    // console.log('Html: ', content)
    if (this.props.data.patternHtml) {
      let viewer = document.getElementById("patternViewer");
      viewer.contentWindow.document.close();
      //TODO: add a set timeout or some sorto of debounce so the user can't spam a result click and cause an error
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
