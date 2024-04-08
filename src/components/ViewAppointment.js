import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import "../styles/view_appointment.css";


const ViewAppointment = () => {
  const handleViewAppointment = (rowData) => {
    // Handle view appointment logic here
    console.log('View appointment for:', rowData);
  };

  const columns = useMemo(
    () => [
      {
        header: 'Patient ID',
        accessorKey: 'patientId',
        filterVariant: 'text',
      },
      {
        header: 'Patient Name',
        accessorKey: 'patientName',
        filterVariant: 'text',
      },
      {
        header: 'Phone Number',
        accessorKey: 'phoneNumber',
        filterVariant: 'text',
      },
      {
        header: 'Reason',
        accessorKey: 'reason',
        filterVariant: 'text',
      },
      {
        header: 'Date',
        accessorKey: 'date',
        filterVariant: 'date',
      },
      {
        header: 'View Appointment',
        accessorKey: 'viewAppointment',
        Cell: ({ cell }) => (
          <button className='view_appointment_button' onClick={() => handleViewAppointment(cell.row.original)}>
            Cancel Appointment
          </button>
        ),
      },
    ],
    []
  );

  const appointments = [
    {
      patientId: 1,
      patientName: 'John Doe',
      phoneNumber: '555-1234',
      reason: 'Checkup',
      date: new Date().toISOString(),
    },
    {
      patientId: 2,
      patientName: 'Jane Smith',
      phoneNumber: '555-5678',
      reason: 'Follow-up',
      date: new Date().toISOString(),
    },
    // Add more sample data as needed
  ];

  return (
    <div>
      <h2 className="mt-4 mb-3 text-center mb-5 mt-3 view_appointment_heading">View Appointment</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MaterialReactTable
          columns={columns}
          data={appointments}
          initialState={{ showColumnFilters: false }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default ViewAppointment;
