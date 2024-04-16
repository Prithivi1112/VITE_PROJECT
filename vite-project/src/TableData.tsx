import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface TableDataProps {
  data: { id: number; title: string; thumbnailUrl: string, url:string }[];
}

const TableData: React.FC<TableDataProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <img src={item.thumbnailUrl} alt="image_url" style={{width:"50px", height:"50px"}} />
                
              </TableCell>
              <TableCell>
                {item.url}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
