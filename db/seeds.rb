# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(user_email: "john@example.com", user_password: "password123")
User.create(user_email: "jane@example.com", user_password: "secret321")
User.create(user_email: "mary@example.com", user_password: "mary1234")
User.create(user_email: "peter@example.com", user_password: "peter4567")
User.create(user_email: "lisa@example.com", user_password: "lisa8901")
