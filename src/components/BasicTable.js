import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {

    const tableTittles = (data) => {
        let content = []
        if (data && data.length > 0) {
            let keys = Object.keys(data[0])            
            keys.map((key) => {
                content.push(<TableCell key={key} align="right">{key}</TableCell>)
            })
        }
        return content
    }

    const tableRows = (data) => {
        let rows = [];
        
        if (data && data.length > 0) {
          data.forEach((rowData) => {
            let cells = [];
            
            for (const cell in rowData) {
              cells.push(
                <TableCell key={cell} align="right">
                  {rowData[cell]}
                </TableCell>
              );
            }
            
            rows.push(<TableRow key={rowData.id}>{cells}</TableRow>);
          });
        }
        
        return rows;
      };
      

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                {tableTittles(props.data)}                
            </TableRow>
            </TableHead>
            <TableBody>
                {tableRows(props.data)}
            </TableBody>
        </Table>
        </TableContainer>
    );
}