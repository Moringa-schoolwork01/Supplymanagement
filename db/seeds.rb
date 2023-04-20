User.create!(email: "email", password_digest: BCrypt::Password.create("123admin"))

User.create!(email: "john@example.com", password_digest: "password123")
User.create!(email: "jane@example.com", password_digest: "secret321")
User.create!(email: "mary@example.com", password_digest: "mary1234")
User.create!(email: "peter@example.com", password_digest: "peter4567")
User.create!(email: "lisa@example.com", password_digest: "lisa8901")
