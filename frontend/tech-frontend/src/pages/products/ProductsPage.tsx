import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";

import EditModal from "../../components/modals/EditModal";
import type { Product } from "../../components/modals/EditModal";
import AddModal from "../../components/modals/AddModal";

import { getAllProducts } from "../../requests/GetAllProducts";
import { deleteProduct } from "../../requests/DeleteProduct";

export default function ProductsPage() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  const [products, setProducts] = useState<Product[]>([]);

  // Load products from backend
  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to load products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);
    setOpenEdit(true);
  };

  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 6,
        color: "white",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        Products
      </Typography>

      {/* Add Product Button */}
      <Button
        variant="contained"
        size="large"
        onClick={() => setOpenAdd(true)}
        sx={{
          backgroundColor: "#0a2a43",
          fontWeight: "bold",
          borderRadius: "12px",
          px: 4,
          py: 1.5,
          mb: 4,
          "&:hover": {
            backgroundColor: "#0d3554",
          },
        }}
      >
        Add Product
      </Button>

      {/* Products Table */}
      <TableContainer
        component={Paper}
        sx={{
          width: "80%",
          maxWidth: "900px",
          backgroundColor: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Product ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Price</strong></TableCell>
              <TableCell><strong>Unit</strong></TableCell>
              <TableCell align="right"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((p) => (
              <TableRow key={p.product_id}>
                <TableCell>{p.product_id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>${p.price_per_unit}</TableCell>
                <TableCell>{p.unit_name}</TableCell>

                <TableCell align="right">
                  <IconButton onClick={() => handleEditClick(p)}>
                    <EditIcon sx={{ color: "#0a2a43" }} />
                  </IconButton>

                  <IconButton
                    onClick={() => {
                      setProductToDelete(p);
                      setOpenDelete(true);
                    }}
                  >
                    <DeleteIcon sx={{ color: "darkred" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Modal */}
      <AddModal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSave={(newProduct) => {
          console.log("Add product:", newProduct);
          setOpenAdd(false);
          fetchProducts(); // refresh list after adding
        }}
      />

      {/* Edit Modal */}
      <EditModal
        open={openEdit}
        product={selectedProduct}
        onClose={() => setOpenEdit(false)}
        onSave={(updatedProduct) => {
          console.log("Updated product:", updatedProduct);
          setOpenEdit(false);
          fetchProducts(); // refresh list after editing
        }}
      />

      {/* Delete Modal */}
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)} fullWidth maxWidth="xs">
        <DialogTitle
          sx={{
            fontWeight: "bold",
            color: "#0a2a43",
            textAlign: "center",
          }}
        >
          Are you sure?
        </DialogTitle>

        <DialogContent
          sx={{
            textAlign: "center",
            fontSize: "1.1rem",
            color: "#0a2a43",
            pb: 1,
          }}
        >
          Are you sure you want to delete this product?
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            onClick={() => setOpenDelete(false)}
            sx={{
              fontWeight: "bold",
              borderRadius: "12px",
              px: 3,
              py: 1,
              color: "#0a2a43",
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#920305",
              fontWeight: "bold",
              borderRadius: "12px",
              px: 3,
              py: 1,
              "&:hover": {
                backgroundColor: "#ad0909",
              },
            }}
            onClick={async () => {
              if (!productToDelete) return;

              try {
                await deleteProduct(productToDelete.product_id);
                console.log("Deleted product:", productToDelete.product_id);
                setOpenDelete(false);
                fetchProducts(); // refresh list after deleting
              } catch (error) {
                console.error("Failed to delete product:", error);
              }
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
