from flask import Flask, request, jsonify
from flask_cors import CORS
import products_dao
from sql_conn import get_sql_connection

app = Flask(__name__)
CORS(app)

connection = get_sql_connection()

# Test endpoint to verify server is running
@app.route('/home')
def home():
    return "Hello, World!"

# Endpoint to get all products
@app.route('/products', methods=['GET'])
def get_products():
    products = products_dao.get_all_products(connection)
    response = jsonify(products)
    return response

@app.route('/products/<int:product_id>', methods=['DELETE']) 
def delete_product(product_id):
    products_dao.delete_order_details_by_product(connection, product_id) 
    products_dao.delete_product(connection, product_id) 
    return jsonify({"success": True})

if __name__ == '__main__':
    print("Starting server...")
    app.run(port=5000, debug=True)