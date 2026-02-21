import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  unit: string;
};

interface EditModalProps {
  open: boolean;
  product: Product | null;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
}

export default function EditModal({
  open,
  product,
  onClose,
  onSave,
}: EditModalProps) {
  const [formData, setFormData] = useState<Product>({
    id: 0,
    name: "",
    price: "",
    unit: "",
  });

  // Load product into form when modal opens
  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (field: keyof Product, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Product</DialogTitle>

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
          onClick={() => onSave(formData)}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
