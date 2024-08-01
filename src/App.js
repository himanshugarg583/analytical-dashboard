import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
// import SystemProcesses from './components/SystemProcesses';
// import HealthMonitoring from './components/HealthMonitoring';
// import ThreatNotifications from './components/ThreatNotifications';
// import BlockingPieChart from './components/BlockingPieChart';
// import AdvancedVisualization from './components/AdvancedVisualization';

import SystemProcesses from './component/SystemProcesses';
import HealthMonitoring from './component/HealthMonitoring';
import ThreatNotifications from './component/ThreatNotifications';
import BlockingPieChart from './component/BlockingPieChart';
import AdvancedVisualization from './component/BlockingPieChart';
import './styles.css';

const App = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Analytical Dashboard</Typography>
      </Toolbar>
    </AppBar>
    <Container>
<h2> hello</h2>
      <SystemProcesses />
      <HealthMonitoring />
      <ThreatNotifications />
      <BlockingPieChart />
      <AdvancedVisualization />
    </Container>
  </div>
);

export default App;
