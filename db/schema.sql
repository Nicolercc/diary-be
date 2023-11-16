DROP DATABASE IF EXISTS diary_dev;
CREATE DATABASE diary_dev;

\c diary_dev;

-- CREATE TABLE users (
--   user_id SERIAL PRIMARY KEY,
--   username VARCHAR(100) NOT NULL,
--   email VARCHAR(255) NOT NULL UNIQUE,
--   password VARCHAR(255) NOT NULL,
--   created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
-- );

DROP TABLE IF EXISTS diary_entries;

CREATE TABLE diary_entries (
  entry_id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  mood VARCHAR(70),
  creation_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  is_private BOOLEAN DEFAULT true
);