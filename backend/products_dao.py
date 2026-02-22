from sql_conn import get_sql_connection

from sql_conn import get_sql_connection
def get_all_products(connection):

    cursor = connection.cursor()
    query = ("SELECT products.product_id, products.name, products.unit_id, products.price_per_unit, unit_measure.unit_name "
                "FROM tech_app.products inner join tech_app.unit_measure on products.unit_id=unit_measure.unit_id;")
    cursor.execute(query)

    response = []

    for (product_id, name, unit_id, price_per_unit, unit_name) in cursor:
        response.append({
            "product_id": product_id,
            "name": name,
            "unit_id": unit_id,
            "price_per_unit": price_per_unit,
            "unit_name": unit_name
        })
    return response

def add_product(connection, product):
    cursor = connection.cursor()
    query = ("INSERT INTO tech_app.products (name, unit_id, price_per_unit) "
            "VALUES (%s, %s, %s)")
    data = (product['name'], product['unit_id'], product['price_per_unit'])
    cursor.execute(query, data)
    connection.commit()
    return cursor.lastrowid

def delete_order_details_by_product(connection, product_id):
    cursor = connection.cursor()
    query = "DELETE FROM tech_app.order_details WHERE product_id = %s"
    cursor.execute(query, (product_id,))
    connection.commit()

def delete_product(connection, product_id):
    cursor = connection.cursor()
    query = ("DELETE FROM tech_app.products WHERE product_id = %s")
    data = (product_id,)
    cursor.execute(query, data)
    connection.commit()
    return cursor.rowcount

def update_product(connection, product_id, product):
    cursor = connection.cursor()
    query = ("UPDATE tech_app.products "
            "SET name = %s, unit_id = %s, price_per_unit = %s "
            "WHERE product_id = %s")
    data = (product['name'], product['unit_id'], product['price_per_unit'], product_id)
    cursor.execute(query, data)
    connection.commit()
    return cursor.rowcount
if __name__ == "__main__":
    connection = get_sql_connection()
    print(get_all_products(connection))