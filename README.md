# Unicorn Commerce

- Node API + PostgreSQL


## Data Model

- Products table -

- Tags table

- User (Seller posts products on their store) - Has products - User to Joke (1 to many)

- Products to Tags - many to many - Multiple jokes can have multiple tags (many to many - pivot table)

- 
## Steps 

~~~
npm init -y

Regular dependencies

npm install express

npm install @prisma/client

Dev dependencies

npm install -D typescript @types/node @types/express prisma ts-node-dev

Get tsconfig.json using

npx tsc --init

~~~

## Postgres
~~~
==> psql postgres
psql (13.4, server 14.1)
WARNING: psql major version 13, server major version 14.
         Some psql features might not work.
Type "help" for help.

postgres=# \list
                                List of databases
          Name          | Owner | Encoding | Collate | Ctype | Access privileges 
------------------------+-------+----------+---------+-------+-------------------
 codesdk_development    | coder | UTF8     | C       | C     | 
 codesdk_test           | coder | UTF8     | C       | C     | 
 postgres               | coder | UTF8     | C       | C     | 
 template0              | coder | UTF8     | C       | C     | =c/coder         +
                        |       |          |         |       | coder=CTc/coder
 template1              | coder | UTF8     | C       | C     | coder=CTc/coder  +
                        |       |          |         |       | =c/coder
 unicorncms_development | coder | UTF8     | C       | C     | 
 unicorncms_test        | coder | UTF8     | C       | C     | 
(7 rows)

postgres=# CREATE DATABASE cnctr_cloud_development;

postgres=# \list
                                List of databases
          Name           | Owner | Encoding | Collate | Ctype | Access privileges 
-------------------------+-------+----------+---------+-------+-------------------
 cnctr_cloud_development | coder | UTF8     | C       | C     | 
 codesdk_development     | coder | UTF8     | C       | C     | 
 codesdk_test            | coder | UTF8     | C       | C     | 
 postgres                | coder | UTF8     | C       | C     | 
 template0               | coder | UTF8     | C       | C     | =c/coder         +
                         |       |          |         |       | coder=CTc/coder
 template1               | coder | UTF8     | C       | C     | coder=CTc/coder  +
                         |       |          |         |       | =c/coder
 unicorncms_development  | coder | UTF8     | C       | C     | 
 unicorncms_test         | coder | UTF8     | C       | C     | 
(8 rows)


postgres=# CREATE ROLE cnctrdev WITH LOGIN PASSWORD '1SW7UY&r';
CREATE ROLE

postgres=# GRANT ALL PRIVILEGES ON DATABASE cnctr_cloud_development TO cnctrdev;
GRANT

postgres=#\q


==> psql <DB_NAME> -U <DB_USER>
==> psql cnctr_cloud_development -U cnctrdev


==> psql postgres
psql (13.4, server 14.1)
WARNING: psql major version 13, server major version 14.
         Some psql features might not work.
Type "help" for help.

postgres=# ALTER ROLE cnctrdev CREATEDB;
ALTER ROLE
postgres=# \q
~~~