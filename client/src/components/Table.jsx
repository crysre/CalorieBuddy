import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FoodLibraryStore } from '../store/foodStores';





export default function BasicTable() {

  const foods = FoodLibraryStore((state) => state.foods);

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Table sx={{ minWidth: 650, '& .MuiTableCell-root': { color: '#f4f1ce' } }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Calories</TableCell>
            <TableCell align="center">Protein</TableCell>
            <TableCell align="center">Carbs</TableCell>
            <TableCell align="center">Fat</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {!foods ? (
            <TableRow>
              <TableCell>Loading...</TableCell>
            </TableRow>
          ) : (
            foods.map((food) => (
              <TableRow key={food.name}>
                <TableCell>{food.name}</TableCell>
                <TableCell align="center">{food.calories}</TableCell>
                <TableCell align="center">{food.protein}</TableCell>
                <TableCell align="center">{food.carbs}</TableCell>
                <TableCell align="center">{food.fat}</TableCell>
                <TableCell align="right">—</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
