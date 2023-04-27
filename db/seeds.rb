

# Sale.destroy_all
# Customer.destroy_all
# Product.destroy_all



# User.create!(email: "john@example.com", password_digest: "password123")
# User.create!(email: "jane@example.com", password_digest: "secret321")
# User.create!(email: "mary@example.com", password_digest: "mary1234")
# User.create!(email: "peter@example.com", password_digest: "peter4567")
# User.create!(email: "lisa@example.com", password_digest: "lisa8901")


# Create 10 customers
100.times do
  Customer.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    # contact: Faker::Internet.contact,
    email: Faker::Internet.email,
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



10.times do
  Sale.create!(
    date: Faker::Date.between(from: 1.year.ago, to: Date.today),
    name: Faker::Commerce.product_name,
    price: Faker::Number.between(from: 1, to: 1000),
    discount: Faker::Number.between(from: 0, to: 200),
    total: Faker::Number.between(from: 1, to: 1000),
    payment_method: Faker::Business.credit_card_type,
    customer_id: Faker::Number.between(from: 100, to: 150),
    product_id: Faker::Number.between(from: 1, to: 10)
  )
end

10.times do
  Order.create!(
    quantity: Faker::Number.between(from: 1, to: 100),
    total_sales: Faker::Number.between(from: 100, to: 10000),
    supplier_name: Faker::Company.name
  )
end