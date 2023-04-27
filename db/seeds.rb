# db/seeds.rb
# 10.times do
#   Customer.create(
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     contact: Faker::PhoneNumber.cell_phone.to_i,
#     email: Faker::Internet.email
#   )
# end


# Sale.destroy_all
# Customer.destroy_all
# Product.destroy_all



# User.create!(email: "john@example.com", password_digest: "password123")
# User.create!(email: "jane@example.com", password_digest: "secret321")
# User.create!(email: "mary@example.com", password_digest: "mary1234")
# User.create!(email: "peter@example.com", password_digest: "peter4567")
# User.create!(email: "lisa@example.com", password_digest: "lisa8901")


# Create 10 customers
10.times do
  Customer.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    contact: Faker::PhoneNumber.cell_phone.to_i,
    email: Faker::Internet.email
  )
end
puts "customer seeded"

10.times do
  Product.create!(
    product: Faker::Commerce.product_name,
    code: Faker::Boolean.boolean,
    name: Faker::Company.name,
    price: Faker::Number.between(from: 1, to: 1000),
    action: Faker::Commerce.promotion_code,
  )
end
puts "product seeded"

# Create 10 orders for each customer
Customer.all.each do |customer|
  10.times do
    customer.orders.create!(
      date: Faker::Date.between(from: 1.year.ago, to: Date.today),
      time: Faker::Time.between(from: Time.now - 1.day, to: Time.now, format: :default),
      product_sold: Faker::Commerce.product_name,
      price: Faker::Commerce.price(range: 0..100.0, as_string: true),
      quantity: Faker::Number.between(from: 1, to: 10),
      total_sales: Faker::Number.between(from: 50, to: 500)
    )
  end
end
puts "orders seeded"


10.times do
  Sale.create!(
    date: Faker::Date.between(from: 1.year.ago, to: Date.today),
    name: Faker::Commerce.product_name,
    price: Faker::Number.between(from: 1, to: 1000),
    discount: Faker::Number.between(from: 0, to: 200),
    total: Faker::Number.between(from: 1, to: 1000),
    payment_method: Faker::Business.credit_card_type,
    customer_id: Faker::Number.between(from: 80, to: 90),
    product_id: Faker::Number.between(from: 80, to: 90)
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


