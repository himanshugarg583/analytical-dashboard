import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const threats = [
  { message: 'Threat 1 detected', level: 'High' },
  { message: 'Threat 2 detected', level: 'Low' },
  // Add more dummy threats
];

const ThreatNotifications = () => (
  <div>
    <h2>Threat Notifications</h2>
    <List>
      {threats.map((threat, index) => (
        <ListItem key={index}>
          <ListItemText primary={`${threat.message} - Level: ${threat.level}`} />
        </ListItem>
      ))}
    </List>
  </div>
);

export default ThreatNotifications;
