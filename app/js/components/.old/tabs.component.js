import React from "react";


const style = {backgroudnImage: 'url(https://unsplash.it/300/280/?random)'}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // tabs switcher
    jQuery(
      ".imod-tabs-1 .section-tabs .tabs-wrap.horizontal .menuwrap ul.menu li a"
    ).on("click", function(e) {
      e.preventDefault();

      jQuery(
        ".imod-tabs-1 .section-tabs .tabs-wrap.horizontal .menuwrap ul.menu li"
      ).removeClass("active");
      jQuery(
        ".imod-tabs-1 .section-tabs .tabs-wrap.horizontal .content .content-container"
      ).removeClass("active");
      jQuery(this)
        .parent()
        .toggleClass("active");

      var tabTarget = jQuery(this).attr("href");
      jQuery(
        ".imod-tabs-1 .section-tabs .tabs-wrap.horizontal .content " + tabTarget
      ).addClass("active");
    });

    // feature image styles
    if (jQuery("html").hasClass("loggedin")) {
      // do nothing if Admin logged in
    } else {
      if (
        jQuery(
          ".imod-tabs-1 .section-tabs .tabs-wrap.horizontal .content .content-container > div#ContentMiddleLayout1Tab1"
        ).html().length === 0
      ) {
        jQuery(".imod-tabs-1").hide();
      }
    }
  }




  render() {
    return (<section className="imod-tabs-1 sectionRow tabSection">
        <div className="container">
          <div className="row">
            <div
              className="col-xs-12 sectionHeader"
              id="ContentMiddleLayoutTabs1Hdr"
              runat="server"
            >
              <h2>Tabbed/Social Content #1</h2>
            </div>
          </div>
          <div className="row">
            <div className="section-tabs">
              <div className="tabs-wrap horizontal">
                <div
                  className="menuwrap"
                  id="ContentMiddleLayoutTabsNav1"
                  runat="server"
                >
                  <ul className="menu">
                    <li className="active">
                      <a href="#tab1" className="tabLink">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#tab2" className="tabLink">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#tab3" className="tabLink">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#tab4" className="tabLink">
                        Youtube
                      </a>
                    </li>
                    <li>
                      <a href="#tab5" className="tabLink">
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                  <ul className="mobilemenu visible-xs">
                    <li className="active">
                      <a href="#tab1" className="tabLink">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#tab2" className="tabLink">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#tab3" className="tabLink">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#tab4" className="tabLink">
                        Youtube
                      </a>
                    </li>
                    <li>
                      <a href="#tab5" className="tabLink">
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <div className="content-container active" id="tab1">
                    <div id="ContentMiddleLayout1Tab1" runat="server">
                      <div
                        className="thumb"
                        style={style}
                      >
                        <img src="https://unsplash.it/300/250/?random" />
                      </div>
                      <div className="text">
                        <div className="title">
                          <a href="#">Lorem Ipsum Title</a>
                        </div>
                        <div className="preview">
                          Quisque in enim non leo laoreet luctus. Mauris rhoncus
                          tortor non feugiat lobortis. Nunc volutpat purus ante,
                          ut laoreet est vehicula ac.
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                  <div className="content-container " id="tab2">
                    <div id="ContentMiddleLayout1Tab2" runat="server">
                      <div
                        className="thumb"
                        style={style}
                      >
                        <img src="https://unsplash.it/300/260/?random" />
                      </div>
                      <div className="text">
                        <div className="title">
                          <a href="#">Lorem Ipsum Title 2</a>
                        </div>
                        <div className="preview">
                          Quisque in enim non leo laoreet luctus. Mauris rhoncus
                          tortor non feugiat lobortis. Nunc volutpat purus ante,
                          ut laoreet est vehicula ac.
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                  <div className="content-container " id="tab3">
                    <div id="ContentMiddleLayout1Tab3" runat="server">
                      <div
                        className="thumb"
                        style={style}
                      >
                        <img src="https://unsplash.it/300/270/?random" />
                      </div>
                      <div className="text">
                        <div className="title">
                          <a href="#">Lorem Ipsum Title 3</a>
                        </div>
                        <div className="preview">
                          Quisque in enim non leo laoreet luctus. Mauris rhoncus
                          tortor non feugiat lobortis. Nunc volutpat purus ante,
                          ut laoreet est vehicula ac.
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                  <div className="content-container " id="tab4">
                    <div id="ContentMiddleLayout3Tab4" runat="server">
                      <div
                        className="thumb"
                        style={style}
                      >
                        <img src="https://unsplash.it/300/280/?random" />
                      </div>
                      <div className="text">
                        <div className="title">
                          <a href="#">Lorem Ipsum Title 4</a>
                        </div>
                        <div className="preview">
                          Quisque in enim non leo laoreet luctus. Mauris rhoncus
                          tortor non feugiat lobortis. Nunc volutpat purus ante,
                          ut laoreet est vehicula ac.
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                  <div className="content-container " id="tab5">
                    <div id="ContentMiddleLayout3Tab5" runat="server">
                      <div
                        className="thumb"
                        style={style}
                      >
                        <img src="https://unsplash.it/300/290/?random" />
                      </div>
                      <div className="text">
                        <div className="title">
                          <a href="#">Lorem Ipsum Title 5</a>
                        </div>
                        <div className="preview">
                          Quisque in enim non leo laoreet luctus. Mauris rhoncus
                          tortor non feugiat lobortis. Nunc volutpat purus ante,
                          ut laoreet est vehicula ac.
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>);
  }
}
