class SalesController < ApplicationController
     # GET /sales: return an array of all sales
  def  index
    sales = Sale.all
    render json: sales
end

   # GET /sales/:id
def show
  sale = Sale.find_by(id: params[:id])
  if sale
    render json: sale
  else
    render json: { error: "sale  not found" }, status: :not_found
  end
end 




# POST /sales: create a new sales
def create
    sale = Sale.create(total: params[:total], quantity: params[:quantity], payment_method: params[:payment_method], customer_id: params[:customer_id], product_id: params[:product_id])
    render json: sale, status: :created
  end

def update
    sale = Sale.find_by(id: params[:id])
    if sale
        sale.update(sales_params)
        render json: sale
    else
        render json: { error: "No sales" }, status: :not_found
    end
end
# DELETE /sales/:id: delete an existing sales
def destroy
    sale = Sale.find_by(id: params[:id])
    if sale
        sale.destroy
        head :no_content
        else
            render json: { error: "No sales" }, status: :not_found
        end
end
private
def sales_params
    params.permit(:total, :quantity, :payment_method, :customer_id, :product_id,)
end
end