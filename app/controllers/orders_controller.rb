class OrdersController < ApplicationController
   # GET /orders
   def index
    orders = Order.all
    render json: orders
  end

   # GET /orders/:id
  def show
    order = Order.find_by(id: params[:id])
    if order
      render json: order
    else
      render json: { error: "order  not found" }, status: :not_found
    end
  end 



#  creating an new order
  def create
    order = Order.create(date: params[:date], time: params[:time],  product_sold: params[:product_sold], quantity: params[:quantity], total_sales: params[:total_sales,],  customer_id: params[:customer_id,])
    render json: order, status: :created
  en

  


   # PATCH /order/:id
  def update
    order = Order.find_by(id: params[:id])
    if order
      order.update(order_params)
      render json: order 
    else
      render json: { error: "order not found" }, status: :not_found
    end
  end

   # DELETE /order/:id
def destroy
  order = Order.find_by(id: params[:id])
  if order
    order.destroy
  else
    render json: { error: "order not found" }, status: :not_found
  end
end


  private

  def order_params
    params.permit(:date, :time, :product_sold, :price, :quantity, :total_sales, :customer_id,)
  end
end
