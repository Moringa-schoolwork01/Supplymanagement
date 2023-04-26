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
          render json: @products, only: [:id, :name, :price], methods: :total_sales
        end
      


        # WEEKLY REPORT OF ORDERS
        def weekly_report
            # Get the date 7 days ago from today
            start_date = Date.today - 7.days
        
            # Query for all orders created between start_date and today
            @orders = Order.where(created_at: start_date.beginning_of_day..Time.now)
        
            # Render the orders as JSON
            render json: @orders
          end

        end
   