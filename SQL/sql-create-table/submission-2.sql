



create table videos(
    id integer PRIMARY KEY,
    name text,
    created_at date,
    published boolean DEFAULT FALSE
);



-- Do not modify below this line --
SELECT table_name, column_name, data_type
FROM information_schema.columns
WHERE table_name = 'videos';
