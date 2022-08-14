import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Button,
  UncontrolledTooltip,
  Input,
  DropdownToggle,
  DropdownMenu,
  Dropdown,
  DropdownItem,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  UncontrolledDropdown,
  Form,
  Label, 
    Modal,
} from "reactstrap";
import BreadCrumb from '../../../Components/Common/BreadCrumb';
//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Link } from "react-router-dom";
// Import Images
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import {
    Basic,
    DifferentColor,
} from "../../Charts/ApexCharts/TimelineCharts/TimelineCharts";

const ObjectDetection = () => {
    document.title="Object Detection Page| Velzon - React Admin & Dashboard Template";

    const [modal_board, setmodal_board] = useState(false);
    function tog_board() {
        setmodal_board(!modal_board);
    }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Object Detection Page" pageTitle="Pages" />
          <div className="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
            <div className="chat-leftsidebar height-width">
              <div className="px-4 pt-4 mb-4">
                {/* Search Box  */}
                <div className="search-box">
                  <input
                  id="search"
                    type="text"
                    className="form-control bg-light border-light"
                    placeholder="Search here..."
                  />
                  <i className="ri-search-2-line search-icon"></i>
                </div>
              </div>

              <PerfectScrollbar className="chat-room-list">
              <div className="chat-message-list">
                  <ul
                    className="list-unstyled chat-list chat-user-list mb-0 users-list"
                    id="channelList"
                  >
                    <li>
                      <Link to="#" className="unread-msg-user">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                            <div className="avatar-xxs">
                              <div className="avatar-title bg-light rounded-circle text-body">-
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="text-truncate mb-0">Ground Truth</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="unread-msg-user">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                            <div className="avatar-xxs">
                              <div className="avatar-title bg-light rounded-circle text-body">-
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="text-truncate mb-0">Predict</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="unread-msg-user">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                            <div className="avatar-xxs">
                              <div className="avatar-title bg-light rounded-circle text-body">-
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="text-truncate mb-0">Ignore</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="unread-msg-user">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                            <div className="avatar-xxs">
                              <div className="avatar-title bg-light rounded-circle text-body">-
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="text-truncate mb-0">Working</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
              </div>

              <hr />
              <div>
                <div className="px-3  rounded-2 mb-2">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h6 className="text-muted font-weight-normal">From</h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="mb-0">00.00.00.00</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h6 className="text-muted font-weight-normal">To</h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="mb-0">00.17.21.52</h6>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              
              <div>
                <div className="px-3  rounded-2 mb-2">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h6 className="mb-0 text-muted font-weight-normal">Instances</h6>
                    </div>
                    <div className="flex-shrink-0">
                        <UncontrolledDropdown>
                            <DropdownToggle tag="button" className="btn btn-light bg-transparent border-0 pr-0">
                                First <i className="mdi mdi-chevron-down"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>First</DropdownItem>
                                <DropdownItem>Second</DropdownItem>
                                <DropdownItem>Third</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            
              <div>
                <div className="px-3  rounded-2 mb-2">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h6 className="mb-0 text-muted font-weight-normal">Longer than</h6>
                    </div>
                    <div className="flex-shrink-0">
                        <UncontrolledDropdown>
                            <DropdownToggle tag="button" className="btn btn-light bg-transparent border-0 pr-0">
                                5 Sec <i className="mdi mdi-chevron-down"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>10 Sec</DropdownItem>
                                <DropdownItem>20 Sec</DropdownItem>
                                <DropdownItem>30 Sec</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="chat-message-list">
                  <ul
                    className="list-unstyled chat-list chat-user-list mb-0 users-list"
                    id="channelList"
                  >
                    <li>
                      <Link to="#" className="unread-msg-user" >
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="text-truncate mb-0 font-weight-bold">+</p>
                          </div>
                          <div className="flex-shrink-0">
                                  <span className="text-muted">
                                    All None
                                  </span>
                                </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="unread-msg-user" >
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                            <div className="avatar-xxs">
                              <div className="avatar-title bg-gradient bg-secondary  rounded-circle text-body">
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="mb-0 text-muted font-weight-normal">Car</p>
                          </div>
                          <div className="flex-shrink-0">
                                  <span>
                                    372
                                  </span>
                                </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="unread-msg-user" >
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                            <div className="avatar-xxs">
                              <div className="avatar-title bg-gradient bg-primary  rounded-circle text-body">
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="mb-0 text-muted font-weight-normal">Motorcycle</p>
                          </div>
                          <div className="flex-shrink-0">
                                  <span>
                                    187
                                  </span>
                                </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="unread-msg-user">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                            <div className="avatar-xxs">
                              <div className="avatar-title bg-gradient bg-success  rounded-circle text-body">
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="text-muted font-weight-normal mb-0">Sail Boat</p>
                          </div>
                          <div className="flex-shrink-0">
                                  <span>
                                    76
                                  </span>
                                </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="unread-msg-user">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                            <div className="avatar-xxs">
                              <div className="avatar-title bg-gradient bg-info  rounded-circle text-body">
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="text-muted font-weight-normal mb-0">Person</p>
                          </div>
                          <div className="flex-shrink-0">
                                  <span>
                                    42
                                  </span>
                                </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="unread-msg-user" href="/apps-chat">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                            <div className="avatar-xxs">
                              <div className="avatar-title bg-gradient bg-warning  rounded-circle text-body">
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="text-muted font-weight-normal mb-0">Dog</p>
                          </div>
                          <div className="flex-shrink-0">
                                  <span>
                                    25
                                  </span>
                                </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
              </div>
              </PerfectScrollbar>
            </div>

            <div className="w-100 overflow-hidden">
              <div className="chat-content d-lg-flex">
                <div className="w-100 overflow-hidden position-relative">
                  <div className="position-relative">
                    <Row>
                      <Col xl={12}>
                        <Card className="height-width mb-0">
                            <CardHeader>
                              <h4 className="card-title mb-0">Example</h4>
                            </CardHeader>
                            <CardBody>
                                <div className="live-preview">
                                    {/* <!-- 16:9 aspect ratio --> */}
                                    <div className="ratio ratio-16x9">
                                        {/* <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe> */}
                                        <img src="https://media.wired.com/photos/5a31bcff41e00716c855d00e/16:9/w_2400,h_1350,c_limit/traffic-FA.jpg" className="img-thumbnail" alt="" />
                                    </div>
                                    <div className="py-2 mt-3   d-flex justify-content-center  align-items-center ">
                                      <Link to="#"><i className="bx  bx bx-volume-full bx-sm px-2"></i></Link>
                                      <Link to="#"><i className="bx bx-skip-previous-circle bx-sm px-2"></i></Link>
                                      <Link to="#"><i className="bx bx-play-circle bx-md px-2"></i></Link>
                                      <Link to="#"><i className="bx bx-skip-next-circle bx-sm px-2"></i></Link>
                                      <Link to="#"><i className="bx bx bx-menu bx-sm px-2"></i></Link>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>

            <div className="chat-leftsidebar height-width-right overflow-hidden">
              <div className="px-2 pt-4 mb-4">
                {/* Select Box  */}
                <div className="pb-2">
                  <div className="input-light">
                    <select className="form-control" data-choices data-choices-search-false name="choices-single-default" id="idStatus">
                      <option value="">Status</option>
                      <option defaultValue="all"  >All</option>
                      <option value="New">New</option>
                      <option value="Pending">Pending</option>
                      <option value="Inprogress">Inprogress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
                {/* Search Box  */}
                <div className="search-box">
                  <input
                  id="search"
                    type="text"
                    className="form-control bg-light border-light"
                    placeholder="Search here..."
                  />
                  <i className="ri-search-2-line search-icon"></i>
                </div>
              </div>

              <PerfectScrollbar className="chat-room-list">
                <div className="px-1 container-fluid overflow-hidden ">
                  <Row className="py-2">
                    <Col xl={4} sm={4} md={4}>
                      <img src={avatar4} alt=""  onClick={() => { tog_board(); }} className=" avatar-md border border-1 border-primary rounded" />
                    </Col>
                    <Col xl={4} sm={4} md={4}>
                      <img src={avatar4} alt="" onClick={() => { tog_board(); }} className=" avatar-md border-sucess border border-1 border-secondary rounded" />
                    </Col>
                    <Col xl={4} sm={4} md={4}>
                      <img src={avatar4} alt="" onClick={() => { tog_board(); }} className=" avatar-md border border-1 border-success rounded" />
                    </Col>
                  </Row>
                  <Row className="py-2">
                    <Col xl={4} sm={4} md={4}>
                      <img src={avatar4} alt="" onClick={() => { tog_board(); }} className=" avatar-md border border-1 border-warning rounded" />
                    </Col>
                    <Col xl={4} sm={4} md={4}>
                      <img src={avatar4} alt="" onClick={() => { tog_board(); }} className=" avatar-md border-sucess border border-1 border-danger rounded" />
                    </Col>
                    <Col xl={4} sm={4} md={4}>
                      <img src={avatar4} alt="" onClick={() => { tog_board(); }} className=" avatar-md border border-1 border-dark rounded" />
                    </Col>
                  </Row>
                  <Row className="py-2">
                    <Col xl={4} sm={4} md={4}>
                      <img src={avatar4} alt="" onClick={() => { tog_board(); }} className=" avatar-md border border-1 border-primary rounded" />
                    </Col>
                    <Col xl={4} sm={4} md={4}>
                      <img src={avatar4} alt="" onClick={() => { tog_board(); }} className=" avatar-md border-sucess border border-1 border-secondary rounded" />
                    </Col>
                    <Col xl={4} sm={4} md={4}>
                      <img src={avatar4} alt="" onClick={() => { tog_board(); }} className=" avatar-md border border-1 border-success rounded" />
                    </Col>
                  </Row>
                  <Row className="py-2">
                    <Col xl={4} sm={4} md={4}>
                      <img src={avatar4} alt="" onClick={() => { tog_board(); }} className=" avatar-md border border-1 border-warning rounded" />
                    </Col>
                    <Col xl={4} sm={4} md={4}>
                      <img src={avatar4} alt="" onClick={() => { tog_board(); }} className=" avatar-md border-sucess border border-1 border-danger rounded" />
                    </Col>
                    <Col xl={4} sm={4} md={4}>
                      <img src={avatar4} alt="" onClick={() => { tog_board(); }} className=" avatar-md border border-1 border-dark rounded" />
                    </Col>
                  </Row>
                </div>
              </PerfectScrollbar>

              {/* View Image */}
              <Modal isOpen={modal_board} toggle={() => { tog_board(); }} centered id="createboardModal" className="border-0 modal-sm">
                        <div className="modal-header p-3">
                            <Button type="button" onClick={() => { setmodal_board(false); }} id="btn-close2" className="btn-close" aria-label="Close" >
                            </Button>
                        </div>
                        <div className="modal-body text-center">
                          <img src={avatar4} alt="" className="avatar-xxl border-sucess border border-1 border-secondary rounded" />
                        </div>
                    </Modal>
            </div>
          </div>
        </Container>
        <Card>
              <CardBody>
                  <Basic dataColors='["--vz-primary"]'/>
              </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default ObjectDetection;