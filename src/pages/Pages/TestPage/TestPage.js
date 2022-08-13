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
  UncontrolledDropdown
} from "reactstrap";
import BreadCrumb from '../../../Components/Common/BreadCrumb';
//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Link } from "react-router-dom";

const TestPage = () => {
    document.title="TestPage | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="TestPagess" pageTitle="Pages" />
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
                      <h6> <span className="font-weight-bold font-italic">5</span> secs</h6>
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
                        <Card className="height-width">
                            <CardHeader>
                              <h4 className="card-title mb-0">Example</h4>
                            </CardHeader>
                            <CardBody>
                                <div className="live-preview">
                                    {/* <!-- 16:9 aspect ratio --> */}
                                    <div className="ratio ratio-16x9">
                                        <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
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
                      <h6> <span className="font-weight-bold font-italic">5</span> secs</h6>
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
          </div>
        </Container>
      </div>
      
      

    </React.Fragment>
  );
};

export default TestPage;