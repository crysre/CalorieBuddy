import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FoodLibraryStore } from '../store/foodStores';

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

export default function BasicTable() {


      const foodLibraryStore= FoodLibraryStore()
      // if(foodLibraryStore){
      //   foodLibraryStore.map((food)=>{
      //     rows.push(food.name, food.calories, food.protein,food.carbs, food.fat,food.serving,   )
      //   })
      // }


  return (

    
    <TableContainer  component={Paper} sx={{
    backgroundColor: 'transparent', 
    boxShadow: 'none',             
  }} >
      <Table  sx={{ minWidth: 650, 
    '& .MuiTableCell-root': {
      color: '#f4f1ce'}  }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell align="center">Calories&nbsp;(kcal)</TableCell>
            <TableCell align="center">Protein&nbsp;(g) </TableCell>
            <TableCell align="left">Carbs&nbsp;(g)</TableCell>
            <TableCell align="center">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="Center">{row.carbs}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="Center">{row.carbs}</TableCell>
              
            </TableRow>
          ))} */}

          {
            foodLibraryStore?.foods?(
              foodLibraryStore.foods.map((food)=>{
                return <TableRow
              key={food.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {food.name}
              </TableCell>
              <TableCell align="center">{food.calories}</TableCell>
              <TableCell align="center">{food.protein}</TableCell>
              <TableCell align="Center">{food.carbs}</TableCell>
              <TableCell align="center">{food.fat}</TableCell>
              <TableCell align="right">{food.carbs}</TableCell>
              
            </TableRow>
                  
                
              })
            ):(<div>Loading...</div>)
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
