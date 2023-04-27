
class ReportsController < ApplicationController
    # showing total sales for each product
    def product_sales_report
      products = Product.joins(:sales).group(:name).sum(:total)
      # This retrieves the sum of the total sales for each product name
      
      sales_data = products.map { |name, total| { product_name: name, total_sales: total } }
      # This creates an array of hashes with product name and total sales
      
      sorted_sales_data = sales_data.sort_by { |sales| sales[:total_sales] }.reverse
      # This sorts the sales data array by total sales in descending order
      
      render json: sorted_sales_data

    end
 
                   # top 5 products
        def top_products
          @products = Product.joins(:sales).select("products.*, SUM(sales.total) as total_sales").group("products.id").order("total_sales DESC").limit(5)
          render json: @products, only: [ :name,], methods: :total_sales
        end
        def weekly_report
  # Calculate the start date and end date for the last week
  end_date = Date.today
  start_date = end_date - 1.week
  
  # Query for all sales records created between start_date and end_date
  sales = Sale.where(created_at: start_date.beginning_of_day..end_date.end_of_day)
  
  # Calculate the total sales for each day of the last week
  daily_sales = (start_date..end_date).map do |date|
    total_sales = sales.where(created_at: date.beginning_of_day..date.end_of_day).sum(:total)
    {
      date: date.to_s,
      total_sales: total_sales
    }
  end

  # Render the daily sales as JSON
  render json: daily_sales
end



end
