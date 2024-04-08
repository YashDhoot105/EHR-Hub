import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import "../styles/book_appointment.css";


const BookAppointment = () => {
  const [appointments, setAppointments] = React.useState([
    {
      id: 1,
      doctorName: 'Dr. John Doe',
      specialization: 'Cardiology',
      fees: 100,
      phoneNumber: '555-1234',
      date: new Date().toISOString(),
    },
    {
      id: 2,
      doctorName: 'Dr. Jane Smith',
      specialization: 'Pediatrics',
      fees: 80,
      phoneNumber: '555-5678',
      date: new Date().toISOString(),
    },
    // Add more sample data as needed
  ]);

  const handleBookAppointment = (rowData) => {
    // Handle book appointment logic here
    console.log('Book appointment for:', rowData);
  };

  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
        filterVariant: 'text',
      },
      {
        header: 'Doctor Name',
        accessorKey: 'doctorName',
        filterVariant: 'text',
      },
      {
        header: 'Specialization',
        accessorKey: 'specialization',
        filterVariant: 'text',
      },
      {
        header: 'Fees',
        accessorKey: 'fees',
        filterVariant: 'range',
        filterFn: 'between',
      },
      {
        header: 'Phone Number',
        accessorKey: 'phoneNumber',
        filterVariant: 'text',
      },
      {
        header: 'Date',
        accessorKey: 'date',
        filterVariant: 'date',
      },
      {
        header: 'Book Appointment',
        accessorKey: 'bookAppointment',
        Cell: ({ cell }) => (
          <button className='book_appointment_button' onClick={() => handleBookAppointment(cell.row.original)}>
            Book Appointment
          </button>
        ),
      },
    ],
    []
  );

  const table = useMemo(() => (
    <MaterialReactTable
      columns={columns}
      data={appointments}
      initialState={{ showColumnFilters: false }}
    />
  ), [columns, appointments]);

  return (
    <div>
      <h2 className="mt-4 mb-3 text-center mb-5 mt-3 book_appointment_heading">Book Appointment</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          {table}
        </LocalizationProvider>    
    </div>
  );
};

export default BookAppointment;