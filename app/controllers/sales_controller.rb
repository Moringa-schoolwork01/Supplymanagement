class SalesController < ApplicationController

  # GET /sales: return an array of all sales
  def  index
      sales = Sale.all
      render json: sales
  end

      
  # POST /sales: create a new sales
  def create
      sale = Sale.create(date: params[:date], name: params[:name], price: params[:price], discount: params[:discount], total: params[:total] )
      render json: sale, status: :created
    end


  def update
      sale = Sale.find_by(id: params[:id])
      if sale
          sale.update(sales_params)
          render json: sales
      else
          render json: { error: "No sales" }, status: :not_found
      end
  end


  # DELETE /sales/:id: delete an existing sales 
  def destroy
      sales = Sales.find_by(id: params[:id])
      if sales
          sales.destroy
          head :no_content
          else
              render json: { error: "No sales" }, status: :not_found
          end
  end

  private
  
  def sales_params
      params.permit(:date, :name, :price, :discount, :total)
  end

end
