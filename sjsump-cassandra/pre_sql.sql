
cqlsh;

CREATE KEYSPACE SJSU WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 3}; 

Use sjsu;

Describe tables;

CREATE TABLE Post_details(
Post_id int PRIMARY KEY,
Post_title text,
Post_price varint,
Post_description text,
Post_image blob);

select Post_id,Post_title,Post_price,Post_description from Post_details;