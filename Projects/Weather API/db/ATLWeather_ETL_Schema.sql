drop database if exists atlweather_db;
create database atlweather_db;
use atlweather_db;

drop table if exists atlweather_table;
create table atlweather_table (
	-- id INT,
    base VARCHAR(100),
    cloud VARCHAR(100),
    cod VARCHAR(100),
    lat VARCHAR(100),
    lon VARCHAR(100),
    dt VARCHAR(100),
    weatherid VARCHAR(100),
    humidity VARCHAR(100),
    pressure VARCHAR(100),
    temp VARCHAR(100),
    temp_max VARCHAR(100),
    temp_min VARCHAR(100),
    cityname VARCHAR(100),
    country VARCHAR(100),
    sysid VARCHAR(100),
    sysmessage VARCHAR(100),
    sunrise VARCHAR(100),
    sunset VARCHAR(100),
    systype VARCHAR(100),
    visibility VARCHAR(100),
    wind_degree VARCHAR(100),
    wind_speed VARCHAR(100),
    api_date VARCHAR(100)
    );

SELECT * FROM atlweather_table;