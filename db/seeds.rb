

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
    product: Faker::Commerce.product_name,
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
puts "sales seeded"



# products = [
#     {
#         "product":"12-04-2023",
#         "code":"GYT556",
#         "name":"Red Bull",
#         "price":$100,
#         "action":"update"

#     },   
#      {
#       "product":"12-04-2023",
#       "code":"RDT239003",
#       "name":"Blue Band",
#       "price":$100,
#       "action":"update"

#     },
# ]
# products.each do |product|
#   Product.create!(product)
# end

# sales = [
#     {
#         "date":"12-04-2023",
#         "name":"Red Bull",
#         "price":$100,
#         "discount":$5,
#         "total":$95,
#         "payment_method":"mpesa"

#     },
#     {
#       "date":"13-03-2023",
#         "name":"Ginger Bisquit",
#         "price":$300,
#         "discount":$10,
#         "total":$290,
#         "payment_method":"mpesa"

#     },
#     {
#       "date":"14-03-2023",
#         "name":"Fanta soda",
#         "price":$2000,
#         "discount":$30,
#         "total":$1970,
#         "payment_method":"mpesa"

#     },
#     {
#       "date":"15-03-2023",
#       "name":"Indomie",
#       "price":$1000,
#       "discount":$5,
#       "total":$995,
#       "payment_method":"mpesa"

#     },
#     {
#       "date":"16-03-2023",
#       "name":"soko flour",
#       "price":$800,
#       "discount":$5,
#       "total":$795,
#       "payment_method":"mpesa"

#     },
#     {
#       "date":"16-03-2023",
#       "name":"Ariel",
#       "price":$600,
#       "discount":$5,
#       "total":$595,
#       "payment_method":"mpesa"

#     },
#     {
#       "date":"17-03-2023",
#       "name":"Happic detergent",
#       "price":$300,
#       "discount":$5,
#       "total":$295,
#       "payment_method":"mpesa"

#     },
#     {
#       "date":"18-03-2023",
#         "name":"Blue Band",
#         "price":$1200,
#         "discount":$5,
#         "total":$1195,
#         "payment_method":"mpesa"

#     },
#     {
#       "date":"19-03-2023",
#       "name":"Peanut Butter",
#       "price":$400,
#       "discount":$5,
#       "total":$395,
#       "payment_method":"mpesa"

#     },
#     {
#       "date":"21-03-2023",
#       "name":"Cooking Oil",
#       "price":$2500,
#       "discount":$5,
#       "total":$2495,
#       "payment_method":"mpesa"

#     },
# ]

# sales.each do |sale|
#     Sale.create!(sale)
# end


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

Sale.create!(date: 4th Jan 2023, name: gucci, )
