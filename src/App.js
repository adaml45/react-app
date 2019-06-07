import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import { faSortAmountDown} from '@fortawesome/free-solid-svg-icons';
import { faGripHorizontal} from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { faIdCard} from '@fortawesome/free-solid-svg-icons';
import { faThLarge} from '@fortawesome/free-solid-svg-icons';
import { faTable} from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faSortAlphaUp} from '@fortawesome/free-solid-svg-icons';
import { faSortAlphaDown} from '@fortawesome/free-solid-svg-icons';
import { faEdit} from '@fortawesome/free-solid-svg-icons';

import './App.css';

import Header from './pages/Header'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
        </div>
      </Router>
    );
  }
}

library.add(faBell)
library.add(faSmile)
library.add(faTimes)
library.add(faAngleDoubleRight)
library.add(faSortAmountDown)
library.add(faGripHorizontal)
library.add(faSignOutAlt)
library.add(faIdCard)
library.add(faThLarge)
library.add(faTable)
library.add(faSearch)
library.add(faSortAlphaUp)
library.add(faSortAlphaDown)
library.add(faEdit)

export default App;
