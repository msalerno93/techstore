import mysql.connector

cnx = mysql.connector.connect(user='root',
                                password= 'ApexLegends5293!',
                                host= '127.0.0.1', # or the host IP address
                                database= 'tech_app')

cursor = cnx.cursor()
query = 'SELECT * FROM tech_app.products'
cursor.execute(query)

for (product_id, name, unit_id, price_per_unit) in cursor:
    print(product_id, name, unit_id, price_per_unit)
cnx.close()