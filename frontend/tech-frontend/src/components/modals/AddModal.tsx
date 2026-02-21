import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

interface AddModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (newProduct: { name: string; price: string; unit: string }) => void;
}

export default function AddModal({ open, onClose, onSave }: AddModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    unit: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    setFormData({ name: "", price: "", unit: "" }); // reset after save
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add New Product</DialogTitle>

      <DialogContent>
        <TextField
          label="Product Name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <TextField
          label="Price"
          fullWidth
          margin="normal"
          value={formData.price}
          onChange={(e) => handleChange("price", e.target.value)}
        />

        <TextField
          label="Unit"
          fullWidth
          margin="normal"
          value={formData.unit}
          onChange={(e) => handleChange("unit", e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#0a2a43" }}
          onClick={handleSave}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
