

# Sale.destroy_all
# Customer.destroy_all
# Product.destroy_all



# User.create!(email: "john@example.com", password_digest: "password123")
# User.create!(email: "jane@example.com", password_digest: "secret321")
# User.create!(email: "mary@example.com", password_digest: "mary1234")
# User.create!(email: "peter@example.com", password_digest: "peter4567")
# User.create!(email: "lisa@example.com", password_digest: "lisa8901")


# Create 10 customers

# Create 10 fake customers
10.times do
  full_name = Faker::Name.name
  contact = Faker::PhoneNumber.phone_number
  email = Faker::Internet.email
  Customer.create(full_name: full_name, contact: contact, email: email)
end

# create 10 orders records
10.times do
  Order.create(
    quantity: Faker::Number.between(from: 1, to: 100),
    supplier_name: Faker::Company.name,
    buying_price: Faker::Number.decimal(l_digits: 2),
    total_price: Faker::Number.decimal(l_digits: 2)
  )
end

# create 10  product records
10.times do
  Product.create!(
    code: Faker::Number.unique.between(from: 100, to: 999),
    name: Faker::Commerce.product_name,
    price: Faker::Number.between(from: 1, to: 1000),
    quantity: Faker::Number.between(from: 1, to: 100),
  )
end

# create 10 sales records
10.times do
  Sale.create(
    total: Faker::Number.between(from: 10, to: 100),
    quantity: Faker::Number.between(from: 1, to: 10),
    # payment_method: Faker::Commerce.payment_method,
    product_id: Faker::Number.between(from: 1, to: 20),
    customer_id: Faker::Number.between(from: 1, to: 20)
  )
end


# Create 10 fake users
10.times do
  User.create!(
    email: Faker::Internet.email,
    password: Faker::Internet.password(min_length: 8)
  )
end