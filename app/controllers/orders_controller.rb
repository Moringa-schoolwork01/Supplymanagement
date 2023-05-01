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
    order = Order.create(product_id: params[:product],quantity: params[:quantity], supplier_name: params[:supplier_name], buying_price: params[:buying_price,], total_price: params[:total_price,])
    render json: order, status: :created
  end

  


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
    params.permit(:product, :quantity, :supplier_name, :buying_price, :total_price)
  end
end
