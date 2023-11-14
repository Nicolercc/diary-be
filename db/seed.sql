\c diary_dev;

INSERT INTO users (username, email, password) VALUES
  ('user1', 'user1@example.com', 'hashed_password_1'),
  ('user2', 'user2@example.com', 'hashed_password_2');


INSERT INTO diary_entries (user_id, title, content, mood, creation_date, is_private) VALUES
  (1, 'Entry 1', 'Content of entry 1', 'Happy', '2023-01-01T12:00:00Z', true),
  (1, 'Entry 2', 'Content of entry 2', 'Sad', '2023-01-02T14:30:00Z', false),
  (2, 'Entry 3', 'Content of entry 3', 'Neutral', '2023-01-03T09:45:00Z', true);
