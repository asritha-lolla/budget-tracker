import React from 'react'
import CustomTable from '../shared/CustomTable';
import AddExpenseForm from '../expense/AddExpenseForm';
import { useGetExpenseQuery } from '../../store/services/api';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'shopName',
    headerName: 'Shop name',
    width: 150,
    editable: true,
  },
  {
    field: 'itemName',
    headerName: 'Item name',
    width: 150,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'location',
    headerName: 'Location',
    type: 'string',
    width: 110,
    editable: true,
  },
];

const rows = [
  // { id: 1, shopName: 'Asritha', itemName: 'Jon', amount: 14, location: 'Vizag' },
  // { id: 2, shopName: 'Srikanth', itemName: 'Cersei', amount: 31, location: 'Vizag' },
  // { id: 3, shopName: 'Lannister', itemName: 'Jaime', amount: 31, location: 'Vizag' },
  // { id: 4, shopName: 'Stark', itemName: 'Arya', amount: 11, location: 'Vizag' },
  // { id: 5, shopName: 'Targaryen', itemName: 'Daenerys', amount: null, location: 'Vizag' },
  // { id: 6, shopName: 'Melisandre', itemName: null, amount: 150, location: 'Vizag' },
  // { id: 7, shopName: 'Clifford', itemName: 'Ferrara', amount: 44, location: 'Vizag' },
  // { id: 8, shopName: 'Frances', itemName: 'Rossini', amount: 36, location: 'Vizag' },
  // { id: 9, shopName: 'Roxie', itemName: 'Harvey', amount: 65, location: 'Vizag' },
];

const Expenses = () => {

  const {data: expenses, error: expenseError, isLoading: isExpenseLoading}= useGetExpenseQuery();

  return (
    <>
      <AddExpenseForm />
      <CustomTable rows={rows} columns={columns} />

    </>
  )
}

export default Expenses