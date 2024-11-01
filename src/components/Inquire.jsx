// src/components/InquireNowModal.jsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const InquireNowModal = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Form submitted');
    onClose(); // Close the modal after submission
  };

  return (
    <Dialog
      open={true}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          backdropFilter: 'blur(10px)', // Apply blur effect
        },
      }}
    >
      <DialogTitle>Inquire Now</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            margin="dense"
            id="message"
            label="Message"
            type="text"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            required
          />
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InquireNowModal;
