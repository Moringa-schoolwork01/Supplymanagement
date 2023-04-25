# db/seeds.rb
# # db/seeds.rb
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
    email: Faker::Internet.email
  )
end


10.times do
  Product.create!(
    product: Faker::Commerce.product_name,
    code: Faker::Boolean.boolean,
    name: Faker::Company.name,
    price: Faker::Number.between(from: 1, to: 1000),
    action: Faker::Commerce.promotion_code,
  )
end

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

10.times do
  Sale.create!(
    date: Faker::Date.between(from: 1.year.ago, to: Date.today),
    name: Faker::Commerce.product_name,
    price: Faker::Number.between(from: 1, to: 1000),
    discount: Faker::Number.between(from: 0, to: 200),
    total: Faker::Number.between(from: 1, to: 1000),
    payment_method: Faker::Business.credit_card_type,
    customer_id: Faker::Number.between(from: 1, to: 10),
    product_id: Faker::Number.between(from: 1, to: 10)
  )
end


Product.create!(
    {
      code: "HS#7698",
      name: "Lenovo",
      price: "150,000kshs",
    }
  )

Sale.create!(date: 4th Jan 2023, name: gucci, )