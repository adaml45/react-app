import React, { Component } from 'react';
import Graph from "./components/Graph";


class Home extends Component {
  
  render() {
  
    return (
        <div className="wrapper">
          <div className=" container-fluid above graphs">
          <h5>Project Dashboard</h5>
          <div className="row" style={{backgroundColor: '#f8f9fa',borderRadius: '5px',padding: '10px'}}>
            <div className="col-6">
            <Graph
              title="Bar"
              type="bar"
              data={{
                labels: [
                  '12am-3am',
                  '3am-6am',
                  '6am-9am',
                  '9am-12pm',
                  '12pm-3pm',
                  '3pm-6pm',
                  '6pm-9pm',
                  '9pm-12am'
                ],
              datasets: [
              {
                name: 'Some Data',
                values: [25, 40, 30, 35, 8, 52, 17, -4]
              },
              {
                name: 'Another Set',
                values: [25, 50, -10, 15, 18, 32, 27, 14]
              },
              {
                name: 'Yet Another',
                values: [15, 20, -3, -15, 58, 12, -17, 37]
              }
            ]
          }}
        />
            </div>
            <div className="col-6">
            <Graph
          title="Line"
          type="line"
          data={{
            labels: [
              '12am-3am',
              '3am-6am',
              '6am-9am',
              '9am-12pm',
              '12pm-3pm',
              '3pm-6pm',
              '6pm-9pm',
              '9pm-12am'
            ],
            datasets: [
              {
                name: 'Some Data',
                values: [25, 40, 30, 35, 8, 52, 17, -8]
              },
              {
                name: 'Another Set',
                values: [25, 50, -10, 15, 18, 32, 27, 14]
              },
              {
                name: 'Yet Another',
                values: [15, 20, -3, -15, 58, 12, -17, 37]
              }
            ]
          }}
        />
            </div>
            <div className="col-6">
            <Graph
          title="Pie"
          type="pie"
          data={{
            labels: [
              '12am-3am',
              '3am-6am',
              '6am-9am',
              '9am-12pm',
              '12pm-3pm',
              '3pm-6pm',
              '6pm-9pm',
              '9pm-12am'
            ],
            datasets: [
              {
                name: 'Some Data',
                values: [25, 40, 30, 35, 8, 52, 17, -4]
              },
              {
                name: 'Another Set',
                values: [25, 50, -10, 15, 18, 32, 27, 14]
              },
              {
                name: 'Yet Another',
                values: [15, 20, -3, -15, 58, 12, -17, 37]
              }
            ]
          }}
        />
            </div>
            <div className="col-6">
            <Graph
              title="Stack"
              type="bar"
              stacked
              data={{
                labels: [
                  '1am-1am',
                  '3am-6am',
                  '6am-9am',
                ],
              datasets: [
              {
                name: 'Some Data',
                values: [0, 40, 30 ]
              },
              {
                name: 'Another Set',
                values: [25, 50, -10 ]
              },
              {
                name: 'Yet Another',
                values: [15, 20, -3]
              }
            ]
          }}
        />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;