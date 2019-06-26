import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./img/Logo.png";
import { liSettings } from "./assets/Settings_Nav_Array";
import { liSchedule } from "./assets/Schedule_Nav_Array";
import Messages from "./components/Messages";
import User from "./components/User";
import Loading from "./components/Loading";
import { Overlay } from "./components/Overlay";
import $ from "jquery";

class DynamicImport extends Component {
  state = {
    component: null
  };
  componentDidMount() {
    this.props.load().then(component => {
      this.setState(() => ({
        component: component.default ? component.default : component
      }));
    });
  }
  render() {
    return this.props.children(this.state.component);
  }
}

const Home = props => (
  <DynamicImport load={() => import("./Home")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const Jobs = props => (
  <DynamicImport load={() => import("./Jobs")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const EditJob = props => (
  <DynamicImport load={() => import("./job_sub/Edit_Job")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const Dailies = props => (
  <DynamicImport load={() => import("./Dailies")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const MaterialOrders = props => (
  <DynamicImport load={() => import("./Material_Orders")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const Crew = props => (
  <DynamicImport load={() => import("./Crew")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const Reports = props => (
  <DynamicImport load={() => import("./Reports")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const Settings = props => (
  <DynamicImport load={() => import("./Settings")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const JobsSettings = props => (
  <DynamicImport load={() => import("./settings_sub/Job_Settings")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const PermitsSettings = props => (
  <DynamicImport load={() => import("./settings_sub/Permits_Settings")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const GigsSettings = props => (
  <DynamicImport load={() => import("./settings_sub/Gigs_Settings")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const MaterialsSettings = props => (
  <DynamicImport load={() => import("./settings_sub/Materials_Settings")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const ContractorSettings = props => (
  <DynamicImport load={() => import("./settings_sub/Contractor_Settings")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const Users = props => (
  <DynamicImport load={() => import("./settings_sub/Users")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const UsersEdit = props => (
  <DynamicImport load={() => import("./settings_sub/Users_Edit")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const PermissionsSettings = props => (
  <DynamicImport load={() => import("./settings_sub/Permissions_Settings")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const PassingsSettings = props => (
  <DynamicImport load={() => import("./settings_sub/Passings_Settings")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const ActivitiesSettings = props => (
  <DynamicImport load={() => import("./settings_sub/Activities_Settings")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const Schedule = props => (
  <DynamicImport load={() => import("./Schedule")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const Late = props => (
  <DynamicImport load={() => import("./schedule_sub/Late")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const OneDay = props => (
  <DynamicImport load={() => import("./schedule_sub/One_Day")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const SevenDays = props => (
  <DynamicImport load={() => import("./schedule_sub/7_Days")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const FourteenDays = props => (
  <DynamicImport load={() => import("./schedule_sub/14_Days")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const NewCommitment = props => (
  <DynamicImport load={() => import("./schedule_sub/New_Commitment")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);
const Completed = props => (
  <DynamicImport load={() => import("./schedule_sub/Completed_Date")}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      mobileToggle: false,
      conditionMessage: false,
      conditionUser: false,
      dropped: false,
      isActive: 0,
      activeItem: 0,
      message: 0,
      que: 0,
      liSettings: liSettings,
      liSchedule: liSchedule,
      NavText: "Home"
    };
  }

  toggleMenu = () => {
    this.setState({ condition: true });
  };
  toggleMenu2 = () => {
    this.setState({ condition: false });
    this.setState({ conditionMessage: false });
    this.setState({ conditionUser: false });
  };
  toggleNav = () => {
    this.setState({ mobileToggle: !this.state.mobileToggle });
    var className = document.getElementById("wrapper");
    className.classList.toggle("wrapperToggle");
  };
  toggleMessage = () => {
    this.setState({ conditionMessage: true });
    this.setState({ conditionUser: false });
  };
  toggleUser = () => {
    this.setState({ conditionUser: true });
    this.setState({ conditionMessage: false });
  };
  LiItemClick = (index, e) => {
    this.setState({ activeItem: index });
    this.setState({ NavText: e.target.id });
  };
  active = index => {
    this.setState({ isActive: index });
  };

  componentWillMount() {
    this.setState({
      message: "3",
      que: "2"
    });
  }
  componentDidMount() {
    $(function() {
      $(".innerNavName #Home").addClass("active");
      $(".nav-link").click(function() {
        $(".fixed-top").addClass("toggled");
        $("#mainNavOverlay").addClass("hide");
        $(".innerNavName #Home").removeClass("active");
      });
      $(".jobsDrop").wrapAll('<div id="jobsWrap" class="dropToggle"></div>');
      $(".PermitsDrop").wrapAll('<div id="jobsWrap" class="dropToggle"></div>');
      $(".GigsDrop").wrapAll('<div id="jobsWrap" class="dropToggle"></div>');
      $(".ActivitiesDrop").wrapAll(
        '<div id="jobsWrap" class="dropToggle"></div>'
      );
      $(".PassingsDrop").wrapAll(
        '<div id="jobsWrap" class="dropToggle"></div>'
      );
      $(".ContractorsDrop").wrapAll(
        '<div id="jobsWrap" class="dropToggle"></div>'
      );
      $(".MaterialsDrop").wrapAll(
        '<div id="jobsWrap" class="dropToggle"></div>'
      );
      $(".drop").click(function() {
        $(this)
          .closest("#jobsWrap")
          .toggleClass("dropToggle");
      });
    });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }
  render() {
    const { liSettings, liSchedule } = this.state;
    return (
      <Router basename="/">
        <header className="bg-light">
          <div>
            <Overlay
              id="mainNavOverlay"
              className={this.state.condition ? "show" : "hide"}
            />
            <div className="row container-fluid">
              <div className="col-2 p-0">
                <button
                  type="button"
                  className="btn menuToggle"
                  onMouseEnter={this.toggleMenu}
                >
                  {this.state.NavText}
                  <div className="ec-menu-button">
                    <div />
                    <div style={{ width: "20px" }} />
                    <div />
                  </div>
                </button>
              </div>
              <div className="col-10">
                <div
                  className={
                    this.state.conditionMessage || this.state.conditionUser
                      ? "mainTopNav"
                      : "mainTopNav overflow"
                  }
                >
                  <ul>
                    <li onMouseEnter={this.toggleMessage}>
                      <FontAwesomeIcon icon="bell" color="#6199b4" /> Message
                      <span className="line" />
                      <div
                        className={
                          this.state.conditionMessage
                            ? "card tableToggleWrap messageBox"
                            : "card tableToggleWrap messageBox toggled"
                        }
                        onMouseLeave={this.toggleMenu2}
                      >
                        <Messages
                          message={this.state.message}
                          que={this.state.que}
                        />
                      </div>
                    </li>
                    <li onMouseEnter={this.toggleUser}>
                      <FontAwesomeIcon icon="smile" color="#6199b4" /> User
                      <span className="line" />
                      <div
                        className={
                          this.state.conditionUser
                            ? "card tableToggleWrap messageBox userBox"
                            : "card tableToggleWrap messageBox userBox toggled"
                        }
                        onMouseLeave={this.toggleMenu2}
                      >
                        <User />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <nav
              className={
                this.state.condition
                  ? " navbar-light bg-light fixed-top"
                  : "navbar-light bg-light fixed-top toggled overflow"
              }
              onMouseLeave={this.toggleMenu2}
            >
              <ul className="nav" id="navbarNav">
                <li
                  className="maninNavUlWrap"
                  onClick={this.active.bind(this, 0)}
                >
                  <Link
                    to={"/"}
                    id="Home"
                    className="nav-link topLi "
                    onClick={this.LiItemClick.bind(this, "homeTopLi")}
                  >
                    {" "}
                    Home{" "}
                    <FontAwesomeIcon
                      icon="angle-double-right"
                      color="#6199b4"
                      size="xs"
                    />{" "}
                  </Link>
                  <Link
                    to={"/Jobs"}
                    id="Jobs"
                    className="nav-link topLi "
                    onClick={this.LiItemClick.bind(this, "jobsTopLi")}
                  >
                    {" "}
                    Jobs{" "}
                    <FontAwesomeIcon
                      icon="angle-double-right"
                      color="#6199b4"
                      size="xs"
                    />{" "}
                  </Link>
                  <Link
                    to={"/Dailies"}
                    id="Dailies"
                    className="nav-link topLi "
                    onClick={this.LiItemClick.bind(this, "dailiesTopLi")}
                  >
                    {" "}
                    Dailies{" "}
                    <FontAwesomeIcon
                      icon="angle-double-right"
                      color="#6199b4"
                      size="xs"
                    />{" "}
                  </Link>
                  <Link
                    to={"/Material_Orders"}
                    id="Orders"
                    className="nav-link topLi "
                    onClick={this.LiItemClick.bind(this, "ordersTopLi")}
                  >
                    {" "}
                    Material Orders{" "}
                    <FontAwesomeIcon
                      icon="angle-double-right"
                      color="#6199b4"
                      size="xs"
                    />{" "}
                  </Link>
                  <Link
                    to={"/Crew"}
                    id="Crew"
                    className="nav-link topLi "
                    onClick={this.LiItemClick.bind(this, "crewTopLi")}
                  >
                    {" "}
                    Crew{" "}
                    <FontAwesomeIcon
                      icon="angle-double-right"
                      color="#6199b4"
                      size="xs"
                    />{" "}
                  </Link>
                  <Link
                    to={"/Reports"}
                    id="Reports"
                    className="nav-link topLi "
                    onClick={this.LiItemClick.bind(this, "reportsTopLi")}
                  >
                    {" "}
                    Reports{" "}
                    <FontAwesomeIcon
                      icon="angle-double-right"
                      color="#6199b4"
                      size="xs"
                    />{" "}
                  </Link>
                </li>

                <li
                  className="maninNavUlWrap"
                  onClick={this.active.bind(this, 1)}
                >
                  <Link
                    to={"/Schedule"}
                    id="Schedule"
                    className="nav-link topLi "
                    onClick={this.LiItemClick.bind(this, "scheduleTopLi")}
                  >
                    {" "}
                    Schedule{" "}
                    <FontAwesomeIcon
                      icon="angle-double-right"
                      color="#6199b4"
                      size="xs"
                    />{" "}
                  </Link>
                  <ul>
                    {liSchedule.map((liSchedule, index) => (
                      <li key={index} onClick={this.active.bind(this, 1)}>
                        <Link
                          to={liSchedule.url}
                          id="Schedule"
                          className={
                            this.state.activeItem === liSchedule.index
                              ? "nav-link active"
                              : "nav-link"
                          }
                          onClick={this.LiItemClick.bind(
                            this,
                            liSchedule.index
                          )}
                        >
                          {liSchedule.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li
                  className="maninNavUlWrap"
                  onClick={this.active.bind(this, 2)}
                >
                  <Link
                    to={"/Settings"}
                    id="Settings"
                    className="nav-link topLi"
                    onClick={this.LiItemClick.bind(this, "SettingsTopLi")}
                  >
                    {" "}
                    Settings{" "}
                    <FontAwesomeIcon
                      icon="angle-double-right"
                      color="#6199b4"
                      size="xs"
                    />{" "}
                  </Link>
                  <ul>
                    {liSettings.map((liSetting, index) => (
                      <li
                        key={index}
                        onClick={this.active.bind(this, 2)}
                        className={liSetting.show === "false" ? "hide" : ""}
                      >
                        <Link
                          to={liSetting.url}
                          id="Settings"
                          className={
                            this.state.activeItem === liSetting.index
                              ? "nav-link active"
                              : "nav-link"
                          }
                          onClick={this.LiItemClick.bind(this, liSetting.index)}
                        >
                          {liSetting.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>

            <div
              className={
                this.state.mobileToggle ? "innerNav toggleMobile" : "innerNav"
              }
            >
              <div className="mobileToggle">
                <FontAwesomeIcon
                  icon="exchange-alt"
                  size="lg"
                  color="var(--BrightBlue)"
                  onClick={this.toggleNav}
                />
              </div>
              <nav
                className={
                  this.state.isActive === 0 ? " show" : "nav-link hide"
                }
              >
                <ul className="nav" id="navbarNav">
                  <li className="innerNavName">
                    <Link
                      to={"/"}
                      id="Home"
                      className={
                        this.state.activeItem === "homeTopLi"
                          ? "nav-link active"
                          : "nav-link "
                      }
                      onClick={this.LiItemClick.bind(this, "homeTopLi")}
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav
                className={
                  this.state.isActive === 0 ? " show" : "nav-link hide"
                }
              >
                <ul className="nav" id="navbarNav">
                  <li className="innerNavName">
                    <Link
                      to={"/Jobs"}
                      id="Jobs"
                      className={
                        this.state.activeItem === "jobsTopLi"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      onClick={this.LiItemClick.bind(this, "jobsTopLi")}
                    >
                      {" "}
                      Jobs{" "}
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav
                className={
                  this.state.isActive === 0 ? " show" : "nav-link hide"
                }
              >
                <ul className="nav" id="navbarNav">
                  <li className="innerNavName">
                    <Link
                      to={"/Dailies"}
                      id="Dailies"
                      className={
                        this.state.activeItem === "dailiesTopLi"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      onClick={this.LiItemClick.bind(this, "dailiesTopLi")}
                    >
                      {""}
                      Dailies{" "}
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav
                className={
                  this.state.isActive === 0 ? " show" : "nav-link hide"
                }
              >
                <ul className="nav" id="navbarNav">
                  <li className="innerNavName">
                    <Link
                      to={"/Material_Orders"}
                      id="Orders"
                      className={
                        this.state.activeItem === "ordersTopLi"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      onClick={this.LiItemClick.bind(this, "ordersTopLi")}
                    >
                      {" "}
                      Material Orders{" "}
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav
                className={
                  this.state.isActive === 0 ? " show" : "nav-link hide"
                }
              >
                <ul className="nav" id="navbarNav">
                  <li className="innerNavName">
                    <Link
                      to={"/Crew"}
                      id="Crew"
                      className={
                        this.state.activeItem === "crewTopLi"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      onClick={this.LiItemClick.bind(this, "crewTopLi")}
                    >
                      {" "}
                      Crew{" "}
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav
                className={
                  this.state.isActive === 0 ? " show" : "nav-link hide"
                }
              >
                <ul className="nav" id="navbarNav">
                  <li className="innerNavName">
                    <Link
                      to={"/Reports"}
                      id="Reports"
                      className={
                        this.state.activeItem === "reportsTopLi"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      onClick={this.LiItemClick.bind(this, "reportsTopLi")}
                    >
                      {" "}
                      Reports{" "}
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav
                className={
                  this.state.isActive === 1 ? " show" : "nav-link hide"
                }
              >
                <ul className="nav" id="navbarNav">
                  <li className="innerNavName">
                    <Link
                      to={"/Schedule"}
                      id="Schedule"
                      className={
                        this.state.activeItem === "scheduleTopLi"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      onClick={this.LiItemClick.bind(this, "scheduleTopLi")}
                    >
                      {" "}
                      Schedule{" "}
                    </Link>
                  </li>
                  <ul>
                    {liSchedule.map((liSchedule, index) => (
                      <li key={index} onClick={this.active.bind(this, 1)}>
                        <Link
                          to={liSchedule.url}
                          id="Schedule"
                          className={
                            this.state.activeItem === liSchedule.index
                              ? "nav-link active"
                              : "nav-link"
                          }
                          onClick={this.LiItemClick.bind(
                            this,
                            liSchedule.index
                          )}
                        >
                          {liSchedule.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </ul>
              </nav>
              <nav
                className={
                  this.state.isActive === 2 ? " show" : "nav-link hide"
                }
              >
                <ul className="nav" id="navbarNav">
                  <li className="innerNavName">
                    <Link
                      to={"/Settings"}
                      id="Settings"
                      className={
                        this.state.activeItem === "SettingsTopLi"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      onClick={this.LiItemClick.bind(this, "SettingsTopLi")}
                    >
                      Settings
                    </Link>
                  </li>
                  <ul>
                    {liSettings.map((liSetting, index) => (
                      <li
                        key={index}
                        onClick={this.active.bind(this, 2)}
                        className={liSetting.class}
                      >
                        <span className="drop">
                          <FontAwesomeIcon
                            icon="angle-down"
                            color="#6199b4"
                            size="1x"
                          />
                        </span>
                        <Link
                          to={liSetting.url}
                          id={liSetting.id}
                          className={
                            this.state.activeItem === liSetting.index
                              ? "nav-link active"
                              : "nav-link"
                          }
                          onClick={this.LiItemClick.bind(this, liSetting.index)}
                        >
                          {liSetting.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </ul>
              </nav>
            </div>
          </div>
          <div
            className={this.state.mobileToggle ? "logo toggleMobile" : "logo"}
          >
            <img src={Logo} alt="Logo" width="120px" />
          </div>
          <div
            className={
              this.state.loading ? "loaderWrapper show" : "loaderWrapper hide"
            }
          >
            <div className="loader">
              <div className="loader__bar" />
              <div className="loader__bar" />
              <div className="loader__bar" />
              <div className="loader__bar" />
              <div className="loader__bar" />
              <div className="loader__ball" />
              <div className="loadingText">Loading Your Data...</div>
            </div>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/Jobs" component={Jobs} />
          <Route path="/Edit_Job" component={EditJob} />

          <Route path="/Dailies" component={Dailies} />
          <Route path="/Material_Orders" component={MaterialOrders} />
          <Route path="/Crew" component={Crew} />
          <Route path="/Reports" component={Reports} />

          <Route path="/Schedule" component={Schedule} />
          <Route path="/Late" component={Late} />
          <Route path="/One_Day" component={OneDay} />
          <Route path="/7_Days" component={SevenDays} />
          <Route path="/14_Days" component={FourteenDays} />
          <Route path="/New_Commitment" component={NewCommitment} />
          <Route path="/Completed_Date" component={Completed} />

          <Route path="/Settings" component={Settings} />
          <Route path="/Job_Settings" component={JobsSettings} />
          <Route path="/Permits_Settings" component={PermitsSettings} />
          <Route path="/Gigs_Settings" component={GigsSettings} />
          <Route path="/Materials_Settings" component={MaterialsSettings} />
          <Route path="/Contractor_Settings" component={ContractorSettings} />
          <Route path="/Users" component={Users} />
          <Route path="/Users_Edit" component={UsersEdit} />
          <Route path="/Permissions_Settings" component={PermissionsSettings} />
          <Route path="/Passings_Settings" component={PassingsSettings} />
          <Route path="/Activities_Settings" component={ActivitiesSettings} />
        </Switch>
      </Router>
    );
  }
}

export default Header;
