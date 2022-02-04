# ODBC Linux Setup

**Pre-requisites -** Have an ODBC supported Database that you have access to. 

# Overview

ODBC requires a Driver Manager, and Drivers to Databases. We need to get a Driver Manager, then install Drivers for our databases, and finally connect the Driver Manager to the Driver and the Database, through configuring a Data Source Name.

# Resources

ODBC Setup - [https://blog.devart.com/installing-and-configuring-odbc-driver-on-linux.html](https://blog.devart.com/installing-and-configuring-odbc-driver-on-linux.html) 

odbcinst man page - [http://manpages.ubuntu.com/manpages/trusty/man1/odbcinst.1.html](http://manpages.ubuntu.com/manpages/trusty/man1/odbcinst.1.html) 

isql man page - [https://docs.oracle.com/cd/E88353_01/html/E37839/isql-1.html](https://docs.oracle.com/cd/E88353_01/html/E37839/isql-1.html)

# UnixODBC

UnixODBC and IODBC are the two most common ODBC Driver Managers for UNIX computers. Since most guides and applications I have seen use UnixODBC, we should use it. 

**UnixODBC Driver Manager**

There are many ways to install UnixODBC, one simple way is 

`$ sudo apt-get install unixodbc`

**odbcinst (UnixODBC)**

After installing unixodbc, you should now have the odbcinst program. odbcinst is an ODBC Installer and Uninstaller. It updates system files, and increases/decreases usage counts but does not actually copy or remove any files. Try `odbcinst` to get help. 

`odbcinst -j` prints config info. This will show you two important files: 

- ODBC Drivers config info is found in `/etc/odbcinst.ini`
- Data Sources config info is found in `/etc/odbc.ini`

# Database ODBC Drivers

**Install Database ODBC Drivers**

There are many ways to get your databases ODBC driver, and simply searching your databases name followed by odbc driver is a good place to start. Here is one way to get the postgresql odbc driver. 

`$ sudo apt-get install odbc-postgresql` 

After installing them, your `odbcinst.ini` file should contain information about them. You can quickly check with `odbcinst -q -d`, to list all drivers configured. If this file does not contain your database driver, then something isn’t right. 

# Configure Driver Manager

**Configuring the Driver Manager**

Now that you have a Driver Manager, and you have Database Drivers, you will want to configure the driver managers so that the database drivers can connect with the databases you want. We can write a configuration between each driver and a database, and we can even specify which user should be accessing that database. This is all done through Data Source Names.

**Data Source Name** 

A Data Source is the ODBC Database you want to connect with. 

A Data Source Name (DSN) is the name of a configuration which explains how to connect to that Data Source. This configuration information include the database type, name, access information, database driver, etc. 

There is a System, User, and File DSN. If you are on your own, a System DSN is probably all you need. 

The system DSN file is `/etc/odbc.ini`, which you will need to modify depending on your data source. Here is a rough example for a local database. NOTE: every data source is unique! They may require more configuration details!

```
[data_source_name]
Description = Your description
Driver = Name of your database driver - see odbcinst.ini
Database = Name of your database
Server = localhost - or servername
Port = Depends on your database
Username = “Your username”
Password = “Your password”
```

`odbcinst -q -s` should list your DSN’s

**Connect to Data Source**

 isql (UnixODBC) is a command line tool which allows the user to execute SQL commands. iusql is the same tool with built-in Unicode support.

Use `isql DSN USER PASSWORD` to connect to the data source. If your connection is successful, there will be a Connected! message, and you will be able to issue sql commands as the user. 

# Summary

Congratulations! You have now used ODBC to communicate with a database! 

You can add more databases by installing their drivers, and adding an appropriate Data Source Name. You can add more ways to access databases by changing which users are configured in the Data Source Names. 

If you have any issues, please feel free to reach out to me with questions.

Andy ~ Verus121