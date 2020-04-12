/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
import Tabletop from 'tabletop';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from 'reactstrap';
// core components

// ##############################
// // // general variables for charts
// #############################

const chartColor = '#FFFFFF';

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    bodySpacing: 4,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest',
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10,
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        display: 0,
        ticks: {
          display: false,
          maxTicksLimit: 7,
        },
        gridLines: {
          zeroLineColor: 'transparent',
          drawTicks: false,
          display: false,
          drawBorder: false,
        },
      },
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false,
        },
        gridLines: {
          zeroLineColor: 'transparent',
          drawTicks: false,
          display: false,
          drawBorder: false,
        },
      },
    ],
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 },
  },
};

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      chartDataArr: [],
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: '1EpRdW3plcwKQn-_UrdC3VPzCvQpoP7zDXj4cfVwGY8s',
      callback: (googleData) => {
        this.setState({
          data: googleData,
          chartDataArr: this.state.chartDataArr,
        });
      },
      simpleSheet: true,
    });
  }

  render() {
    const arr = this.state.data;
    const arrLen = arr.length;

    for (let i = 0; i < arrLen; i++) {
      this.state.chartDataArr.push(arr[i]['mrr']);
    }

    console.log('updated state --->', this.state.chartDataArr);
    const dashboardShippedProductsChart = {
      data: (canvas) => {
        var ctx = canvas.getContext('2d');
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, chartColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
        gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');
        return {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              label: 'Active Users',
              borderColor: '#f96332',
              pointBorderColor: '#FFF',
              pointBackgroundColor: '#f96332',
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              backgroundColor: gradientFill,
              borderWidth: 2,
              data: this.state.chartDataArr,
            },
          ],
        };
      },
      options: gradientChartOptionsConfiguration,
    };
    return (
      <>
        {/* <PanelHeader
          size='lg'
          content={
            <Line
              data={dashboardPanelChart.data}
              options={dashboardPanelChart.options}
            />
          }
        /> */}
        <div className='content'>
          <Row>
            <Col xs={12} md={4}>
              <Card className='card-chart'>
                <CardHeader>
                  <h5 className='card-category'>Global Sales</h5>
                  <CardTitle tag='h4'>Shipped Products</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className='btn-round btn-outline-default btn-icon'
                      color='default'
                    >
                      <i className='now-ui-icons loader_gear' />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className='text-danger'>
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className='chart-area'>
                    <Line
                      data={dashboardShippedProductsChart.data}
                      options={dashboardShippedProductsChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className='stats'>
                    <i className='now-ui-icons arrows-1_refresh-69' /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            {/* <Col xs={12} md={4}>
              <Card className='card-chart'>
                <CardHeader>
                  <h5 className='card-category'>2018 Sales</h5>
                  <CardTitle tag='h4'>All products</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className='btn-round btn-outline-default btn-icon'
                      color='default'
                    >
                      <i className='now-ui-icons loader_gear' />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className='text-danger'>
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className='chart-area'>
                    <Line
                      data={dashboardAllProductsChart.data}
                      options={dashboardAllProductsChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className='stats'>
                    <i className='now-ui-icons arrows-1_refresh-69' /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className='card-chart'>
                <CardHeader>
                  <h5 className='card-category'>Email Statistics</h5>
                  <CardTitle tag='h4'>24 Hours Performance</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className='chart-area'>
                    <Bar
                      data={dashboard24HoursPerformanceChart.data}
                      options={dashboard24HoursPerformanceChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className='stats'>
                    <i className='now-ui-icons ui-2_time-alarm' /> Last 7 days
                  </div>
                </CardFooter>
              </Card>
            </Col> */}
          </Row>
          <Row>
            {/* <Col xs={12} md={6}>
              <Card className='card-tasks'>
                <CardHeader>
                  <h5 className='card-category'>Backend Development</h5>
                  <CardTitle tag='h4'>Tasks</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className='table-full-width table-responsive'>
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type='checkbox' />
                                <span className='form-check-sign' />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className='text-left'>
                            Sign contract for "What are conference organizers
                            afraid of?"
                          </td>
                          <td className='td-actions text-right'>
                            <Button
                              className='btn-round btn-icon btn-icon-mini btn-neutral'
                              color='info'
                              id='tooltip731609871'
                              type='button'
                            >
                              <i className='now-ui-icons ui-2_settings-90' />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip731609871'
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className='btn-round btn-icon btn-icon-mini btn-neutral'
                              color='danger'
                              id='tooltip923217206'
                              type='button'
                            >
                              <i className='now-ui-icons ui-1_simple-remove' />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip923217206'
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input type='checkbox' />
                                <span className='form-check-sign' />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className='text-left'>
                            Lines From Great Russian Literature? Or E-mails From
                            My Boss?
                          </td>
                          <td className='td-actions text-right'>
                            <Button
                              className='btn-round btn-icon btn-icon-mini btn-neutral'
                              color='info'
                              id='tooltip907509347'
                              type='button'
                            >
                              <i className='now-ui-icons ui-2_settings-90' />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip907509347'
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className='btn-round btn-icon btn-icon-mini btn-neutral'
                              color='danger'
                              id='tooltip496353037'
                              type='button'
                            >
                              <i className='now-ui-icons ui-1_simple-remove' />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip496353037'
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type='checkbox' />
                                <span className='form-check-sign' />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className='text-left'>
                            Flooded: One year later, assessing what was lost and
                            what was found when a ravaging rain swept through
                            metro Detroit
                          </td>
                          <td className='td-actions text-right'>
                            <Button
                              className='btn-round btn-icon btn-icon-mini btn-neutral'
                              color='info'
                              id='tooltip326247652'
                              type='button'
                            >
                              <i className='now-ui-icons ui-2_settings-90' />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip326247652'
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className='btn-round btn-icon btn-icon-mini btn-neutral'
                              color='danger'
                              id='tooltip389516969'
                              type='button'
                            >
                              <i className='now-ui-icons ui-1_simple-remove' />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip389516969'
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='now-ui-icons loader_refresh spin' /> Updated 3
                    minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col> */}
            {/* <Col xs={12} md={6}>
              <Card>
                <CardHeader>
                  <h5 className='card-category'>All Persons List</h5>
                  <CardTitle tag='h4'>Employees Stats</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className='text-primary'>
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className='text-right'>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className='text-right'>$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className='text-right'>$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className='text-right'>$56,142</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className='text-right'>$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className='text-right'>$78,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
