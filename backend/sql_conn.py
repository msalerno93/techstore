import mysql.connector

__cnx = None

def get_sql_connection():
    global __cnx
    if __cnx is None:
        __cnx = mysql.connector.connect(user='root',
                                    password= 'ApexLegends5293!',
                                    host= '127.0.0.1', # or the host IP address
                                    database= 'tech_app')
        return __cnx