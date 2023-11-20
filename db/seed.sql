\c diary_dev;

-- INSERT INTO users (username, email, password) VALUES
--   ('user1', 'user1@example.com', 'hashed_password_1'),
--   ('user2', 'user2@example.com', 'hashed_password_2');


INSERT INTO diary_entries (title, content, mood, creation_date, is_private) VALUES
  ('A Moment of Bliss', 'Today, I witnessed a breathtaking sunset that filled my soul with tranquility and gratitude. The colors painted across the sky seemed to echo the warmth I felt within. It reminded me of the beauty that exists in simplicity.', 'Grateful', '2023-02-15T18:45:00Z', true),
  ('Navigating Life''s Challenges', 'Facing challenges at work has been overwhelming, and it feels like the weight of the world is on my shoulders. Im reminding myself to breathe and take one step at a time. In these moments, I find strength in acknowledging my vulnerabilities.', 'Stressed', '2023-02-18T10:30:00Z', false),
  ('A Heartfelt Conversation', 'Spent the evening talking to an old friend. The depth of our conversation allowed us to share our fears, dreams, and everything in between. Its refreshing to have someone who understands without judgment.', 'Connected', '2023-02-20T21:15:00Z', true),
  ('Lost in a Good Book', 'Escaped reality today by diving into a captivating novel. The characters became my companions, and their stories provided a welcome distraction. Books have a magical way of transporting us to different worlds.', 'Engaged', '2023-02-22T14:00:00Z', false),
  ('Reflecting on Growth', 'Taking a moment to reflect on my personal growth. Its empowering to recognize the progress made, no matter how small. Each step forward is a victory, and Im learning to appreciate the journey.', 'Empowered', '2023-02-25T08:00:00Z', true);
