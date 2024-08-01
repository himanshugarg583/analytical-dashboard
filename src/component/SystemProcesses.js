import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SystemProcesses = () => {
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    const fetchProcesses = () => {
      setProcesses([
        { name: 'Process 1', status: 'Running' },
        { name: 'Process 2', status: 'Idle' },
        // Add more dummy processes
      ]);
    };
    fetchProcesses();
    const interval = setInterval(fetchProcesses, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Process Name</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {processes.map((process, index) => (
            <TableRow key={index}>
              <TableCell>{process.name}</TableCell>
              <TableCell>{process.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SystemProcesses;
