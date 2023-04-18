# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create!(email: "john@example.com", password_digest: "password123")
User.create!(email: "jane@example.com", password_digest: "secret321")
User.create!(email: "mary@example.com", password_digest: "mary1234")
User.create!(email: "peter@example.com", password_digest: "peter4567")
User.create!(email: "lisa@example.com", password_digest: "lisa8901")
