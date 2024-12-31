import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Container, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { useGetCategoriesQuery, useGetPaymentModesQuery } from '../../store/services/api';

const AddExpenseForm = () => {
  // Fetch data for categories and payment modes
  const { data: categories, error: categoriesError, isLoading: isCategoriesLoading } = useGetCategoriesQuery();
  const { data: paymentModes, error: paymentModesError, isLoading: isPaymentModesLoading } = useGetPaymentModesQuery();

  // Initialize useForm hook from React Hook Form
  const {
    register,          // To register the input fields
    handleSubmit,      // To handle the form submission
    formState: { errors }, // To get validation errors
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Add Expense
        </Typography>

        {/* ID Field */}
        <TextField
          label="ID"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('id', { required: 'ID is required' })} // Register with validation
          error={!!errors.id} // Show error if id has validation errors
          helperText={errors.id?.message} // Display error message
        />

        {/* ShopName Field */}
        <TextField
          label="ShopName"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('shopname', { required: 'ShopName is required' })}
          error={!!errors.shopname}
          helperText={errors.shopname?.message}
        />

        {/* ItemName Field */}
        <TextField
          label="ItemName"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('itemname', { required: 'ItemName is required' })}
          error={!!errors.itemname}
          helperText={errors.itemname?.message}
        />

        {/* Amount Field */}
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('amount', { required: 'Amount is required' })}
          error={!!errors.amount}
          helperText={errors.amount?.message}
        />

        {/* Location Field */}
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('location', { required: 'Location is required' })}
          error={!!errors.location}
          helperText={errors.location?.message}
        />

        {/* Category Dropdown */}
        <FormControl fullWidth margin="normal" error={!!errors.category}>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            {...register('category', { required: 'Category is required' })}
            defaultValue=""
          >
            {isCategoriesLoading ? (
              <MenuItem disabled>Loading categories...</MenuItem>
            ) : categoriesError ? (
              <MenuItem disabled>Error loading categories</MenuItem>
            ) : (
              categories?.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))
            )}
          </Select>
          {errors.category && <FormHelperText>{errors.category.message}</FormHelperText>}
        </FormControl>

        {/* Payment Mode Dropdown */}
        <FormControl fullWidth margin="normal" error={!!errors.paymentmode}>
          <InputLabel>Payment Mode</InputLabel>
          <Select
            label="Payment Mode"
            {...register('paymentmode', { required: 'Payment Mode is required' })}
            defaultValue=""
          >
            {isPaymentModesLoading ? (
              <MenuItem disabled>Loading payment modes...</MenuItem>
            ) : paymentModesError ? (
              <MenuItem disabled>Error loading payment modes</MenuItem>
            ) : (
              paymentModes?.map((mode) => (
                <MenuItem key={mode.id} value={mode.id}>
                  {mode.type}
                </MenuItem>
              ))
            )}
          </Select>
          {errors.paymentmode && <FormHelperText>{errors.paymentmode.message}</FormHelperText>}
        </FormControl>

        {/* Date Field */}
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('date', { required: 'Date is required' })}
          error={!!errors.date}
          helperText={errors.date?.message}
          InputLabelProps={{
            shrink: true, // Ensures the label is displayed properly for the date field
          }}
        />

        {/* Time Field */}
        <TextField
          label="Time"
          type="time"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('time', { required: 'Time is required' })}
          error={!!errors.time}
          helperText={errors.time?.message}
          InputLabelProps={{
            shrink: true, // Ensures the label is displayed properly for the time field
          }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AddExpenseForm;
