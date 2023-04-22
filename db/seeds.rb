User.create!(email: "email", password_digest: BCrypt::Password.create("123admin"))

User.create!(email: "john@example.com", password_digest: "password123")
User.create!(email: "jane@example.com", password_digest: "secret321")
User.create!(email: "mary@example.com", password_digest: "mary1234")
User.create!(email: "peter@example.com", password_digest: "peter4567")
User.create!(email: "lisa@example.com", password_digest: "lisa8901")

Product.create!(
    {
      code: "HS#7698",
      name: "Lenovo",
      price: "150,000kshs",
    }
  )

Sale.create!(date: 4th Jan 2023, name: gucci, )