from flask import Flask, request, jsonify
import products_dao
from sql_conn import get_sql_connection

app = Flask(__name__)

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
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    print("Starting server...")
    app.run(port=5000, debug=True)