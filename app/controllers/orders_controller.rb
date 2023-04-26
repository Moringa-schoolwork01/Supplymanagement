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
    order = Order.create(quantity: params[:quantity], total_sales: params[:total_sales,],  supplier_name: params[:supplier_name,])
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
    params.permit(:quantity, :total_sales, :supplier_name,)
  end
end
